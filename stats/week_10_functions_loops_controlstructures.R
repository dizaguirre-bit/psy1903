getRandomNumber <- function(min = 1, max = 10, number = 1) {
  sample(min:max, number)
}
getRandomNumber()

# Conditionals

age <- 70
if (age >= 65) {
  print("You are a senior.")
} else if (age >=18) {
  print("You are an adult.")
} else if (age >= 13) {
  print("You are a teenager.")
} else {
  print("You are a child.")
}

# Loops

for (i in 1:5) {
  print(paste("Iteration:", i))
}

# Combining Loops and Conditionals

experiment_data <- data.frame(
  subject_id = c(1:20),
  rt = c(480, 530, 495, 610, 455, 390, 510, 565, 430, NA, 380, 230, 395, 710, 755, 590, 810, 365, 630, 200),
  congruent = c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, TRUE, FALSE, TRUE, FALSE),
  condition = c("control", "control", "incongruent", "control",
                "incongruent", "control", "incongruent", "incongruent",
                "control", "incongruent", "control", "control", "incongruent",
                "control", "incongruent", "control", "incongruent", "incongruent",
                "control", "incongruent")
)

experiment_data$rt_category <- NA
for (i in 1:nrow(experiment_data)) {
  if (is.na(experiment_data[i, "rt"])) {
    experiment_data[i, "rt_category"] <- "Unknown"
  } else if (experiment_data[i, "rt"] < 500) {
    experiment_data[i, "rt_category"] <- "Fast"
  } else {
    experiment_data[i, "rt_category"] <- "Slow"
  }
}

## Vectorized equivalent

experiment_data$rt_category_vector <- NA
experiment_data$rt_category_vector <- ifelse(experiment_data$rt < 500, "Fast", "Slow")

experiment_data$rt_category_vector <- ifelse(
  is.na(experiment_data$rt), "Unknown",              # If RT is missing
  ifelse(experiment_data$rt < 500, "Fast", "Slow")   # Otherwise, check Fast vs Slow
)

## Example matrix of reaction times from 3 blocks per subject
rt_data <- data.frame(
  block1 = c(520, 480, 610, 390, 450),
  block2 = c(530, 470, 600, 420, 500),
  block3 = c(540, 490, 590, 410, 480)
)
rt_data

rowMeans(rt_data)
colMeans(rt_data)

## Check notes for what rowMeans or colMeans would look like with an explicit for loop

apply(rt_data, 2, mean)
apply(rt_data, 1, sd)

experiment_data$rt[is.na(experiment_data$rt)] <- 500 # To start, replace the NA with 500 so tapply will work
## Mean RT by experimental condition
tapply(experiment_data$rt, experiment_data$condition, mean)
#   control incongruent 
#   498     505

## Mean RT by congruency (TRUE/FALSE)
tapply(experiment_data$rt, experiment_data$congruent, mean)
#   FALSE  TRUE 
#   447    556

## check notes to see what tapply would look like with an explicit for loop