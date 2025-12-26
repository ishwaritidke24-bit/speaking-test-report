function getFeedback(score) {
  if (score >= 8) return "Excellent performance with strong control.";
  if (score >= 6) return "Good performance with minor inaccuracies.";
  return "Needs improvement.";
}

function setBar(bar, score, maxScore = 9) {
  if (!bar) return; 
  const width = (score / maxScore) * 100;
  bar.style.width = width + "%";
}

fetch("/api/report")
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    console.log("Received data:", data); 

    const studentNameEl = document.getElementById("studentName");
    const testDateEl = document.getElementById("testDate");
    const overallScoreEl = document.getElementById("overallScore");

    if (studentNameEl) studentNameEl.innerText = data?.student?.name || "N/A";
    if (testDateEl) testDateEl.innerText = data?.student?.testDate || "N/A";
    if (overallScoreEl) overallScoreEl.innerText = (data?.score?.band ?? 0) + "/9";

    const skills = [
      ["p", data?.breakdown?.pronunciation?.score ?? 0],
      ["f", data?.breakdown?.fluency?.score ?? 0],
      ["v", data?.breakdown?.vocabulary?.score ?? 0],
      ["g", data?.breakdown?.grammar?.score ?? 0]
    ];

    skills.forEach(([key, score]) => {
      const scoreEl = document.getElementById(key + "Score");
      const barEl = document.getElementById(key + "Bar");
      const feedbackEl = document.getElementById(key + "Feedback");

      if (scoreEl) scoreEl.innerText = score + "/9";
      setBar(barEl, score); // safely set bar width
      if (feedbackEl) feedbackEl.innerText = getFeedback(score);
    });
  })
  .catch(err => {
    console.error("Failed to fetch report:", err);
    alert("Could not load report. Please try again later.");
  });
