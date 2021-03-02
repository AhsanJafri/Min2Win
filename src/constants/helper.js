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
    ans: 'Quaid-e-Azam',
  },
];

export const getQuestion = () => {
  let no = Math.floor(Math.random() * Math.floor(2));
  return Questions[no];
};
