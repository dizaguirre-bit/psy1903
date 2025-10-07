let jsPsych = initJsPsych();

let timeline = [];

// Welcome
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1 class = 'welcome'>Welcome to the Math Response Time Task!</h1> 
    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press <span class = 'key'>SPACE</span> to begin the first part.</p>
    `,
    choices: [' '],
};

timeline.push(welcomeTrial);

// Experimental Trial
for (let condition of conditions) {
    let mathTrial = {
        type: jsPsychSurveyHtmlForm,
        preamble: `
            <p class = 'equations'>What is <span class = 'num'>${condition.num1}</span> + <span class = 'num'>${condition.num2}</span>?</p>
            `,
        html: `<p><input type='text' name='answer' id='answer'></p>`,
        autofocus: 'answer', // id of the field we want to auto-focus on when the trial starts
        button_label: 'Submit Answer',
        data: {
            collect: true,
        },
        // Whether correct or incorrect
        on_finish: function (data) {
            data.num1 = condition.num1;
            data.num2 = condition.num2;
            data.correctAnswer = condition.correctAnswer;
            data.answer = data.response.answer;
            if (data.answer == condition.correctAnswer) {
                data.correct = true;
            }
            else {
                data.correct = false;
            }
        }
    }
    timeline.push(mathTrial);
}


// Debrief
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You may now close this tab</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['collect', 'response', 'trial_type', 'trial_index', 'plugin_version'])
            .csv();
        console.log(data);
    }
}
timeline.push(debriefTrial)

jsPsych.run(timeline);

/* // Experimental Trial
for (let condition of conditions) {

    let choices = [condition.correctAnswer, condition.altAnswer];
    choices = jsPsych.randomization.repeat(choices, 1);

    let mathTrial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p>What is ${condition.num1} + ${condition.num2}?</p>`,
        choices: choices,
        data: {
            collect: true,
        },
        on_finish: function (data) {
            data.num1 = condition.num1;
            data.num2 = condition.num2;
            data.correctAnswer = condition.correctAnswer;
            data.altAnswer = condition.altAnswer

            // use response index to see what choice they picked and if it matched the correct answer
            // data.correct = choices[data.response] == condition.correctAnswer
            // if (choices[data.response] == condiiton.correctAnswer) {
            // data.correct = true;
            // }
            // else {
            //     data.correct = false;
            // }

            data.answer = data.response
            if (data.answer == 0 && condition.correctAnswer == choices[0]) {
                data.correct = true;
            }
            else if (data.answer == 1 && condition.correctAnswer == choices[1]) {
                data.correct = true;
            }
            else {
                data.correct = false;
            }
        }
    };
    timeline.push(mathTrial);
}

// Debrief
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You may now close this tab</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['collect', 'stimulus', 'response', 'trial_type', 'trial_index', 'plugin_version'])
            .csv();
        console.log(data);
    }
}
timeline.push(debriefTrial)

jsPsych.run(timeline); */