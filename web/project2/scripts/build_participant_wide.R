#### build_participant_wide -----------------------------------------------------
## Purpose: Loop over all raw participant CSV files, process each one with
##          import_and_process(), and combine results into a single wide table.
##
## Inputs:
##   - None (function automatically scans data/raw for *.csv files)
## Output:
##   - A data frame with one row per participant and one column per summary
##     variable (RT means, accuracy, questionnaire score, D score, etc.).
##
## Example call:
##   participant_wide <- build_participant_wide()

build_participant_wide <- function() {
  files <- list.files(
    here::here("data", "raw"),
    pattern = "sub-.*\\.csv$",
    full.names = FALSE
  )
  
  ## FIX: Change full.names to FALSE instead of TRUE so "files" only lists the .csv names for later use
  
  ## If you see an error "cannot open the connection", it usually means that R cannot find something where it's looking. Check your paths, files, and file_name. Remember where file_name comes from.
  
  if (length(files) == 0L) stop("No CSV files found in data/raw")
  
  ##rows <- list()
  ##for (i in seq_along(files)) {
  ##   file_name <- files[i]
  ##   rows[[i]] <- import_and_process(file_name)
  ## }
  
  
  # Refactor #1: replaced for loop with lapply for readability and more clear about its purpose.
  ## also renamed "rows" since it was kind of unclear what this variable was for
  subject_summary <- lapply(files, import_and_process)

  # Refactor #3: renamed "out" because that variable name was unclear
  
  study_summary <- do.call(rbind, subject_summary)

# Refactor #2: removed "rownames(out) <- NULL" since it added nothing. df_clean is unchanged with and without it.
  
  return(study_summary)
}