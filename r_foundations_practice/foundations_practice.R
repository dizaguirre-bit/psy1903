#### Deano Izaguirre, 10/28/2025, Week 9 Task Set: Foundations Practice in R" ####

age <- 19
name <- "Deano"
is_psych_major <- TRUE
favorite_numbers <- c(6, 12, 36, 42)

typeof(age)
typeof(name)
typeof(is_psych_major)
typeof(favorite_numbers)

class(age)
class(name)
class(is_psych_major)
class(favorite_numbers)

rt <- c(480, 530, 495, 610, 455, 390, 510, 565, 430, 500)
mean(rt)
sd(rt)
rt_adjusted <- rt + 50
rt_adjusted
mean_diff <- mean(rt_adjusted) - mean(rt)
mean_diff

rt <- c(480, 530, 495, 610, NA, 390, 510, 565, 430, 500)
mean(rt, na.rm = TRUE)

summary(rt)
str(rt)

subject_id <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
congruent <- c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE)
condition <- c("control", "control", "incongruent", "control", "incongruent", "control", "incongruent", "incongruent", "control", "incongruent")
experiment_data <- data.frame(
  subject_id,
  congruent,
  condition,
  rt
)

head(experiment_data)
tail(experiment_data)
summary(experiment_data)
str(experiment_data)

experiment_data$rt[3]
experiment_data$rt[rt > 500]
experiment_data[1:5, c("subject_id", "rt")]
experiment_data[4, ]
experiment_data[, "condition"]
experiment_data$condition

fast_trials <- experiment_data[experiment_data$rt < 500, ]
incongruent_trials <- experiment_data[experiment_data$congruent == FALSE, ]
fast_incongruent <- experiment_data[experiment_data$rt < 500 & experiment_data$congruent == FALSE, ]

nrow(fast_trials)
nrow(incongruent_trials)
nrow(fast_incongruent)

sapply(experiment_data, typeof)
experiment_data$condition <- as.factor(experiment_data$condition)
str(experiment_data)

mean(experiment_data[experiment_data$congruent == TRUE, "rt"])
mean(experiment_data[experiment_data$congruent == FALSE, "rt"], na.rm = TRUE)

mean(experiment_data[experiment_data$condition == "control", "rt"], na.rm = TRUE)
mean(experiment_data[experiment_data$condition == "incongruent", "rt"], na.rm = TRUE)
517.5 - 488

congruency_effect <- mean(experiment_data[experiment_data$condition == "control", "rt"], na.rm = TRUE) - mean(experiment_data[experiment_data$condition == "incongruent", "rt"], na.rm = TRUE)
print(paste("The congruency effect was", congruency_effect, "milliseconds."))

experiment_data$rt_z<- (experiment_data$rt - mean(experiment_data$rt, na.rm = TRUE)) / sd(experiment_data$rt, na.rm = TRUE)
head(experiment_data)

experiment_data$fast <- experiment_data$rt < 500
head(experiment_data)
new_row <- data.frame(subject_id = 11, rt = 470, congruent = TRUE, condition = "control", rt_z = NA, fast = TRUE)
experiment_data <- rbind(experiment_data, new_row)

experiment_data$rt_z <- NULL
names(experiment_data)

clean_data <- experiment_data[experiment_data$rt > 300 & experiment_data$rt < 700 & !is.na(experiment_data$rt), ]
nrow(clean_data)

mean(clean_data$rt)
mean(experiment_data$rt, na.rm = TRUE)
