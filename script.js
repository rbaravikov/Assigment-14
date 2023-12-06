var questions = [{
    text: "Kam naudingos morkos?",
    choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
    answer: "Odai"
 },
 {
    text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui"
 },
 {
    text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą"
 },
 {
    text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C"
 },
 {
    text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi"
 }
]

const startas = document.getElementById('startas')
const body = document.body
let taskai = 0
let klausimas = 1


startas.addEventListener('click', klausimoGeneravimas)

function klausimoGeneravimas(){
    const topic = document.createElement('h1')
    const theme = document.createTextNode("Vaisiai")
    body.innerHTML = ""
    topic.appendChild(theme)
    body.appendChild(topic)
    
    const createP = document.createElement('p')
    const question = document.createTextNode(questions[klausimas-1].text)
    createP.appendChild(question)
    body.appendChild(createP)

    const button1 = document.createElement('button')
    button1.innerText = questions[klausimas-1].choices[0]
    button1.id = button1.innerText.toLowerCase()
    button1.addEventListener('click', choice)
    body.appendChild(button1)

    const button2 = document.createElement('button')
    button2.innerText = questions[klausimas-1].choices[1]
    button2.id = button2.innerText.toLowerCase()
    button2.addEventListener('click', choice)
    body.appendChild(button2)
    
    const button3 = document.createElement('button')
    button3.innerText = questions[klausimas-1].choices[2]
    button3.id = button3.innerText.toLowerCase()
    button3.addEventListener('click', choice)
    body.appendChild(button3)

    const button4 = document.createElement('button')
    button4.innerText = questions[klausimas-1].choices[3]
    button4.id = button4.innerText.toLowerCase()
    button4.addEventListener('click', choice)
    body.appendChild(button4)

    const count = document.createTextNode(`Klausimas ${klausimas} iš 5`)
    const countQuestions = document.createElement('p')
    countQuestions.id = "countQuestions"
    countQuestions.appendChild(count)
    body.appendChild(countQuestions)
}


function restartas (){
    console.log("veikia")
    taskai = 0
    klausimas = 1
    console.log(taskai)
    klausimoGeneravimas()
}

function choice (){
    if(this.id == questions[klausimas -1].answer.toLowerCase()){
        taskai++
        console.log(taskai)
    }
    
    if (klausimas == 5){
        body.innerHTML = ""
        result = document.createElement('h1')
        const finalScore = document.createTextNode(`Results: ${taskai}`)
        const restart = document.createElement('button')
        result.appendChild(finalScore)
        body.appendChild(result)
        restart.innerText = "Restart"
        restart.addEventListener('click', restartas)
        body.appendChild(restart)
    }
    
    if (klausimas < 5){
        klausimas++
        klausimoGeneravimas()
    }
    
}
