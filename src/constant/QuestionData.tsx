// Custom data
export const QuestionDataS1 = [
  {
    id: "1",
    questionText: "Ask patient to trace the diagram in order",
    answers: [
      { value: "1", valueLable: "+1", label: "Completed correctly" },
      { value: "0", valueLable: "O", label: "Not completed" },
    ],
  },
  {
    id: "2",
    questionText: "Ask patient to copy cube",
    answers: [
      { value: "1", valueLable: "+1", label: "Completed correctly" },
      { value: "0", valueLable: "O", label: "Not completed" },
    ],
  },
  {
    id: "3",
    questionText: "Ask patient to draw a clock (ten past eleven)",
    answers: [
      {
        value: "3",
        valueLable: "+3",
        label: "Correctly drew all featucher(i.e counter, number, hands)",
      },
      {
        value: "2",
        valueLable: "+2",
        label:
          "Correctly drew two out of three featucher(i.e two out of counter,number ,hands)",
      },
      { value: "c1", valueLable: "+1", label: "Correctly drew counter only" },
      { value: "n1", valueLable: "+1", label: "Correctly drew number only" },
      { value: "h1", valueLable: "+1", label: "Correctly drew hands only" },
      { value: "0", valueLable: " O", label: "None of these above" },
    ],
  },
];
export const QuestionDataS2 = [
  {
    id: "1",
    questionText: "Ask patient to name the first animal",
    answers: [
      { value: "1", valueLable: "+1", label: "Named lion" },
      { value: "0", valueLable: "O", label: "Did not name line" },
    ],
  },
  {
    id: "2",
    questionText: "Ask patient to name the second animal",
    answers: [
      { value: "1", valueLable: "+1", label: "Named rhinoceros" },
      { value: "0", valueLable: "O", label: "Did not name rhinoceros" },
    ],
  },
  {
    id: "3",
    questionText: "Ask patient to name the thired animal",
    answers: [
      { value: "1", valueLable: "+1", label: "Named camel" },
      { value: "0", valueLable: "O", label: "Did not name camel" },
    ],
  },
];
export const QuestionDataS3 = [
  {
    id: "1",
    questionText:
      "Read list of digits (2, 1, 8, 5, 4) at 1 digit/sec and ask patient to repeat them in the forward order",
    answers: [
      { value: "1", valueLable: "+1", label: "Repeated correctly" },
      { value: "0", valueLable: "O", label: "Did not repeat correctly" },
    ],
  },
  {
    id: "2",
    questionText:
      "Read list of digits (7, 4, 2) at 1 digit/sec and ask patient to repeat them in the backward order",
    answers: [
      { value: "1", valueLable: "+1", label: "Repeated correctly" },
      { value: "0", valueLable: "O", label: "Did not repeat correctly" },
    ],
  },
  {
    id: "3",
    questionText:
      "Read list of letters and ask patient to tap with their hand at each letter A: FBAC MNAA JKLB AFAK DEAA AJAM OFAAB",
    answers: [
      { value: "1", valueLable: "+1", label: "<2 errors" },
      { value: "0", valueLable: "O", label: ">=2 errors" },
    ],
  },
  {
    id: "4",
    questionText:
      "Ask patient to do five serial 7 subtractions starting at 100; patient should say 93, 86, 79, 72, 65",
    answers: [
      { value: "3", valueLable: "+3", label: "4 or 5 correct" },
      { value: "1", valueLable: "+1", label: "1 correct" },
      { value: "2", valueLable: "+2", label: "2 or 3 correct" },
      { value: "0", valueLable: "O", label: "0 correct" },
    ],
  },
];
export const QuestionDataS4 = [
  {
    id: "1",
    questionText:
      "Read list of digits (2, 1, 8, 5, 4) at 1 digit/sec and ask patient to repeat them in the forward order",
    answers: [
      { value: "1", valueLable: "+1", label: "Repeated correctly" },
      { value: "0", valueLable: "O", label: "Did not repeat correctly" },
    ],
  },
  {
    id: "2",
    questionText:
      "Read list of digits (7, 4, 2) at 1 digit/sec and ask patient to repeat them in the backward order",
    answers: [
      { value: "1", valueLable: "+1", label: "Repeated correctly" },
      { value: "0", valueLable: "O", label: "Did not repeat correctly" },
    ],
  },
  {
    id: "3",
    questionText:
      "Read list of letters and ask patient to tap with their hand at each letter A: FBAC MNAA JKLB AFAK DEAA AJAM OFAAB",
    answers: [
      { value: "1", valueLable: "+1", label: "Named >=11 words" },
      { value: "0", valueLable: "O", label: "Named <2 words" },
    ],
  },
];
export const QuestionDataS5 = [
  {
    id: "1",
    questionText:
      "Read list of digits (2, 1, 8, 5, 4) at 1 digit/sec and ask patient to repeat them in the forward order",
    answers: [
      { value: "1", valueLable: "+1", label: "Answered correctly" },
      { value: "0", valueLable: "O", label: "Did not answer correctly" },
    ],
  },
  {
    id: "2",
    questionText:
      "Read list of digits (7, 4, 2) at 1 digit/sec and ask patient to repeat them in the backward order",
    answers: [
      { value: "1", valueLable: "+1", label: "Answered correctly" },
      { value: "0", valueLable: "O", label: "Did not answer correctly" },
    ],
  },
];

