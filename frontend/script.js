function feedback(score) {
  if (score >= 8)
    return "Excellent performance with strong control. Demonstrates confidence, clarity, and consistency throughout.";
  if (score >= 6)
    return "Good performance with minor inaccuracies. Communication is clear though some improvements are needed.";
  return "Needs improvement. Errors frequently affect clarity and overall effectiveness.";
}

fetch("/api/report")
  .then(res => res.json())
  .then(data => {
    overallFeedback.innerText = data.descriptiveFeedback.overall.text;
    pronFeedback.innerText = data.descriptiveFeedback.pronunciation.text;
    fluencyFeedback.innerText = data.descriptiveFeedback.fluency.text;
    vocabFeedback.innerText = data.descriptiveFeedback.vocabulary.text;
    grammarFeedback.innerText = data.descriptiveFeedback.grammar.text;
  });

fetch("/api/report")
  .then(res => res.json())
  .then(data => {
    const s = data.scores;

    document.getElementById("overallScore").innerText = s.overall + "/9";

    document.getElementById("pBar").style.width = (s.pronunciation / 9) * 100 + "%";
    document.getElementById("fBar").style.width = (s.fluency / 9) * 100 + "%";
    document.getElementById("vBar").style.width = (s.vocabulary / 9) * 100 + "%";
    document.getElementById("gBar").style.width = (s.grammar / 9) * 100 + "%";

    overallVal.innerText = s.overall;
    pVal.innerText = s.pronunciation;
    fVal.innerText = s.fluency;
    vVal.innerText = s.vocabulary;
    gVal.innerText = s.grammar;

    overallText.innerText = feedback(s.overall);
    pText.innerText = feedback(s.pronunciation);
    fText.innerText = feedback(s.fluency);
    vText.innerText = feedback(s.vocabulary);
    gText.innerText = feedback(s.grammar);
  });
