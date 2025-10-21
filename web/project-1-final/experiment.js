let jsPsych = initJsPsych();
let timeline = [];
//Consent trial 
let consentTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
<h1> <span class = 'heading'>Welcome to the Emotional Stroop Task! </span></h1>
<p>Welcome!
<p>The experiment you are about to complete is an educational exercise designed for PSY 1903: Programming for Psychological Scientists</em>; it is not intended as a true scientific experiment.</p>
<p>No identifying information will be collected, data will not be shared beyond our class, and your participation is completely voluntary.</p>
<p>If you have any questions, please reach out to Dr. Garth Coombs (garthcoombs@fas.harvard.edu), one of the head instructors of PSY 1903.</p>
<p>If you agree to participate, press SPACE to continue.</p>
`,

    choices: [' '],

};
timeline.push(consentTrial);
//Welcome Trial
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
<h1> <span class = 'heading'>Welcome to the Emotional Stroop Task! </span></h1>
<p>In this experiment, you will see a series of words appear on the screen..</p>
<p>These words will be presented in a certain color: either red, blue, or green.</p>
<p>Your job is to identify as quickly and accurately as possible the color of the word.</p>
<p>Press the <span class = 'key'>R</span> key if the text is red.</p>
<p>Press the <span class = 'key'>G</span> key if the text is green.</p>
<p>Press the <span class = 'key'>B</span> key if the text is blue.</p>
<p>Please try to respond both <span class = 'bold'>quickly</span> and <span class = 'bold'>accurately </span>. If you don't respond quickly enough, the trial will be counted as missed.</p>
<p>Press <span class='key'>SPACE</span> to begin.</p>
`,

    choices: [' '],

};
timeline.push(welcomeTrial);

//Practice Trial 


for (let item of practice) {
    let colors = jsPsych.randomization.repeat(['red', 'green', 'blue'], 1);
    let color = colors.pop();
    let practiceTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
<span class='${color}'>${item.example}</span>
`,
        prompt: `<p>The following three trials are meant to be a practice trial. You will get feedback if you answer incorrectly. The main trial will begin after you complete these.</p>`,
        data: {
            collect: false,
            example: item.example,
            color: color,
        },
        on_finish: function (data) {
            if (data.response == 'r' && color == 'red') {
                data.correct = true;
            } else if (data.response == 'g' && color == 'green') {
                data.correct = true;
            } else if (data.response == 'b' && color == 'blue') {
                data.correct = true;
            }
            else {
                data.correct = false
            }
            if (data.response == 'r' || data.response == 'g' || data.response == 'b') {
                data.missed = false;
            }
            else {
                data.missed = true;
            }
        }
    }
    timeline.push(practiceTrial)
    //Feedback
    let feedbackTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `<h1>Incorrect</h1>`,
        trial_duration: 1000,
        choices: ['NO KEY'],
        on_load: function () {
            let lastTrialData = jsPsych.data.getLastTrialData().values()[0];
            if (lastTrialData.correct) {
                // Force skip this feedback trial if they got the previous trial correct
                jsPsych.finishTrial();
            }
        },
    }
    timeline.push(feedbackTrial)
}

//Message Before Real Task
let intermediateTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
<p>The real task will now begin. Please keep in mind you should respond as quickly and accurately as possible.</p>
<p>Press <span class='key'>SPACE</span> to begin.</p>
`,

    choices: [' '],

};
timeline.push(intermediateTrial);

//Stroop Task

let randomWords = jsPsych.randomization.repeat(words, 1);
for (let item of randomWords) {
    // Create a randomized array of colors
    let colors = jsPsych.randomization.repeat(['red', 'green', 'blue'], 1);


    // Choose the last color from the colors array
    let color = colors.pop();
    let stroopTrial = {
        type: jsPsychHtmlKeyboardResponse,
        choices: ['r', 'g', 'b'],
        // Dynamically set the class based on our randomly chosen color
        stimulus: `
<span class='${color}'>${item.word}</span>`
        ,
        trial_duration: 2000,
        data: {
            collect: true,
            valence: item.valence,
            word: item.word,
            color: color,
        },
        //checking to see if their response is correct
        on_finish: function (data) {
            if (data.response == 'r' && color == 'red') {
                data.correct = true;
            } else if (data.response == 'g' && color == 'green') {
                data.correct = true;
            } else if (data.response == 'b' && color == 'blue') {
                data.correct = true;
            }
            else {
                data.correct = false
            }
            if (data.response == 'r' || data.response == 'g' || data.response == 'b') {
                data.missed = false;
            }
            else {
                data.missed = true;
            }
        }
    }
    timeline.push(stroopTrial)
};




// Results Trial

let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO KEYS'],
    async: false,
    stimulus: function () {
        return `
<h1>Please wait...</h1>
<span class='loader'></span>
<p>We are saving the results of your inputs.</p>
`;
    },
    on_start: function () {
        //  ⭐ Update the following three values as appropriate ⭐
        let prefix = 'emotional-stroop-task';
        let dataPipeExperimentId = 'lWnpUKzBlZJ2';
        let forceOSFSave = false;

        // Filter and retrieve results as CSV data
        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['collect', 'trial_type', 'trial_index', 'plugin_version', 'stimulus',])
            .csv();

        // Generate a participant ID based on the current timestamp
        let participantId = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');

        // Dynamically determine if the experiment is currently running locally or on production
        let isLocalHost = window.location.href.includes('localhost');

        let destination = '/save';
        if (!isLocalHost || forceOSFSave) {
            destination = 'https://pipe.jspsych.org/api/data/';
        }

        // Send the results to our saving end point
        fetch(destination, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                experimentID: dataPipeExperimentId,
                filename: prefix + '-' + participantId + '.csv',
                data: results,
            }),
        }).then(data => {
            console.log(data);
            jsPsych.finishTrial();
        })
    }
}
timeline.push(resultsTrial);

//Debrief Trial

let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
<h1>Thank you!</h1>
<p>The task you just completed is called an Emotional Stroop Task. In this experiment, we are interested in whether people will take longer to name the color of a word with a threatening emotional connotation as compared to one without an emotional connotation. That is, we are interested in seeing if a negative emotional response causes individuals to lose focus by pulling their attention towards it. This would highlight the role of an attentional bias for negative emotions.</p>
<p> By measuring both response speed and accuracy, we can learn more about how focus and attention are affected by a person's inner state and biases.</p>
<p>Your responses will be combined with those of other participants to help us answer these questions. Individual data will remain confidential.</p>
<p>Thank you again for your time. You can now close this tab. </p>
`,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['example', 'collect', 'trial_type', 'trial_index', 'plugin_version', 'stimulus',])
            .csv();
        console.log(data);
    }
};
timeline.push(debriefTrial);

jsPsych.run(timeline);