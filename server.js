const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/api/report", (req, res) => {
  res.json({
    overall: 7,
    pronunciation: 8.3,
    fluency: 9,
    vocabulary: 6.2,
    grammar: 6.2,
    descriptiveFeedback: {
      overall: { score: 7, text: "Has reasonably good pronunciation with some accent..." },
      pronunciation: { score: 8.3, text: "Uses a wide range of pronunciation features..." },
      fluency: { score: 9, text: "Speaks fluently with only rare repetition..." },
      vocabulary: { score: 6.2, text: "Uses an adequate range of vocabulary..." },
      grammar: { score: 6.2, text: "Uses a mix of simple and complex sentence forms..." }
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
