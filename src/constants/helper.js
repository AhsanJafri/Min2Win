export const Questions = [
  {
    id: 1,
    ques: 'Who was the Governor General Of Pakistan?',
    choice1: 'Allama Iqbal',
    choice2: 'Quaid-e-Azam',
    choice3: 'Benazir Bhutto',
    choice4: 'Chowdury Rehmat',
    ans: 'Quaid-e-Azam',
  },

  {
    id: 2,
    ques: 'Who is the Nation Poet Of Pakistan?',

    choice1: 'Allama Iqbal',
    choice2: 'Quaid-e-Azam',
    choice3: 'Mirza Galib',
    choice4: 'Chowdury Rehmat',
    ans: 'Allama Iqbal',
  },
  {
    id: 3,
    ques: 'The International Literacy Day is observed on?',
    choice1: 'Sep 8',
    choice2: 'Nov 28',
    choice3: 'May 2',
    choice4: 'Sep 22',
    ans: 'Sep 8',
  },
  {
    id: 4,
    ques: 'Bahubali festival is related to?',
    choice1: 'Islam',
    choice2: 'Hinduism',
    choice3: 'Buddhism',
    choice4: 'Jainism',
    ans: 'Jainism',
  },
  {
    id: 5,
    ques: 'Which day is observed as the World Standards Day?',
    choice1: 'June 26',
    choice2: 'Oct 14',
    choice3: 'Nov 15',
    choice4: 'Dec 2',
    ans: 'Oct 14',
  },
  {
    id: 6,
    ques: 'Who was the Governor General Of Pakistan?',
    choice1: 'Allama Iqbal',
    choice2: 'Quaid-e-Azam',
    choice3: 'Benazir Bhutto',
    choice4: 'Chowdury Rehmat',
    ans: 'Quaid-e-Azam',
  },

  {
    id: 7,
    ques: 'Who is the Nation Poet Of Pakistan?',

    choice1: 'Allama Iqbal',
    choice2: 'Quaid-e-Azam',
    choice3: 'Mirza Galib',
    choice4: 'Chowdury Rehmat',
    ans: 'Allama Iqbal',
  },
  {
    id: 8,
    ques: 'The International Literacy Day is observed on?',
    choice1: 'Sep 8',
    choice2: 'Nov 28',
    choice3: 'May 2',
    choice4: 'Sep 22',
    ans: 'Sep 8',
  },
  {
    id: 9,
    ques: 'Bahubali festival is related to?',
    choice1: 'Islam',
    choice2: 'Hinduism',
    choice3: 'Buddhism',
    choice4: 'Jainism',
    ans: 'Jainism',
  },
  {
    id: 10,
    ques: 'Which day is observed as the World Standards Day?',
    choice1: 'June 26',
    choice2: 'Oct 14',
    choice3: 'Nov 15',
    choice4: 'Dec 2',
    ans: 'Oct 14',
  },
];

export const getQuestion = () => {
  let no = Math.floor(Math.random() * Math.floor(10));
  return Questions[no];
};
