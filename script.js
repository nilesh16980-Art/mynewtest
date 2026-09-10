const questions = [
 {q:"Which planet is known as the Red Planet?", a:["Earth","Mars","Jupiter","Venus"], c:1},
 {q:"What does HTML stand for?", a:["Hyper Text Markup Language","High Tech Modern Language","Home Tool Markup Language","Hyperlink Text Management Language"], c:0},
 {q:"Which device is commonly used to connect a computer to a network wirelessly?", a:["Router","Printer","Scanner","Projector"], c:0},
 {q:"Which is a renewable source of energy?", a:["Coal","Natural Gas","Solar Energy","Diesel"], c:2},
 {q:"What is the capital of India?", a:["Mumbai","New Delhi","Ahmedabad","Jaipur"], c:1},
 {q:"Which number comes next: 2, 4, 8, 16, ?", a:["18","24","32","36"], c:2},
 {q:"Which language is primarily used to style web pages?", a:["HTML","CSS","SQL","Python"], c:1},
 {q:"What is the full form of PDF?", a:["Portable Document Format","Public Data File","Personal Document Folder","Print Data Form"], c:0},
 {q:"Which key is commonly used to refresh a Windows web page?", a:["F2","F5","F8","F12"], c:1},
 {q:"Which symbol is commonly used for a WhatsApp international phone link?", a:["wa.me","wh.me","chat.me","msg.me"], c:0}
];

const box = document.getElementById("questions");
questions.forEach((x,i)=>{
  const q = document.createElement("div");
  q.className = "question";
  q.innerHTML = `<h3>${i+1}. ${x.q}</h3>` + x.a.map((o,j)=>
    `<label class="option"><input required type="radio" name="q${i}" value="${j}"> ${o}</label>`
  ).join("");
  box.appendChild(q);
});

document.getElementById("quizForm").addEventListener("submit", e=>{
  e.preventDefault();
  const data = new FormData(e.target);
  let score = 0;
  questions.forEach((x,i)=>{ if(Number(data.get("q"+i)) === x.c) score++; });
  document.getElementById("score").innerHTML =
    `<div class="score-big">${score} / ${questions.length}</div>
     <p>${score >= 8 ? "Excellent! 🎉" : score >= 5 ? "Good attempt! 👍" : "Keep practising! 💪"}</p>`;
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("result").scrollIntoView({behavior:"smooth"});
});
