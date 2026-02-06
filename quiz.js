let getStarted = document.querySelector("#getStartedBtn");
let landingPage = document.querySelector(".landingPage");
let operationsPage = document.querySelector(".operationsPage");
let difficultyPage = document.querySelector(".difficultyPage");
let numOfQtnsPage = document.querySelector(".numOfQtnsPage");
let advancedPage = document.querySelector(".advancedPage");
let numOfQtnsInput = document.querySelector("#numOfQtnsInput");
let quizPage = document.querySelector(".quizPage");
let nextBtn1 = document.querySelector(".nextBtn1");
let questionLabel = document.querySelector("#questionLabel");
let answerInput = document.querySelector("#answerInput");
let count1 = 0, count2 = 0, count3 = 0, count4 = 0;
getStarted.addEventListener("click", () => {
    landingPage.style.display = 'none';
    operationsPage.style.display = 'block'

    let sign = document.querySelector(".sign");
    let additionCd = document.querySelector(".addition");
    let subtractionCd = document.querySelector(".subtraction");
    let multiplicationCd = document.querySelector(".multiplication");
    let divisionCd = document.querySelector(".division");
    let a = [];
    a = "-"
    console.log(a)

    let operation = [];
    additionCd.addEventListener("click", () => {
        if (count1 == 0) {
            document.querySelector("#invalidInputOne").innerHTML = ``
            additionCd.style.boxShadow = '24px 11px 10px 1px gray';
            count1 = 1;
            operation = ["+"];
            subtractionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            multiplicationCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            divisionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
        } else if (count1 = 1) {
            additionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            count1 = 0;
            operation.splice((operation.indexOf("+")), 1)
        }
    })
    subtractionCd.addEventListener("click", () => {
        if (count2 == 0) {
            document.querySelector("#invalidInputOne").innerHTML = ``
            subtractionCd.style.boxShadow = '24px 11px 10px 1px gray';
            count2 = 1;
            operation = ["-"];
            additionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            multiplicationCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            divisionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
        } else if (count2 = 1) {
            subtractionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            count2 = 0;
            operation.splice((operation.indexOf("-")), 1)
        }
    })
    multiplicationCd.addEventListener("click", () => {
        if (count3 == 0) {
            document.querySelector("#invalidInputOne").innerHTML = ``
            multiplicationCd.style.boxShadow = '24px 11px 10px 1px gray';
            count3 = 1;
            operation = ["×"]
            subtractionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            additionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            divisionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
        } else if (count3 = 1) {
            multiplicationCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            count3 = 0;
            operation.splice((operation.indexOf("×")), 1)
        }
    })
    divisionCd.addEventListener("click", () => {
        if (count4 == 0) {
            document.querySelector("#invalidInputOne").innerHTML = ``
            divisionCd.style.boxShadow = '24px 11px 10px 1px gray';
            count4 = 1;
            operation = ["÷"]
            subtractionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            multiplicationCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            additionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
        } else if (count4 = 1) {
            divisionCd.style.boxShadow = '6px 2.5px 5px 1px gray';
            count4 = 0;
            operation.splice((operation.indexOf("÷")), 1)
        }
    })

    //to difficulty page
    nextBtn1.addEventListener("click", () => {
        if (operation.length == 0) {
            document.querySelector("#invalidInputOne").innerHTML = `You haven't chosen an operation yet.`
        } else {
            operationsPage.style.display = 'none';
            difficultyPage.style.display = 'block';



            let x = document.querySelector("#max");
            let level = 'beginner'
            x.oninput = () => {
                let temp = 135;
                let input = document.querySelector("#progBar")
                if (x.value >= 135 && x.value < 135 + 36) {
                    level = "beginner"
                    input.style.borderColor = '#cad2c5 #cad2c5 #bebebe #bebebe'
                    temp = 135 + 36;
                } else if (x.value >= 135 + 36 && x.value < 135 + 36 + 36) {
                    level = "easy";
                    input.style.borderColor = '#84a98c #84a98c #bebebe #bebebe'
                    temp = 135 + 36 + 36;
                } else if (x.value >= 135 + 36 + 36 && x.value < 135 + 36 + 36 + 36) {
                    level = "medium"
                    input.style.borderColor = '#52796f #52796f #bebebe #bebebe'
                    temp = 135 + 36 + 36 + 36;
                } else if (x.value >= 135 + 36 + 36 + 36 && x.value < 135 + 36 + 36 + 36 + 36) {
                    level = "hard"
                    input.style.borderColor = '#354f52 #354f52 #bebebe #bebebe'
                    temp = 135 + 36 + 36 + 36 + 36
                } else if (x.value >= 135 + 36 + 36 + 36 + 36) {
                    level = "extreme"
                    input.style.borderColor = '#2f3e46 #2f3e46 #bebebe #bebebe'
                    temp = 135 + 180;
                }

                let y = temp - 135;
                let z = y / 1.8;
                document.querySelector("span").style.transform = `rotate(${temp}deg)`;
                document.querySelector("small").innerText = level;
            }


            //to number of questions page
            let nextBtn2 = document.querySelector(".nextBtn2");
            nextBtn2.addEventListener("click", () => {
                difficultyPage.style.display = 'none';
                numOfQtnsPage.style.display = 'block';
                numOfQtnsInput.focus()

                //to quiz page
                let nextBtn3 = document.querySelector(".nextBtn3");
                nextBtn3.addEventListener("click", () => {
                    if (numOfQtnsInput.value === '') {
                        document.querySelector("#invalidInputTwo").innerHTML = `You haven't chosen the number of questions you want yet.`
                    } else if (numOfQtnsInput.value <= 0) {
                        document.querySelector("#invalidInputTwo").innerHTML = `Invalid input! You must do at least one question`
                    } else {
                        numOfQtnsPage.style.display = 'none';
                        quizPage.style.display = 'block';
                        answerInput.focus()
                        console.log(`operations : ${operation} \n level: ${level} \n number of questions: ${numOfQtnsInput.value}`);

                        seconds = 0, minutes = 0
                        function add() {
                            seconds++
                            if (seconds >= 60) {
                                seconds = 0;
                                minutes++
                            }
                            document.getElementById("timer").innerHTML = `${(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")} : ${(seconds > 9 ? seconds : '0' + seconds)}`
                            document.getElementById("time").innerHTML = `${(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")} : ${(seconds > 9 ? seconds : '0' + seconds)}`
                            timer();
                        }
                        function timer() {
                            t = setTimeout(add, 1000);
                        }

                        document.querySelector("#restartBtn").addEventListener("click", () => {
                            window.location.reload()
                        })
                        // document.querySelector("#advancedBtn").addEventListener("click", () => {
                        //     advancedPage.style.display = 'block'
                        //     quizPage.style.display = 'none'
                        // })
                        document.querySelector("#restartBtnEnd").addEventListener("click", () => {
                            window.location.reload()
                        })

                        if (operation.length == 1) {
                            let temp = 1, answered = 0, notAnswered = 0, seconds = 0, minutes = 0, questionOne, questionTwo;
                            timer()
                            if (operation == "-") {
                                switch (level) {
                                    case "beginner":
                                        questionOne = (Math.random() * 5 + 5).toFixed()
                                        questionTwo = (Math.random() * 5).toFixed()
                                        break;
                                    case "easy":
                                        questionOne = (Math.random() * 25 + 25).toFixed()
                                        questionTwo = (Math.random() * 25).toFixed()
                                        break;
                                    case "medium":
                                        questionOne = (Math.random() * 50 + 50).toFixed()
                                        questionTwo = (Math.random() * 50 + 50).toFixed()
                                        break;
                                    case "hard":
                                        questionOne = (Math.random() * 400 + 100).toFixed()
                                        questionTwo = (Math.random() * 400 + 100).toFixed()
                                        break;
                                    case "extreme":
                                        questionOne = (Math.random() * 500 + 500).toFixed()
                                        questionTwo = (Math.random() * 500 + 500).toFixed()
                                        break;
                                }
                            } else if (operation == "÷") {
                                let factors = [];
                                switch (level) {
                                    case "beginner":
                                        questionOne = Math.ceil(Math.random() * 10)
                                        break;
                                    case "easy":
                                        questionOne = Math.ceil(Math.random() * 50)
                                        break;
                                    case "medium":
                                        questionOne = Math.ceil(Math.random() * 50 + 50)
                                        break;
                                    case "hard":
                                        questionOne = Math.ceil(Math.random() * 400 + 100)
                                        break;
                                    case "extreme":
                                        questionOne = Math.ceil(Math.random() * 500 + 500)
                                        break;
                                }
                                for (let i = 1; i <= questionOne; i++) {
                                    if (questionOne % i == 0) {
                                        factors.push(i);
                                    }
                                }
                                console.log(factors)
                                questionTwo = factors[Math.floor(Math.random() * factors.length)]
                            } else {
                                switch (level) {
                                    case "beginner":
                                        questionOne = (Math.random() * 10).toFixed()
                                        questionTwo = (Math.random() * 10).toFixed();
                                        break;
                                    case "easy":
                                        questionOne = (Math.random() * 50).toFixed()
                                        questionTwo = (Math.random() * 50).toFixed()
                                        break;
                                    case "medium":
                                        questionOne = (Math.random() * 50 + 50).toFixed()
                                        questionTwo = (Math.random() * 50 + 50).toFixed()
                                        break;
                                    case "hard":
                                        questionOne = (Math.random() * 400 + 100).toFixed()
                                        questionTwo = (Math.random() * 400 + 100).toFixed()
                                        break;
                                    case "extreme":
                                        questionOne = (Math.random() * 500 + 500).toFixed()
                                        questionTwo = (Math.random() * 500 + 500).toFixed()
                                        break;
                                }
                            }
                            questionLabel.innerHTML = `${questionOne} ${operation} ${questionTwo}`;
                            answerInput.addEventListener("input", e => {
                                let answer, lifeArr = [document.querySelector("#heartOne"), document.querySelector("#heartTwo"), document.querySelector("#heartThree")];
                                if (temp == Number(numOfQtnsInput.value)) {
                                    clearTimeout(t)
                                    x = setTimeout(function () {
                                        if (answerInput.value !== '') {
                                            answer = answerInput.value;
                                            if (operation == "+") {
                                                if (answer == +questionOne + +questionTwo && answered < numOfQtnsInput.value) {
                                                    answered++;
                                                } else if (answer !== +questionOne + +questionTwo) {
                                                    notAnswered++
                                                    if (notAnswered < 3) {
                                                        lifeArr[notAnswered - 1].style.color = 'gray'
                                                    } else if (notAnswered >= 3) {
                                                        clearTimeout(t)
                                                        document.querySelector(".resultContainer").style.display = 'flex';
                                                        document.querySelector("#answer").innerHTML = `Too bad! You ran out of lives. Try again some other time.`;
                                                    }
                                                }

                                            } else if (operation == "-") {
                                                if (answer == +questionOne - +questionTwo && answered < numOfQtnsInput.value) {
                                                    answered++;
                                                } else if (answer !== +questionOne - +questionTwo) {
                                                    notAnswered++
                                                    if (notAnswered < 3) {
                                                        lifeArr[notAnswered - 1].style.color = 'gray'
                                                    } else if (notAnswered >= 3) {
                                                        clearTimeout(t)
                                                        document.querySelector(".resultContainer").style.display = 'flex';
                                                        document.querySelector("#answer").innerHTML = `Too bad! You ran out of lives. Try again some other time.`;
                                                    }
                                                }
                                            } else if (operation == "×") {
                                                if (answer == +questionOne * +questionTwo && answered < numOfQtnsInput.value) {
                                                    answered++;
                                                } else if (answer !== +questionOne * +questionTwo) {
                                                    notAnswered++
                                                    if (notAnswered < 3) {
                                                        lifeArr[notAnswered - 1].style.color = 'gray'
                                                    } else if (notAnswered >= 3) {
                                                        clearTimeout(t)
                                                        document.querySelector(".resultContainer").style.display = 'flex';
                                                        document.querySelector("#answer").innerHTML = `Too bad! You ran out of lives. Try again some other time.`;
                                                    }
                                                }
                                            } else if (operation == "÷") {
                                                if (answer == +questionOne / +questionTwo && answered < numOfQtnsInput.value) {
                                                    answered++;
                                                } else if (answer !== +questionOne / +questionTwo) {
                                                    notAnswered++
                                                    if (notAnswered < 3) {
                                                        lifeArr[notAnswered - 1].style.color = 'gray'
                                                    } else if (notAnswered >= 3) {
                                                        clearTimeout(t)
                                                        document.querySelector(".resultContainer").style.display = 'flex';
                                                        document.querySelector("#answer").innerHTML = `Too bad! You ran out of lives. Try again some other time.`;
                                                    }
                                                }
                                            }
                                        }
                                        document.querySelector(".resultContainer").style.display = 'flex';
                                        document.querySelector("#timeLabel").innerHTML += `Took you long enough...`
                                        document.querySelector("#answer").innerHTML = `You have answered ${answered} questions of total ${numOfQtnsInput.value}`
                                        if(answered/numOfQtnsInput.value*100 <= 0.33*numOfQtnsInput.value){
                                            document.querySelector("#recommendation").innerHTML = `You're going to have to work harder💀`;                                            
                                        } else if(answered/numOfQtnsInput.value*100 > 0.33*numOfQtnsInput.value && answered/numOfQtnsInput.value*100 <= 0.66*numOfQtnsInput.value){
                                            document.querySelector("#recommendation").innerHTML = `You must be smart, but you can do smarter`;
                                        } else if (answered/numOfQtnsInput.value*100 > 0.66*numOfQtnsInput.value){
                                            document.querySelector("#recommendation").innerHTML = `Pythagoras envies you🍃`;
                                        }
                                    }, 3000)
                                } else {
                                    try {
                                        clearTimeout(x);
                                    } finally {
                                        x = setTimeout(function () {
                                            if (answerInput.value !== '') {
                                                answer = answerInput.value;
                                                if (operation == "+") {
                                                    if (answer == +questionOne + +questionTwo && answered < numOfQtnsInput.value) {
                                                        answered++
                                                    } else if (answer !== +questionOne + +questionTwo) {
                                                        notAnswered++
                                                        if (notAnswered < 3) {
                                                            lifeArr[notAnswered - 1].style.color = 'gray'
                                                        } else if (notAnswered >= 3) {
                                                            clearTimeout(t)
                                                            document.querySelector(".resultContainer").style.display = 'flex';
                                                            document.querySelector("#answer").innerHTML = `Too bad! You ran out of lives. Try again some other time.`;
                                                        }
                                                    }
                                                } else if (operation == "-") {
                                                    if (answer == +questionOne - +questionTwo && answered < numOfQtnsInput.value) {
                                                        answered++
                                                    } else if (answer !== +questionOne - +questionTwo) {
                                                        notAnswered++
                                                        if (notAnswered < 3) {
                                                            lifeArr[notAnswered - 1].style.color = 'gray'
                                                        } else if (notAnswered >= 3) {
                                                            clearTimeout(t)
                                                            document.querySelector(".resultContainer").style.display = 'flex';
                                                            document.querySelector("#answer").innerHTML = `Too bad! You ran out of lives. Try again some other time.`;
                                                        }
                                                    }
                                                } else if (operation == "×") {
                                                    if (answer == +questionOne * +questionTwo && answered < numOfQtnsInput.value) {
                                                        answered++
                                                    } else if (answer !== +questionOne * +questionTwo) {
                                                        notAnswered++
                                                        if (notAnswered < 3) {
                                                            lifeArr[notAnswered - 1].style.color = 'gray'
                                                        } else if (notAnswered >= 3) {
                                                            clearTimeout(t)
                                                            document.querySelector(".resultContainer").style.display = 'flex';
                                                            document.querySelector("#answer").innerHTML = `Too bad! You ran out of lives. Try again some other time.`;
                                                        }
                                                    }
                                                } else if (operation == "÷") {
                                                    if (answer == +questionOne / +questionTwo && answered < numOfQtnsInput.value) {
                                                        answered++
                                                    } else if (answer !== +questionOne / +questionTwo) {
                                                        notAnswered++
                                                        if (notAnswered < 3) {
                                                            lifeArr[notAnswered - 1].style.color = 'gray'
                                                        } else if (notAnswered >= 3) {
                                                            clearTimeout(t)
                                                            document.querySelector(".resultContainer").style.display = 'flex';
                                                            document.querySelector("#answer").innerHTML = `Too bad! You ran out of lives. Try again some other time.`;
                                                        }
                                                    }
                                                }
                                                if (answerInput.value !== '') {
                                                    if (operation == "-") {
                                                        switch (level) {
                                                            case "beginner":
                                                                questionOne = (Math.random() * 5 + 5).toFixed()
                                                                questionTwo = (Math.random() * 5).toFixed()
                                                                break;
                                                            case "easy":
                                                                questionOne = (Math.random() * 25 + 25).toFixed()
                                                                questionTwo = (Math.random() * 25).toFixed()
                                                                break;
                                                            case "medium":
                                                                questionOne = (Math.random() * 50 + 50).toFixed()
                                                                questionTwo = (Math.random() * 50 + 50).toFixed()
                                                                break;
                                                            case "hard":
                                                                questionOne = (Math.random() * 400 + 100).toFixed()
                                                                questionTwo = (Math.random() * 400 + 100).toFixed()
                                                                break;
                                                            case "extreme":
                                                                questionOne = (Math.random() * 500 + 500).toFixed()
                                                                questionTwo = (Math.random() * 500 + 500).toFixed()
                                                                break;
                                                        }
                                                    } else if (operation == "÷") {
                                                        let factors = [];
                                                        switch (level) {
                                                            case "beginner":
                                                                questionOne = Math.ceil(Math.random() * 10)
                                                                break;
                                                            case "easy":
                                                                questionOne = Math.ceil(Math.random() * 50)
                                                                break;
                                                            case "medium":
                                                                questionOne = Math.ceil(Math.random() * 50 + 50)
                                                                break;
                                                            case "hard":
                                                                questionOne = Math.ceil(Math.random() * 400 + 100)
                                                                break;
                                                            case "extreme":
                                                                questionOne = Math.ceil(Math.random() * 500 + 500)
                                                                break;
                                                        }
                                                        for (let i = 1; i <= questionOne; i++) {
                                                            if (questionOne % i == 0) {
                                                                factors.push(i);
                                                            }
                                                        }
                                                        console.log(factors)
                                                        questionTwo = factors[Math.floor(Math.random() * factors.length)]
                                                    } else {
                                                        switch (level) {
                                                            case "beginner":
                                                                questionOne = (Math.random() * 10).toFixed()
                                                                questionTwo = (Math.random() * 10).toFixed();
                                                                break;
                                                            case "easy":
                                                                questionOne = (Math.random() * 50).toFixed()
                                                                questionTwo = (Math.random() * 50).toFixed()
                                                                break;
                                                            case "medium":
                                                                questionOne = (Math.random() * 50 + 50).toFixed()
                                                                questionTwo = (Math.random() * 50 + 50).toFixed()
                                                                break;
                                                            case "hard":
                                                                questionOne = (Math.random() * 400 + 100).toFixed()
                                                                questionTwo = (Math.random() * 400 + 100).toFixed()
                                                                break;
                                                            case "extreme":
                                                                questionOne = (Math.random() * 500 + 500).toFixed()
                                                                questionTwo = (Math.random() * 500 + 500).toFixed()
                                                                break;
                                                        }
                                                    }
                                                    questionLabel.innerHTML = `${questionOne} ${operation} ${questionTwo}`;
                                                    temp++;
                                                    answerInput.value = '';
                                                }
                                            }
                                        }, 3000)
                                    }
                                }
                            })
                        } else if (operation.length > 1) {
                            e();
                        }
                    }

                    let startBtn = document.querySelector("#startBtn");
                    let firstHalf = document.querySelector("#firstHalf");
                    let secondHalf = document.querySelector("#secondHalf");
                    let thirdHalf = document.querySelector("#thirdHalf");
                    let countDownLabel = document.querySelector("#countDown");
                    let array = ['×', '+', '-', '÷', '**', '**0.5', '**(1/3)', '||', ]
                    startBtn.addEventListener("click", () => {
                        firstHalf.style.display = 'none'
                        secondHalf.style.display = 'flex'
                        let seconds = 60000, timer;
                        function countdown(){
                            if(seconds == 60000){
                                timer = setInterval(countdown, 1000)
                            }
                            seconds -= 1000;
                            //countDownLabel.innerHTML = '00:' + seconds/1000;
                            countDownLabel.innerHTML = `00 : ${(seconds/1000 > 9 ? seconds/1000 : '0' + seconds/1000)}`
                            if(seconds <= 0){
                                clearInterval(timer);
                                thirdHalf.style.display = 'block'

                            }
                        }
                        countdown()
                        function generator(){
                            for(let i = 0; i < (Math.random()*10).toFixed(); i++){
                                Math.random()*10
                            }
                        }
                        //countDownLabel.innerHTML = "00:" + seconds/1000
                    })
                })
            })
        }
    })
})