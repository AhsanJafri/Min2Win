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
    ques:
      'Which of the following was the theme of the World Red Cross and Red Crescent Day?',
    choice1: 'Dignity for all - focus on women',
    choice2: 'Dignity for all - focus on Children',
    choice3: 'Focus on health for all',
    choice4: 'Nourishment for all-focus on children',
    ans: 'Dignity for all - focus on Children',
  },

  {
    id: 7,
    ques: 'September 27 is celebrated every year as?',
    choice1: 'Teachers Day',
    choice2: 'National Integration Day',
    choice3: 'World Tourism Day',
    choice4: 'International Literacy Day',
    ans: 'World Tourism Day',
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
    ques: 'Who is the author of Manas Ka-Hans ?',
    choice1: 'Khushwant Singh',
    choice2: 'Prem Chand',
    choice3: 'Jayashankar Prasad',
    choice4: 'Amrit Lal Nagar',
    ans: 'Amrit Lal Nagar',
  },
  {
    id: 10,
    ques:
      'The death anniversary of which of the following leaders is observed as Martyrs Day?',
    choice1: 'Smt. Indira Gandhi',
    choice2: 'PI. Jawaharlal Nehru',
    choice3: 'Mahatma Oandhi',
    choice4: 'Lal Bahadur Shastri',
    ans: 'Mahatma Oandhi',
  },

  {
    id: 11,
    ques: 'Which of these sounds would you associate with the heart?',
    choice1: 'Tring Tring',
    choice2: 'Tap Tap',
    choice3: 'Click Click',
    choice4: 'Dhak Dhak',
    ans: 'Dhak Dhak',
  },

  {
    id: 12,
    ques:
      'Who is the only leader to be elected Prime Minister of Pakistan three times??',
    choice1: 'Syed Yousaf Raza Gillani',
    choice2: 'Benazir Bhutto',
    choice3: 'Liaqat Ali Khan',
    choice4: 'Dhak Dhak',
    ans: 'Nawaz Sharif',
  },

  {
    id: 13,
    ques:
      'The black widow, which eats the male counterpart after mating, as a female species of which animal?',
    choice1: 'Sloth',
    choice2: 'Ant',
    choice3: 'Spider',
    choice4: 'Termite',
    ans: 'Spider',
  },

  {
    id: 14,
    ques:
      'Douglas Engelbert, who passed away in 2013, is credited as the inventor of which of these products?',
    choice1: 'Mobile Phone',
    choice2: 'Computer Mouse',
    choice3: 'Bluetooth Mouse',
    choice4: 'Digital camera',
    ans: 'Computer Mouse',
  },

  {
    id: 15,
    ques:
      'In 1850, the first experimental electric telegraph line in India was set up between Calcutta and which place?',
    choice1: 'Diamond Harbour',
    choice2: 'Darjeeling',
    choice3: 'Murshidabad',
    choice4: 'Dhaka',
    ans: 'Diamond Harbour',
  },
];

export const getQuestion = () => {
  let no = Math.floor(Math.random() * Math.floor(15));
  return Questions[no];
};
