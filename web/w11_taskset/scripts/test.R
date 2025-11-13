list.files("data/raw", pattern = "^est-experiment-.*\\.csv$", full.names = TRUE)

subject_id <- sub("\\.csv$", "", basename("est-experiment-2025-11-05-09-04-45.csv"))

participant_data <- read.csv(
  here::here("data", "raw", "est-experiment-2025-11-05-09-04-45.csv"),
  stringsAsFactors = FALSE
)

str(participant_data)
head(participant_data)
names(participant_data)

for(i in 1:nrow(participant_data)) {
     if (!is.na(participant_data[i, "response"])
       & is.na(participant_data[i, "rt"]) 
          & !is.na(participant_data[i, "stim_onset_ms"])  
          & !is.na(participant_data[i, "resp_time_ms"])) {
    participant_data[i, "rt"] <- participant_data[i, "resp_time_ms"] - participant_data[i, "stim_onset_ms"]
          }
     }
  
participant_data$rt  <- ifelse(
    !is.na(participant_data$response) 
    & is.na(participant_data$rt) 
    & !is.na(participant_data$stim_onset_ms) 
    & !is.na(participant_data$resp_time_ms), 
    participant_data$resp_time_ms - participant_data$stim_onset_ms, 
    participant_data$rt)