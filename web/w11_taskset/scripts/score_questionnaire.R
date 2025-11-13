## Purpose: Take a JSON string from the questionnaire row and return a single score.
## Scale: jsPsychSurveyLikert default 0–4. Reverse items: 2, 5, 9.
score_questionnaire <- function(json_string, 
                     reverse = c(2, 5, 9), 
                     scale_min = 0L, 
                     scale_max = 4L) {
# If the JSON string is missing or empty, return a numeric NA
  if (is.null(json_string) ||
      length(json_string) == 0 ||
      any(is.na(json_string)) ||
      !is.character(json_string) ||
      !nzchar(json_string[1])) {
    return(NA_real_)
  }
  
  ## 1) Parse the JSON string into an R object
  ##    Use jsonlite::fromJSON() to convert the text into a list.
  responses <- jsonlite::fromJSON(json_string)

  # After parsing + flattening to numeric 'responses':
  responses <- as.numeric(unlist(fromJSON(json_string)))
  
  # If reverse is provided, it must reference valid item positions
  if (length(reverse) > 0) {
    if (any(reverse < 1 | reverse > length(responses))) {
      stop("One or more 'reverse' item indices are out of range for this questionnaire response.")
    }
  }
  
  ## 3) Reverse-score the specified items
  if (length(reverse) > 0) {
    responses[reverse] <- (scale_max + scale_min) - responses[reverse]
  }
  
  ## 5) Compute the final score
  sum_score <- sum(responses, na.rm = TRUE)
  
  return(sum_score)
}