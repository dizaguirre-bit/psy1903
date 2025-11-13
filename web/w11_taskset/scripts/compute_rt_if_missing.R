compute_rt_if_missing <- function(data) {
 # Compute reaction time if missing value in rt column
   data$rt <- ifelse(
    !is.na(data$response) 
    & is.na(data$rt) 
    & !is.na(data$stim_onset_ms) 
    & !is.na(data$resp_time_ms), 
    data$resp_time_ms - data$stim_onset_ms, 
    data$rt)
   return(data)
}