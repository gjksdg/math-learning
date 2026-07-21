const practiceArea =
document.getElementById("practiceArea");

const newButton =
document.getElementById("newProblems");

const checkButton =
document.getElementById("checkProblems");

const score =
document.getElementById("practiceScore");

let answers=[];

function generateProblems(){

practiceArea.innerHTML="";

answers=[];

for(let i=0;i<10;i++){

const a=Math.floor(Math.random()*20)+1;

const b=Math.floor(Math.random()*20)+1;

answers.push(a+b);

const row=document.createElement("div");

row.className="practice-question";

row.innerHTML=`

<label>

${a} + ${b} =

</label>

<input
type="number">

`;

practiceArea.appendChild(row);

}

score.textContent="";

}

function checkProblems(){

const inputs=
practiceArea.querySelectorAll("input");

let correct=0;

inputs.forEach((input,index)=>{

input.classList.remove(
"correct",
"incorrect"
);

if(Number(input.value)
===answers[index]){

correct++;

input.classList.add("correct");

}else{

input.classList.add("incorrect");

}

});

score.textContent=

`Score:

${correct}

/

${answers.length}`;

}

newButton.onclick=
generateProblems;

checkButton.onclick=
checkProblems;

generateProblems();