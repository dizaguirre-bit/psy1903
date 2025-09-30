let jsPsych = initJsPsych();

let timeline = [];

// Welcome
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Welcome to the Math Response Time Task!</h1> 
    <p>In this experiment...</p>
    <p>Press SPACE to begin the first part.</p>
    `,
    choices: [' '],
};
timeline.push(welcomeTrial);

jsPsych.run(timeline);