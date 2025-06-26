let readlinesync = require("readline-sync");
const quizData = [
  {
    question:
      "Which article of the Constitution of Nepal defines the structure of federalism?",
    options: {
      A: "Article 56",
      B: "Article 58",
      C: "Article 74",
      D: "Article 79",
    },
    answer: "A",
  },
  {
    question: "Who is the first Nepali cricketer to score an ODI century?",
    options: {
      A: "Paras Khadka",
      B: "Rohit Paudel",
      C: "Gyanendra Malla",
      D: "Kushal Bhurtel",
    },
    answer: "A",
  },
  {
    question: "Who was the Chief Justice of Nepal in 2024?",
    options: {
      A: "Hari Krishna Karki",
      B: "Cholendra Shumsher JB Rana",
      C: "Deepak Kumar Karki",
      D: "Ananda Mohan Bhattarai",
    },
    answer: "A",
  },
  {
    question:
      "Which Nepali athlete has won multiple international medals in taekwondo?",
    options: {
      A: "Tilak Ram Tharu",
      B: "Deepak Bista",
      C: "Sita Rai",
      D: "Gaurika Singh",
    },
    answer: "B",
  },
  {
    question:
      "Who holds the record for the highest individual score in T20I for Nepal (as of 2024)?",
    options: {
      A: "Dipendra Singh Airee",
      B: "Rohit Paudel",
      C: "Kushal Malla",
      D: "Kushal Bhurtel",
    },
    answer: "C",
  },
  {
    question: "Who captained Nepal in their first-ever ODI match?",
    options: {
      A: "Rohit Paudel",
      B: "Paras Khadka",
      C: "Sharad Vesawkar",
      D: "Binod Bhandari",
    },
    answer: "B",
  },
  {
    question:
      "Which amendment of the Constitution of Nepal updated the map to include Kalapani, Lipulekh, and Limpiyadhura?",
    options: {
      A: "First Amendment",
      B: "Second Amendment",
      C: "Third Amendment",
      D: "Fourth Amendment",
    },
    answer: "B",
  },
  {
    question:
      "Which international summit did Nepal attend for the first time in 2023 as an observer country?",
    options: {
      A: "G20 Summit",
      B: "BRICS Summit",
      C: "ASEAN Regional Forum",
      D: "Shanghai Cooperation Organization",
    },
    answer: "D",
  },
  {
    question: "What significant event was launched to promote tourism in 2020?",
    options: {
      A: "Nepal Rising 2020",
      B: "Visit Nepal 2020",
      C: "Nepal Tourism Year",
      D: "Sagarmatha Festival",
    },
    answer: "B",
  },
  {
    question:
      "Which sport is most popular in Nepal after football and cricket?",
    options: {
      A: "Volleyball",
      B: "Basketball",
      C: "Taekwondo",
      D: "Badminton",
    },
    answer: "A",
  },
  {
    question:
      "Which airport was inaugurated as an international airport in Nepal in 2023?",
    options: {
      A: "Pokhara International Airport",
      B: "Nepalgunj Airport",
      C: "Biratnagar Airport",
      D: "Janakpur Airport",
    },
    answer: "A",
  },
  {
    question:
      "Who was the chairperson of the Constitution Drafting Committee in 2015?",
    options: {
      A: "Subash Chandra Nembang",
      B: "Purna Bahadur Khadka",
      C: "Krishna Sitaula",
      D: "Agni Kharel",
    },
    answer: "A",
  },
  {
    question: "Who unified Nepal in the 18th century?",
    options: {
      A: "Bhimsen Thapa",
      B: "Prithvi Narayan Shah",
      C: "Mahendra",
      D: "Jung Bahadur Rana",
    },
    answer: "B",
  },
  {
    question:
      "Who was the first Nepali athlete to qualify for the Olympics without a wildcard entry?",
    options: {
      A: "Deepak Bista",
      B: "Sita Rai",
      C: "Gaurika Singh",
      D: "Jit Bahadur Karki",
    },
    answer: "C",
  },
  {
    question:
      "Nepal made its first appearance in a T20 World Cup in which year?",
    options: {
      A: "2014",
      B: "2016",
      C: "2020",
      D: "2024",
    },
    answer: "A",
  },
  {
    question:
      "Which country has won the most ICC Men's Cricket World Cups (as of 2023)?",
    options: {
      A: "India",
      B: "Australia",
      C: "England",
      D: "West Indies",
    },
    answer: "B",
  },
  {
    question:
      "Which tech policy was introduced by Nepal in 2024 to regulate digital platforms and AI tools?",
    options: {
      A: "Digital Security Bill",
      B: "Nepal Cyber Regulation Act",
      C: "Electronic Transactions Act (Revised)",
      D: "National AI and Data Policy",
    },
    answer: "D",
  },
  {
    question:
      "Which Nepali football club won the first-ever A-Division League title?",
    options: {
      A: "Three Star Club",
      B: "Manang Marshyangdi Club",
      C: "New Road Team (NRT)",
      D: "Police Club",
    },
    answer: "C",
  },
  {
    question: "Which Nepali bowler recorded a hat-trick in a T20I match?",
    options: {
      A: "Sandeep Lamichhane",
      B: "Avinash Bohara",
      C: "Abinash Karn",
      D: "Karan KC",
    },
    answer: "A",
  },
  {
    question: "Who wrote the national anthem of Nepal?",
    options: {
      A: "Byakul Maila",
      B: "Madan Bhandari",
      C: "Laxmi Prasad Devkota",
      D: "Gopal Yonjan",
    },
    answer: "A",
  },
  {
    question:
      "What was the name of the agreement that ended the Maoist insurgency in Nepal?",
    options: {
      A: "Peace Pact",
      B: "12-Point Agreement",
      C: "Comprehensive Peace Accord",
      D: "Democracy Accord",
    },
    answer: "C",
  },
  {
    question:
      "Which Nepali climber has the record of fastest ascent of all 14 eight-thousanders?",
    options: {
      A: "Tenzing Norgay",
      B: "Kami Rita Sherpa",
      C: "Nirmal Purja",
      D: "Ang Rita Sherpa",
    },
    answer: "C",
  },
  {
    question:
      "Who is the current head coach of Nepal national cricket team (as of 2024)?",
    options: {
      A: "Dav Whatmore",
      B: "Pubudu Dassanayake",
      C: "Monty Desai",
      D: "Paras Khadka",
    },
    answer: "C",
  },
  {
    question:
      "Who is the youngest male cricketer to score an international fifty?",
    options: {
      A: "Rohit Paudel",
      B: "Shubman Gill",
      C: "Sachin Tendulkar",
      D: "Kushal Malla",
    },
    answer: "A",
  },
  {
    question: "Which country did Nepal defeat to earn ODI status in 2018?",
    options: {
      A: "Papua New Guinea",
      B: "Hong Kong",
      C: "UAE",
      D: "Namibia",
    },
    answer: "B",
  },
  {
    question: "What is the national sport of Nepal?",
    options: {
      A: "Cricket",
      B: "Football",
      C: "Volleyball",
      D: "Kabaddi",
    },
    answer: "C",
  },
  {
    question:
      "Who is the first Nepali cricketer to play franchise cricket outside Nepal?",
    options: {
      A: "Karan KC",
      B: "Sandeep Lamichhane",
      C: "Dipendra Singh Airee",
      D: "Kushal Bhurtel",
    },
    answer: "B",
  },
  {
    question:
      "When did Nepal win its first South Asian Games football gold medal?",
    options: {
      A: "1984",
      B: "1993",
      C: "1999",
      D: "2016",
    },
    answer: "B",
  },
  {
    question:
      "Who built the Dharahara tower that was destroyed in the 2015 earthquake?",
    options: {
      A: "Jung Bahadur Rana",
      B: "Bhimsen Thapa",
      C: "Prithvi Narayan Shah",
      D: "Tribhuvan Shah",
    },
    answer: "B",
  },
  {
    question:
      "Which is the largest hydroelectric project under construction in Nepal?",
    options: {
      A: "Upper Tamakoshi",
      B: "Budhigandaki",
      C: "Kulekhani",
      D: "Trishuli-3A",
    },
    answer: "B",
  },
];

function showQuestion(quizData) {
  console.log("\nThis is a Simple CLI-based Quiz Game developed by @vabin... Score 25+++ to prove yourself a genius...!");
  let score = 0;
  for (let i = 0; i < quizData.length; i++) {
    // console.log("quizData is:", quizData);
    console.log(`\nQues.${i + 1} - ${quizData[i].question} \n`);
    for (let key in quizData[i].options) {
      console.log(`${key}-${quizData[i].options[key]}`);
    }
    let answer;
    while (true) {
      try {
        const correctOptions = ["a", "b", "c", "d"];
        answer = readlinesync.question("Enter your Answer ->(A/B/C/D) -")

        if (!correctOptions.includes(answer.toLowerCase())) {
          throw new Error("Invalid Options: choose between a, b, c, d");
        }
        break;
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }
    if (answer.toUpperCase() === quizData[i].answer) {
      console.log(`Congrats! you answered correctly!`);
      score++;
    } else {
      console.log(
        `Oops! you're weak in GK...\nThe correct answer is ${quizData[i].answer}`
      );
    }
    console.log(`Your Score is ${score}`);
  }
  if (score >= 25) {
    console.log("You're really Good at it! and yeah you're Genius");
  }
}
showQuestion(quizData);