export const memoryData = {
  description:
    'Read "Face", "Velvet", "Church", "Daisy", "Red" and ask the patient to repeat (do two trials and recall words)',
  instruction: "Check all the recalled words",
  headers: ["Face", "Velvet", "Church", "Daisy", "Red"], // Column headers for words
  trails: [
    {
      trailName: "1st Trial", // Name for the first row
      options: [
        { label: "Yes" }, // Checkbox option for "Face"
        { label: "Yes" }, // Checkbox option for "Velvet"
        { label: "Yes" }, // Checkbox option for "Church"
        { label: "Yes" }, // Checkbox option for "Daisy"
        { label: "Yes" }, // Checkbox option for "Red"
      ],
    },
    {
      trailName: "2nd Trial", // Name for the second row
      options: [
        { label: "Yes" },
        { label: "Yes" },
        { label: "Yes" },
        { label: "Yes" },
        { label: "Yes" },
      ],
    },
  ],
  pointscor: "",
};

export const memoryData1 = {
  description:
    '1. Ask patient to reacll word with no cue form the momory test perviously conducted ("Face", "Velvet", "Church", "Daisy", "Red")',
  instruction: "Check all the recalled words",
  headers: ["Face", "Velvet", "Church", "Daisy", "Red"], // Column headers for words
  trails: [
    {
      trailName: "", // Name for the first row
      options: [
        { label: "Yes" }, // Checkbox option for "Face"
        { label: "Yes" }, // Checkbox option for "Velvet"
        { label: "Yes" }, // Checkbox option for "Church"
        { label: "Yes" }, // Checkbox option for "Daisy"
        { label: "Yes" }, // Checkbox option for "Red"
      ],
    },
    {
      trailName: "", // Name for the second row
      options: [
        { label: "No" },
        { label: "No" },
        { label: "No" },
        { label: "No" },
        { label: "No" },
      ],
    },
  ],
  pointscor: "1 point per word recalled without cue",
};
export const memoryData2 = {
  description: "1. Ask patient the date, month, day, place and city",
  instruction: "Check all the recalled words",
  headers: ["Date", "Month", "Day", "Place", "City"], // Column headers for words
  trails: [
    {
      options: [
        { label: "Yes" }, // Checkbox option for "Face"
        { label: "Yes" }, // Checkbox option for "Velvet"
        { label: "Yes" }, // Checkbox option for "Church"
        { label: "Yes" }, // Checkbox option for "Daisy"
        { label: "Yes" }, // Checkbox option for "Red"
      ],
    },
  ],
  pointscor: "1 point per checkmark",
};
