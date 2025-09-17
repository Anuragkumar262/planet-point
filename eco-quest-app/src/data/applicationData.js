// Sample data from the provided JSON
export const applicationData = {
  students: [
    {"id": 1, "name": "Shivam Pathak", "school": "Green Valley High", "points": 2340, "level": 8, "badges": 15, "rank": 1, "completedChallenges": 47, "streak": 12, "profileImage": "👩‍🎓"},
    {"id": 2, "name": "Anurag Kumar", "school": "Eco International", "points": 1890, "level": 6, "badges": 12, "rank": 2, "completedChallenges": 35, "streak": 8, "profileImage": "👨‍🎓"},
    {"id": 3, "name": "Shubham Maurya", "school": "Nature Academy", "points": 1250, "level": 5, "badges": 9, "rank": 3, "completedChallenges": 28, "streak": 5, "profileImage": "👩‍🎓"},
    {"id": 4, "name": "Rishabh Maurya", "school": "Green Valley High", "points": 1180, "level": 4, "badges": 8, "rank": 4, "completedChallenges": 25, "streak": 3, "profileImage": "👨‍🎓"},
    {"id": 5, "name": "Priyansha", "school": "Eco International", "points": 980, "level": 4, "badges": 7, "rank": 5, "completedChallenges": 22, "streak": 6, "profileImage": "👩‍🎓"}
  ],
  challenges: [
  {
    "id": 1,
    "title": "Water Conservation Quiz",
    "description": "Test your knowledge about water conservation methods.",
    "type": "quiz",
    "points": 50,
    "sdg": "SDG 6",
    "difficulty": "Easy",
    "category": "water",
    "questions": [
      {
        "question": "How much water can a dripping tap waste per day?",
        "options": ["1 liter", "10 liters", "50 liters", "100 liters"],
        "correct": 2,
        "explanation": "A dripping tap can waste up to 50 liters of water per day."
      },
      {
        "question": "Which is the most effective water-saving method?",
        "options": ["Shorter showers", "Fix leaks", "Use buckets", "All of the above"],
        "correct": 3,
        "explanation": "All methods combined provide the most effective water conservation."
      },
      {
        "question": "How much water is recommended per person per day for basic needs, according to WHO?",
        "options": ["10 liters", "25 liters", "50 liters", "100 liters"],
        "correct": 2,
        "explanation": "WHO recommends at least 50 liters of water per person per day to cover basic needs."
      },
      {
        "question": "What percentage of Earth's water is freshwater available for human use?",
        "options": ["10%", "5%", "2.5%", "1%"],
        "correct": 3,
        "explanation": "Only about 1% of the Earth’s water is freshwater accessible for human use."
      },
      {
        "question": "Rainwater harvesting helps to:",
        "options": ["Reduce water bills", "Recharge groundwater", "Prevent flooding", "All of the above"],
        "correct": 3,
        "explanation": "Rainwater harvesting lowers water bills, replenishes groundwater, and reduces flooding."
      }
    ]
  },
  {
    "id": 2,
    "title": "Solid Waste Management Quiz",
    "description": "Learn how to manage solid waste effectively.",
    "type": "quiz",
    "points": 50,
    "sdg": "SDG 11",
    "difficulty": "Medium",
    "category": "solid_waste",
    "questions": [
      {
        "question": "What percentage of municipal solid waste in India is biodegradable?",
        "options": ["15%", "30%", "50%", "65%"],
        "correct": 2,
        "explanation": "About 50% of municipal solid waste in India is biodegradable."
      },
      {
        "question": "Which type of waste takes the longest to break down?",
        "options": ["Paper", "Plastic", "Glass", "Food waste"],
        "correct": 2,
        "explanation": "Glass can take thousands of years to decompose."
      },
      {
        "question": "Segregated waste management primarily involves how many categories at the source in India?",
        "options": ["2", "3", "4", "5"],
        "correct": 0,
        "explanation": "Waste is segregated at the source into two main categories: wet and dry waste."
      }
    ]
  },
  {
    "id": 7,
    "title": "Wet and Dry Waste Quiz",
    "description": "Check your awareness about wet and dry waste segregation.",
    "type": "quiz",
    "points": 40,
    "sdg": "SDG 12",
    "difficulty": "Easy",
    "category": "waste_segregation",
    "questions": [
      {
        "question": "Which of the following is dry waste?",
        "options": ["Fruit peels", "Tea leaves", "Plastic bottles", "Cooked food"],
        "correct": 2,
        "explanation": "Plastic bottles, paper, and glass are categorized as dry waste."
      },
      {
        "question": "Which of these can be composted into organic manure?",
        "options": ["Banana peels", "Metal cans", "Glass bottles", "Plastic covers"],
        "correct": 0,
        "explanation": "Banana peels and other organic waste can be composted."
      },
      {
        "question": "What color bin is used for biodegradable waste in most Indian cities?",
        "options": ["Blue", "Green", "Red", "Yellow"],
        "correct": 1,
        "explanation": "The green bin is meant for biodegradable household waste."
      }
    ]
  },
  {
    "id": 8,
    "title": "E-Waste Management Quiz",
    "description": "Test your knowledge on electronic waste disposal and hazards.",
    "type": "quiz",
    "points": 60,
    "sdg": "SDG 12",
    "difficulty": "Medium",
    "category": "e_waste",
    "questions": [
      {
        "question": "Which country produces the highest amount of e-waste in the world?",
        "options": ["India", "USA", "China", "Germany"],
        "correct": 2,
        "explanation": "China generates the largest share of global e-waste."
      },
      {
        "question": "Which precious metal can be recovered from e-waste?",
        "options": ["Gold", "Silver", "Platinum", "All of the above"],
        "correct": 3,
        "explanation": "E-waste contains gold, silver, platinum, and other valuable metals."
      },
      {
        "question": "Why is improper disposal of e-waste harmful?",
        "options": ["Releases toxic chemicals", "Causes soil contamination", "Pollutes water sources", "All of the above"],
        "correct": 3,
        "explanation": "E-waste releases harmful chemicals like lead and cadmium into soil and water."
      }
    ]
  },
  {
    "id": 10,
    "title": "Energy Management Quiz",
    "description": "Learn more about energy efficiency and renewable sources.",
    "type": "quiz",
    "points": 50,
    "sdg": "SDG 7",
    "difficulty": "Medium",
    "category": "energy",
    "questions": [
      {
        "question": "Which renewable source contributes the most to global electricity generation?",
        "options": ["Wind", "Solar", "Hydropower", "Biomass"],
        "correct": 2,
        "explanation": "Hydropower generates the largest share of renewable electricity."
      },
      {
        "question": "How much energy does a CFL bulb save compared to an incandescent bulb?",
        "options": ["20%", "40%", "60%", "80%"],
        "correct": 2,
        "explanation": "CFL bulbs save about 60% more energy."
      },
      {
        "question": "Which sector consumes the largest share of electricity globally?",
        "options": ["Agriculture", "Residential", "Industrial", "Transport"],
        "correct": 2,
        "explanation": "The industrial sector consumes the most global electricity."
      }
    ]
  },
  {
    "id": 6,
    "title": "Pollution and Climate Quiz",
    "description": "Test your know-how about pollution and climate change.",
    "type": "quiz",
    "points": 50,
    "sdg": "SDG 13",
    "difficulty": "Medium",
    "category": "pollution",
    "questions": [
      {
        "question": "Which gas is the biggest contributor to global warming?",
        "options": ["Methane", "Carbon dioxide", "Nitrous oxide", "Ozone"],
        "correct": 1,
        "explanation": "Carbon dioxide is the most responsible gas for warming."
      },
      {
        "question": "Which city is often ranked among the most polluted in terms of air quality?",
        "options": ["Tokyo", "New Delhi", "Paris", "Sydney"],
        "correct": 1,
        "explanation": "New Delhi frequently ranks among the most polluted cities."
      },
      {
        "question": "What is the major cause of ocean plastic pollution?",
        "options": ["Fishing nets", "Plastic bottles", "Single-use plastics", "Tires"],
        "correct": 2,
        "explanation": "Single-use plastics like bags and packaging are major polluters."
      }
    ]
  },
  {
    "id": 3,
    "title": "Sustainable Practices Quiz",
    "description": "Check how familiar you are with sustainability concepts.",
    "type": "quiz",
    "points": 40,
    "sdg": "SDG 12",
    "difficulty": "Easy",
    "category": "sustainability",
    "questions": [
      {
        "question": "What does the 3Rs principle stand for?",
        "options": ["Recycle, Refill, Reuse", "Reduce, Reuse, Recycle", "Rebuild, Reduce, Reuse", "Recycle, Reduce, Regrow"],
        "correct": 1,
        "explanation": "The 3Rs principle is Reduce, Reuse, Recycle."
      },
      {
        "question": "Solar panels convert sunlight into electricity using which technology?",
        "options": ["Electrolysis", "Photovoltaics", "Thermodynamics", "Wind power"],
        "correct": 1,
        "explanation": "Photovoltaic technology converts sunlight into electricity."
      },
      {
        "question": "Which certification indicates an environmentally friendly building design?",
        "options": ["ISO 9001", "LEED", "BIS", "ISI"],
        "correct": 1,
        "explanation": "LEED (Leadership in Energy and Environmental Design) certifies sustainable building designs."
      }
    ]
  },
  {
    "id": 4,
    "title": "Plant a Tree Challenge",
    "description": "Plant a tree in your community.",
    "type": "action",
    "points": 100,
    "sdg": "SDG 15",
    "difficulty": "Medium",
    "category": "forest",
    "requirements": ["Photo evidence"]
  },
  {
    "id": 9,
    "title": "Clean Up Drive",
    "description": "Join or organize a beach, river, or park clean-up activity.",
    "type": "action",
    "points": 120,
    "sdg": "SDG 14",
    "difficulty": "Medium",
    "category": "waste_management",
    "requirements": ["Photo evidence", "Location proof"]
  },
  {
    "id": 5,
    "title": "Save Water at Home",
    "description": "Fix a leaking tap or install a water-saving device in your home.",
    "type": "action",
    "points": 80,
    "sdg": "SDG 6",
    "difficulty": "Easy",
    "category": "water_conservation",
    "requirements": ["Before and after photo"]
  },
  {
    "id": 6,
    "title": "Switch to Renewable Energy",
    "description": "Install or use renewable energy sources such as solar panels or green electricity providers.",
    "type": "action",
    "points": 200,
    "sdg": "SDG 7",
    "difficulty": "Hard",
    "category": "energy",
    "requirements": ["Installation proof", "Photo evidence"]
  },
  {
    "id": 11,
    "title": "Say No to Single-use Plastic",
    "description": "Use reusable bags, bottles, or containers for a week and avoid single-use plastics.",
    "type": "action",
    "points": 90,
    "sdg": "SDG 12",
    "difficulty": "Easy",
    "category": "plastic_reduction",
    "requirements": ["Photo evidence"]
  },
  {
    "id": 12,
    "title": "Start a Compost Bin",
    "description": "Set up a compost bin at home or in your community for wet waste management.",
    "type": "action",
    "points": 110,
    "sdg": "SDG 11",
    "difficulty": "Medium",
    "category": "waste_management",
    "requirements": ["Photo evidence"]
  },
  {
    "id": 13,
    "title": "Car-Free Day",
    "description": "Use public transport, cycle, or walk instead of using a car for one full day.",
    "type": "action",
    "points": 70,
    "sdg": "SDG 13",
    "difficulty": "Easy",
    "category": "climate_action",
    "requirements": ["Selfie or GPS proof"]
  },
  {
    "id": 14,
    "title": "E-waste Collection Drive",
    "description": "Collect old electronics and dispose of them at an authorized e-waste collection center.",
    "type": "action",
    "points": 130,
    "sdg": "SDG 12",
    "difficulty": "Medium",
    "category": "e_waste",
    "requirements": ["Photo evidence"]
  }

  ],

  badges: [
    {"id": 1, "name": "Water Warrior", "icon": "💧", "description": "Complete 5 water conservation challenges", "rarity": "common"},
    {"id": 2, "name": "Tree Hugger", "icon": "🌳", "description": "Plant 3 trees", "rarity": "common"},
    {"id": 3, "name": "Quiz Master", "icon": "🧠", "description": "Score 100% on 10 quizzes", "rarity": "rare"},
    {"id": 4, "name": "Climate Champion", "icon": "🌍", "description": "Complete all climate action challenges", "rarity": "epic"},
    {"id": 5, "name": "Ocean Guardian", "icon": "🌊", "description": "Participate in 3 beach cleanups", "rarity": "common"},
    {"id": 6, "name": "Solar Pioneer", "icon": "☀️", "description": "Complete renewable energy track", "rarity": "rare"},
    {"id": 7, "name": "Waste Warrior", "icon": "♻️", "description": "Achieve zero waste for 7 days", "rarity": "common"},
    {"id": 8, "name": "Eco Leader", "icon": "👑", "description": "Lead a team challenge", "rarity": "epic"}
  ],
  communityPosts: [
    {"id": 1, "author": "Priya Patel", "authorImage": "👩‍🎓", "message": "Just completed my first tree planting challenge!", "timestamp": "2 hours ago", "likes": 15, "badge": "Tree Hugger"},
     {
    "id": 2,
    "author": "Shivam",
    "authorImage": "🌱",
    "message": "Participated in the beach clean-up today. Feeling great making a difference!",
    "timestamp": "1 hour ago",
    "likes": 20,
    "badge": "Eco Warrior"
  },
  {
    "id": 3,
    "author": "Shubham",
    "authorImage": "🚴",
    "message": "Took a car-free day challenge and cycled 10 km instead!",
    "timestamp": "30 minutes ago",
    "likes": 12,
    "badge": "Climate Champion"
  },
  {
    "id": 4,
    "author": "Anurag",
    "authorImage": "🌍",
    "message": "Started composting kitchen waste today. Excited to see it turn into organic manure.",
    "timestamp": "3 hours ago",
    "likes": 18,
    "badge": "Green Innovator"
  },
  {
    "id": 5,
    "author": "Rishabh",
    "authorImage": "💧",
    "message": "Fixed a leaking tap at home. Saving water one drop at a time!",
    "timestamp": "45 minutes ago",
    "likes": 22,
    "badge": "Water Saver"
  },
  {
    "id": 6,
    "author": "Priyansha",
    "authorImage": "🌸",
    "message": "Planted two flowering trees in the park today. Can’t wait to see them bloom!",
    "timestamp": "4 hours ago",
    "likes": 25,
    "badge": "Tree Hugger"
  },
  {
    "id": 7,
    "author": "Rishabh Maurya",
    "authorImage": "🔋",
    "message": "Recycled my old mobile phone through an e-waste collection center. Small steps matter!",
    "timestamp": "1 hour ago",
    "likes": 16,
    "badge": "E-Waste Hero"
  }
    // ... add all other posts here
  ],
  schoolStats: {
    "activeStudents": 247,
    "challengesCompleted": 1834,
    "participationRate": 89,
    "treesPlanted": 156,
    "wasteRecycled": 2.3,
    "waterSaved": 850,
    "co2Reduced": 12.5
  },
  pendingSubmissions: [
    {"id": 1, "student": "Arya Sharma", "studentImage": "👩‍🎓", "challenge": "Tree Plantation", "status": "pending", "challengeId": 2,"photoEvidence":true},
    {"id": 2, "student": "Rohan Mehta", "studentImage": "👨‍🎓", "challenge": "Beach Cleanup", "status": "pending", "challengeId": 3,"photoEvidence":true},

{"id": 3, "student": "Ishita Verma", "studentImage": "👩‍🎓", "challenge": "Plastic Recycling Drive", "status": "pending", "challengeId": 4,"photoEvidence":true},

{"id": 4, "student": "Karan Singh", "studentImage": "👨‍🎓", "challenge": "Community Composting", "status": "pending", "challengeId": 5,"photoEvidence":true},

{"id": 5, "student": "Neha Kapoor", "studentImage": "👩‍🎓", "challenge": "E-Waste Collection", "status": "pending", "challengeId": 6,"photoEvidence":true},

{"id": 6, "student": "Aditya Nair", "studentImage": "👨‍🎓", "challenge": "Water Conservation Awareness", "status": "pending", "challengeId": 7,"photoEvidence":true},

{"id": 7, "student": "Simran Kaur", "studentImage": "👩‍🎓", "challenge": "Carpooling Campaign", "status": "pending", "challengeId": 8,"photoEvidence":true},

{"id": 8, "student": "Vikram Joshi", "studentImage": "👨‍🎓", "challenge": "Solar Energy Promotion", "status": "pending", "challengeId": 9,"photoEvidence":true},

{"id": 9, "student": "Priya Deshmukh", "studentImage": "👩‍🎓", "challenge": "Organic Farming Support", "status": "pending", "challengeId": 10,"photoEvidence":true},

    // ... add all other submissions here
  ]
};