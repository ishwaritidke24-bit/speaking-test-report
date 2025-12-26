# Student Speaking Assessment Report Page

A web-based application that evaluates and displays a student's speaking performance in terms of Pronunciation, Fluency, Vocabulary, Grammar, and Overall Score. This project is designed to provide clear feedback on a student's speaking skills.

---

## Features

- Dynamic Score Display: Scores are fetched from the backend and displayed dynamically.
- Progress Bars: Visual representation of each score.
- Detailed Feedback: Textual feedback for each aspect of speaking.
- Simple & Clean UI: Easy-to-read layout for students and teachers.

---

## How to Run the Project

1. Clone the Repository

git clone https://github.com/username/student-speaking-assessment.git
cd student-speaking-assessment

2. Install Dependencies (if using Node.js server)
npm install

3. Start the Server
node server.js

The server runs on http://localhost:3000 by default.

## Where the Scores Are Stored

- Backend API Endpoint: /api/report
- Scores are currently stored in memory within server.js.
- Each student score object contains:
    Overall Score	
    Pronunciation	
    Fluency
    Vocabulary
    Grammar	
- Can be extended to database storage (MongoDB/PostgreSQL/MySQL) for multiple students.

## How Feedback Logic Works

- Fetch Scores: Frontend sends a GET request to /api/report:

fetch("http://localhost:3000/api/report")
  .then(res => res.json())
  .then(data => {
    overallScore.innerText = data.overall;
    pScore.innerText = data.pronunciation;
    fScore.innerText = data.fluency;
    vScore.innerText = data.vocabulary;
    gScore.innerText = data.grammar;
  });

- Update UI Dynamically:
  Progress bars and score text update based on fetched data.
- Feedback is categorized:
    Excellent: 85–100
    Good: 70–84
    Needs Improvement: below 70
    Display Text Feedback:
- Provides a qualitative understanding of strengths and weaknesses.

## Technologies Used

Frontend:

- HTML5
- CSS3
- JavaScript

Backend:

- Node.js (Express) for API endpoint

## User Interface

- Clean layout showing all scores.
- Color-coded progress bars for easy visual assessment.
- Responsive design for desktop and mobile viewing.

## Live Demo 
 
The live demo is hosted on Netlify: https://student-reportt.netlify.app/

Created by Ishwari Tidke
Email: ishwaritidke24@gmail.com

