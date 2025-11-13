summarize_behavior <- function(data, 
                   rt_min = 300, 
                   rt_max = 900) {
    # if (!all(c("block", "rt", "correct") %in% names(data)) ||
    #     !any(c("trialType") %in% names(data))) {
    #   stop("Input data frame is missing required columns.")
    # }
    # 
    if (!is.numeric(data$rt)) {
      data$rt <- as.numeric(data$rt)
      warning("'rt' column was not numeric. Coerced with as.numeric().")
    }
    
    ## Change correct column into logical
    data$correct <- as.logical(data$correct)
    
    # Create columns for filtering for correct
    correct_filtered  <- data[data$block == "practice" | data$block == "test", ]
    
    correct_filtered <- correct_filtered[correct_filtered$correct == TRUE, ]
   
    ## Filter out unreasonable reaction times (keep 300–900 ms)
    correct_filtered  <- correct_filtered[correct_filtered$rt  >= rt_min & 
                                              correct_filtered$rt  <= rt_max, ]
 
    mean_accuracy <- mean(data$correct, na.rm = TRUE)
    mean_rt_correct <- mean(correct_filtered$rt, na.rm = TRUE)
    
    behavior <- data.frame(
      mean_accuracy = mean_accuracy,
      mean_rt_correct = mean_rt_correct,
      stringsAsFactors = FALSE
    )
    
  return(behavior)
}