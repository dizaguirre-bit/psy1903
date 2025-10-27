x <- 3.14
typeof(x)
class(x)
is.numeric(x)

int <- 5L        # Integer
typeof(int)      # Integer
class(int)       # Integer
is.numeric(int)  # TRUE
is.integer(int)  # TRUE

word <- "hello!"  # Character
typeof(word)      # Character

flag <- TRUE      # Logical
typeof(flag)      # Logical
flag2 <- F
typeof(flag2)     # Logical
is.logical(flag)

scores <- c(90, 85, NA, 88)
scores
# [1] 90 85 NA 88

mean(scores)
# [1] NA
sum(scores)
# [1] NA
x + missing  # adding 3.14 + NA
# [1] NA

mean(scores, na.rm = TRUE)
# [1] 87.66667

is.na(scores)
# [1] FALSE FALSE TRUE FALSE

numeric_vector <- c(1.5, 2.3, 5.0)  # Numeric vector
character_vector <- c("apple", "banana", "cherry")  # Character vector
typeof(character_vector) # Will output "character" in the console window

my_list <- list(1.5, "apple", TRUE, c(1, 2, 3))  # Mixed elements

my_matrix <- matrix(1:9, nrow = 3, ncol = 3)  # 3x3 matrix

my_array <- array(1:12, dim = c(3, 2, 2))  # 3D array

my_data <- data.frame(
  id = 1:3,
  name = c("Alice", "Bob", "Charlie"),
  score = c(85.5, 92.0, 88.5)
)

view(my_data)

str(my_data)

colors <- factor(c("red", "green", "blue", "green", "red"))

my_function <- function(x, y) {
  return(x + y)
}
my_function(3, 5)  # Calls the function and returns 8

as.numeric("5")
as.character(123)
as.logical(0)
as.data.frame(matrix(1:6, nrow = 2))

# Create sample data
subject_id <- 1:20
rt <- c(470, 360, 665, 400, 445, 270, 500, 565, 350, 445, 275, NA, 600, 290, 560, 375, 450, 480, 325, 430)
congruent <- c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE)
color <- c("red", "blue", "blue", "green", "red", "red", "blue", "green", "blue", "green", "red", "blue", "green", "blue", "green", "red", "blue", "blue", "green", "red")

# Combine into data frame
data <- data.frame(subject_id, rt, congruent, color)

# Inspect
head(data)    # Displays the top 6 observations — great for checking that your data imported or assigned correctly.
tail(data)    # Displays the bottom 6 observations — useful for confirming structure and missing values at the end.
mean(data$rt) # Without na.rm = TRUE, mean() returns NA because R doesn’t ignore missing values by default.
mean(data$rt, na.rm=TRUE) # This tells R to remove any missing values before calculating the mean. Calculates mean of all RT's = 434.47ms
summary(data) # Displays descriptive statistics for each variable (column) in the dataframe.
str(data)     # Displays the structure of the dataframe — its dimensions, variable types, and a sample of values.

fruits <- c("apple", "banana", "cherry", "date")
fruits[1]       # first element
fruits[2:4]     # elements 2 through 4
fruits[-1]      # all but the first element

nums <- c(5, 10, 15, 20)
nums[c(TRUE, FALSE, TRUE, FALSE)]  # selects 5 and 15
nums[nums > 10]                    # selects elements greater than 10

scores <- c(math = 90, english = 85, science = 92)
scores["math"]
scores[c("math", "science")]

student <- list(
  name = "Alex",
  age = 20,
  scores = c(88, 92, 95)
)
student$name
student[["age"]]
student$scores[2]

m <- matrix(1:9, nrow = 3, byrow = TRUE)
m
m[1, 2]     # row 1, column 2
m[ , 3]     # all rows, column 3
m[2, ]      # entire second row
m[-1, ]     # exclude the first row

df <- data.frame(
  id = 1:4,
  name = c("Alice", "Bob", "Carmen", "Diego"),
  score = c(88, 92, 95, 90)
)

df[1, ]       # selects the first row (all columns)
df[, 2]       # selects the second column (all rows)
df[1:2, c(1, 3)]  # selects rows 1–2 and columns 1 and 3

df[-1, ]   # all rows except the first
df[, -2]   # all columns except the second

df$name       # returns the 'name' column as a vector
df$score      # returns the 'score' column as a vector
df[, "score"] # identical result

df[1:2, c("id", "score")] 

df[, "score", drop = FALSE]

col_to_access <- "score"
df[[col_to_access]]   # same as df$score

df[df$score > 90, ]      # rows where score is greater than 90
df[df$name == "Alice", ] # rows where name is Alice

df[df$score > 90 & df$id < 4, ]

df$passed <- df$score >= 90
df

df$passed <- NULL
df

new_row <- data.frame(id = 5, name = "Eva", score = 93)
df <- rbind(df, new_row)
df

df <- df[-1, ]  # removes the first row
df

df[df$score > 90 & df$name != "Bob", c("name", "score")]

columns_to_keep <- c("id", "score")
df[, columns_to_keep]

mean(df[df$score > 90, "score"])
sum(df$score > 90)

data[data$rt > 400 & !is.na(data$rt), ]

df[df$score > 90, "name"]

subset(df, score > 90 & id < 4, select = c(name, score))

data <- data.frame(
  subject_id = 1:20,
  rt = c(470, 360, 665, 400, 445, 270, 500, 565, 350, 445,
         275, NA, 600, 290, 560, 375, 450, 480, 325, 430),
  congruent = c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE,
                FALSE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE,
                TRUE, FALSE, TRUE, FALSE, TRUE, FALSE),
  color = c("red", "blue", "blue", "green", "red", "red", "blue",
            "green", "blue", "green", "red", "blue", "green", "blue",
            "green", "red", "blue", "blue", "green", "red")
)

congruent_trials <- data[data$congruent == TRUE, ]
fast_trials <- data[data$rt < 500, ]
fast_congruent <- data[data$congruent == TRUE & data$rt < 500, ]

mean(data[data$congruent == TRUE, "rt"], na.rm = TRUE)
mean(data[data$congruent == FALSE, "rt"], na.rm = TRUE)
sum(is.na(data$rt))
mean(data[data$color == "blue", "rt"], na.rm = TRUE)
mean(data[data$color == "red", "rt"], na.rm = TRUE)

subset_cols <- data[, c("subject_id", "rt", "congruent")]
