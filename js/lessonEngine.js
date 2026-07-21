async function loadLesson(){

const params =
new URLSearchParams(window.location.search);

const lesson =
params.get("lesson") || "addition";

const response =
await fetch(
`lessons/arithmetic/${lesson}.json`
);

const data =
await response.json();

document.getElementById(
"lessonTitle"
).textContent =
data.title;

document.getElementById(
"lessonDescription"
).textContent =
data.description;

const exampleArea =
document.getElementById(
"exampleArea"
);

exampleArea.innerHTML="";

data.examples.forEach(example=>{

const card=
document.createElement("div");

card.className="example-box";

card.innerHTML=

`

<h3>

${example.question}

</h3>

<p>

Answer:

<strong>

${example.answer}

</strong>

</p>

`;

exampleArea.appendChild(card);

});

}

loadLesson();