## test_debug.R

## Clear global environment (mimick how Quarto works)
rm(list = ls())

## Source all scripts
source(here::here("scripts/calculate_iat_dscore.R"))
source(here::here("scripts/score_questionnaire.R"))
source(here::here("scripts/summarize_behavior.R"))
source(here::here("scripts/import_and_process.R"))
source(here::here("scripts/build_participant_wide.R"))

## Set one file name
file_name <- "sub-001_P2P1_CONGfirst.csv"

## Test functions
df_clean <- import_and_process(file_name)
print(df_clean)