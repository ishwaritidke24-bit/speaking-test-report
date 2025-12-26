const express = require("express");
const path = require("path");
const app = express();

// Middleware to serve static files from frontend
app.use(express.static(path.join(__dirname, "frontend")));

// API route with feedback
app.get("/api/report", (req, res) => {
  res.json({
    overall: 7,
    pronunciation: 8.3,
    fluency: 9,
    vocabulary: 6.2,
    grammar: 6.2,

    descriptiveFeedback: {
      overall: {
        score: 7,
        text: "Has reasonably good pronunciation with some accent. Demonstrates generally good fluency and coherence while speaking but may take occasional pauses. Is proficient in using sophisticated vocabulary and idiomatic structures. Proficient in expressing complex thoughts using a range of grammar structures."
      },
      pronunciation: {
        score: 8.3,
        text: "Uses a wide range of pronunciation features. Sustains flexible use of features, with only occasional lapses. Is easy to understand throughout; first language accent has minimal impact on intelligibility."
      },
      fluency: {
        score: 9,
        text: "Speaks fluently with only rare repetition or self-correction. Any hesitation in speech is content-related rather than from lack of vocabulary or proper grammar. Speaks coherently with appropriate cohesion between sentences. Develops topics fully and appropriately."
      },
      vocabulary: {
        score: 6.2,
        text: "Uses an adequate range of vocabulary for familiar topics but may show some limitations when expressing complex ideas. Occasional inappropriate word choices are present but meaning is generally clear."
      },
      grammar: {
        score: 6.2,
        text: "Uses a mix of simple and complex sentence forms. Makes some grammatical errors, particularly in complex structures, but these rarely reduce overall clarity of meaning."
      }
    }
  });
});
