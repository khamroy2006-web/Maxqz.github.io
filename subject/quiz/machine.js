let questions = [
{
    q: "กระแสไฟฟ้า เทียบกับอะไรในวงจรแม่เหล็ก?",
    a: [
        "Magnetic flux",
        "Magnetic field intensity",
        "Permeability",
        "MMF"
    ],
    correct: 0
},
{
    q: "อุปกรณ์ใดไม่ใช้หลักการสนามแม่เหล็ก?",
    a: [
        "Push button switch",
        "Magnetic contactor",
        "Solenoid",
        "Dynamo"
    ],
    correct: 0
},
{
    q: "Magnetic circuit ใช้คำนวณอะไร?",
    a: [
        "แรงดันไฟฟ้า",
        "กระแสไฟฟ้า",
        "เส้นแรงแม่เหล็ก (flux)",
        "กำลังไฟฟ้า"
    ],
    correct: 2
}
];

let i = 0;
let score = 0;

function load() {
    document.getElementById("question").innerText = questions[i].q;

    for (let j=0;j<4;j++){
        document.getElementById("a"+j).innerText = questions[i].a[j];
    }
}

function answer(n) {
    if(n === questions[i].correct){
        score++;
    }

    i++;

    if(i < questions.length){
        load();
    } else {
        document.body.innerHTML =
        "<h1>จบแล้ว 🎉</h1><p>คะแนน: "+score+"</p>";
    }
}

load();
