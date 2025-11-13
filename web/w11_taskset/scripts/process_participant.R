process_participant <- function(file_path) {
  # Derive subject ID from file path
  subject_id <- sub("\\.csv$", "", basename(file_path))
  
  # Read the raw CSV
  participant_data <- read.csv(
    here::here("data", "raw", file_path),
    stringsAsFactors = FALSE
  )
 
#### Compute RT if it is missing
participant_data <- compute_rt_if_missing(participant_data)
  
#### Questionnaire score -----------------------------------------------------
## Score questionnaire with our defaults (reverse 2,5,9 on 0–4 scale)
  esq_sum <- score_questionnaire(
    json_string = participant_data[participant_data$trialType == "es_questionnaire", "response"],
    reverse = c(2, 5, 9),
    scale_min = 0L,
    scale_max = 4L
  )
    
#### Behavioral summary ------------------------------------------------------
## Filter and summarize behavioral data (300–900 ms)
behavior <- summarize_behavior(participant_data, rt_min = 300, rt_max = 900)
  
  #### Save participant summary ------------------------------------------------
  ## Ensure output directory is created
  dir.create(
    here::here("data", "cleaned", "participants"),
    recursive = TRUE,
    showWarnings = FALSE
  )
  
  ## Combine into a single-row participant summary
  df_clean <- data.frame(
    subject_id = subject_id,
    behavior = behavior,
    esq_sum = esq_sum
  )

## Save summary .csv to cleaned/participants
  write.csv(
    df_clean,
    here::here("data", "cleaned", paste0(subject_id, "_processed.csv")),
    row.names = FALSE
  )

#### Return output -----------------------------------------------------------
stopifnot(nrow(df_clean) == 1)  # one row per participant
return(df_clean)
}
