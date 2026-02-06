// Declarations
let buttons = document.querySelectorAll(".operation-label");
let button;
const show = document.getElementById('showed');
const name = document.getElementById('name');
const amount = document.getElementById('amount');
const submit = document.getElementById('btn');
const no1 = document.getElementById('noone');
const no2 = document.getElementById('notwo');
const opo = document.getElementById('operation');
const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');
const btn4 = document.getElementById('four');
const queField = document.getElementById('que');
const restart = document.getElementById('btnres');
const replay = document.getElementById('btnrep');
const scorefield = document.getElementById('score');
const field = document.querySelectorAll('[data-operation]');
let progressBarFull = document.getElementById('progress-bar-full');
let guide = document.getElementById('guide');
let questions = document.getElementById('div');
let result = document.getElementById('result');
let img = document.getElementById('img');
let rules = document.getElementById('rules');
let attempts = document.querySelectorAll('#attempt');
let progresstxt = document.getElementById('progress-text');
let error = document.getElementById('error')
let val = '';
let ans = 0;
let k= 0
let score = 0;
let atemp = 0;
let que = 1;
let one = 0;
let preOne = 0
let two = 0;
let preTwo = 0
let solution = 0;
let order = 0;
let secOrder = 0;
let key = 0;
let rank = '';
let totaltime = 10;
let sec = 30;
let totalmin = 0;
let totalsec = 0;
let timer;
let right = new Audio()
let wrong = new Audio()


for (button in buttons) {
    buttons[button].onclick = function() {
        console.log('test')
        buttons.forEach(function(btn) {
            btn.classList.remove('click');
        })
        this.classList.add('click');
    }
}


field[0].addEventListener('click', ()=> {
    val = '+'
});
field[1].addEventListener('click', ()=> {
    val = '-'
});
field[2].addEventListener('click', ()=> {
    val = '<p><i class="fa-solid fa-xmark fa-xs"></i></p>'
});
field[3].addEventListener('click', ()=> {
    val = '<p><i class="fa-solid fa-divide fa-xs"></i></p>'
});


submit.addEventListener('click', ()=> {
    if(name.value != '' && amount.value != '' && val && Number.isInteger(+amount.value) && +amount.value > 0) {
        guide.style.display = 'none'
        questions.style.display = 'none'
        rules.style.display = 'block'
        submit.style.display = 'block'
        submit.innerHTML = 'Start'
        show.style.height = '500px'
        result.style.display = 'none'
        submit.addEventListener('click', ()=> {
            show.style.height = '690px'
            questions.style.display = 'block'
            rules.style.display = 'none'
            submit.style.display = 'none'
            result.style.display = 'none'
            timer = setInterval(function() {
                sec--
                totalsec++
                if(totalsec == 60) {
                    totalmin++
                    totalsec = 0
                }
                document.getElementById('timer').innerHTML = `00:${sec}`
                if(sec == 0) {
                    sec = 4
                   document.getElementById('p').innerHTML = ``
                   switch (order) {
                    case 0:
                        btn1.style.backgroundColor = 'green'
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        break;
                    case 1:
                        btn2.style.backgroundColor = 'green'
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        break;
                    case 2:
                        btn3.style.backgroundColor = 'green'
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        break;
                    case 3:
                        btn4.style.backgroundColor = 'green'
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        break;
                    default:
                        break;
                     }
                   wrong.src = `./Audios/wrong.mp3`
                    wrong.play()
                    sec = 30
                    // clearInterval(timer)
                   setTimeout(()=> {
                        btn1.style.backgroundColor = 'rgb(0, 22, 102)'
                        btn1.style.color = 'white'
                        btn2.style.color = 'white'
                        btn3.style.color = 'white'
                        btn4.style.color = 'white'
                        btn1.disabled = false
                        btn2.disabled = false
                        btn4.disabled = false
                        btn3.disabled = false
                        btn2.style.backgroundColor = 'rgb(0, 22, 102)'
                        btn3.style.backgroundColor = 'rgb(0, 22, 102)'
                        btn4.style.backgroundColor = 'rgb(0, 22, 102)'
                      enitiate()
                   },3000)
                }
            }, 1000)
            enitiate()
        })
    }else {
        error.innerHTML = "Please enter a valid input!"
    }
});


function enitiate() {
    sec = 30;
    progressBarFull.style.width = `${(+que / +amount.value) * 100}%`
    progresstxt.innerHTML = `${que} / ${amount.value}`
    if(que > amount.value) {
        end()
    }
    que++;
    if(val == '+') {
        one = Math.floor(Math.random() * 20) + 1;
        two = Math.floor(Math.random() * 20) + 1;
        while (one == preOne && two == preTwo) {
            one = Math.floor(Math.random() * 20) + 1;
            two = Math.floor(Math.random() * 20) + 1;
        }
        solution = one + two
    }else if(val == '-') {
        solution = Math.floor(Math.random() * 20) + 1;
        two = Math.floor(Math.random() * 20) + 1;
        while (one == preOne && two == preTwo) {
           // one = Math.floor(Math.random() * 20) + 1
            two = Math.floor(Math.random() * 20) + 1
        }
        one = solution + two
    }else if(val == '<p><i class="fa-solid fa-xmark fa-xs"></i></p>') {
        one = Math.floor(Math.random() * 10) + 1;
        two = Math.floor(Math.random() * 10) + 1;
        while (one == preOne && two == preTwo) {
            one = Math.floor(Math.random() * 20) + 1
            two = Math.floor(Math.random() * 20) + 1
        }
        solution = one * two
    }else if(val == '<p><i class="fa-solid fa-divide fa-xs"></i></p>') {
        solution = Math.floor(Math.random() * 20) + 1
        two = Math.floor(Math.random() * 20) + 1
        while (one == preOne && two == preTwo) {
           // one = Math.floor(Math.random() * 20) + 1
            two = Math.floor(Math.random() * 20) + 1
        }
        one = two * solution
    }
    display()
}

function display() {
    preOne = one
    preTwo = two
    no1.innerHTML = one
    no2.innerHTML = two
    opo.innerHTML = val
    question()
}

let choiceA = 0
let choiceB = 0
let choiceC = 0
function question() {
    choiceA = Math.floor(Math.random() * 21)
    while(choiceA == solution) {
        choiceA = Math.floor(Math.random() * 21)
    }
    choiceB = Math.floor(Math.random() * 21)
    while(choiceB == solution || choiceB == choiceA) {
       choiceB = Math.floor(Math.random() * 21)
    }
    choiceC = Math.floor(Math.random() * 21)
    while(choiceC == solution || choiceC == choiceB || choiceC == choiceA) {
        choiceC= Math.floor(Math.random() * 21)
    }
    set()
}
function set() {
    order = Math.floor(Math.random() * 4)
    if(order == 0) {
        btn1.innerHTML = solution
        btn2.innerHTML = choiceA
        btn3.innerHTML = choiceB
        btn4.innerHTML = choiceC
    }else if(order == 1) {
        btn1.innerHTML = choiceB
        btn2.innerHTML = solution
        btn3.innerHTML = choiceA
        btn4.innerHTML = choiceC
    }else if(order == 2) {
        btn1.innerHTML = choiceC
        btn2.innerHTML = choiceB
        btn3.innerHTML = solution
        btn4.innerHTML = choiceA
    }else if(order == 3) {
        btn1.innerHTML = choiceA
        btn2.innerHTML = choiceC
        btn3.innerHTML = choiceB
        btn4.innerHTML = solution
    }
}
btn1.addEventListener('click', () => {
    key = 1
    ans = btn1.innerText
    check()
})
btn2.addEventListener('click', () => {
    key = 2
    ans = btn2.innerText
    check()
})
btn3.addEventListener('click', () => {
    key = 3
    ans = btn3.innerText
    check()
})
btn4.addEventListener('click', () => {
    key = 4
    ans = btn4.innerText
    check()
})
function check() {
    if(ans == solution) {
        right.src = `./Audios/right.mp3`
        right.play()
        score++
        sec = 4
        atemp = 0
        k++
        switch (order) {
            case 0:
                btn1.style.backgroundColor = 'green'
                btn1.disabled = true
                btn2.disabled = true
                btn3.disabled = true
                btn4.disabled = true
                break;
            case 1:
                btn2.style.backgroundColor = 'green'
                btn1.disabled = true
                btn2.disabled = true
                btn3.disabled = true
                btn4.disabled = true
                break;
            case 2:
                btn3.style.backgroundColor = 'green'
                btn1.disabled = true
                btn2.disabled = true
                btn3.disabled = true
                btn4.disabled = true
                break;
            case 3:
                btn4.style.backgroundColor = 'green'
                btn1.disabled = true
                btn2.disabled = true
                btn3.disabled = true
                btn4.disabled = true
                break;
            default:
                break;
        }
        scorefield.innerHTML = `${score}`
        document.getElementById('p').innerHTML = ``
        setTimeout(() => {
            btn1.style.backgroundColor = 'rgb(0, 22, 102)'
            btn1.style.color = 'white'
            btn2.style.color = 'white'
            btn3.style.color = 'white'
            btn4.style.color = 'white'
            btn1.disabled = false
            btn2.disabled = false
            btn3.disabled = false
            btn4.disabled = false
            btn2.style.backgroundColor = 'rgb(0, 22, 102)'
            btn3.style.backgroundColor = 'rgb(0, 22, 102)'
            btn4.style.backgroundColor = 'rgb(0, 22, 102)'
            sec = 30
            enitiate()
        }, 3000);
    }else {
        wrong.src = `./Audios/wrong.mp3`
        wrong.play()
        atemp++
        let sec = 4
        if(atemp == 2) {
            atemp = 0
            document.getElementById('p').innerHTML = ``
            switch (order) {
                case 0:
                    btn1.style.backgroundColor = 'green'
                    btn1.disabled = true
                    btn2.disabled = true
                    btn3.disabled = true
                    btn4.disabled = true
                    break;
                case 1:
                    btn2.style.backgroundColor = 'green'
                    btn1.disabled = true
                    btn2.disabled = true
                    btn3.disabled = true
                    btn4.disabled = true
                    break;
                case 2:
                    btn3.style.backgroundColor = 'green'
                    btn1.disabled = true
                    btn2.disabled = true
                    btn3.disabled = true
                    btn4.disabled = true
                    break;
                case 3:
                    btn4.style.backgroundColor = 'green'
                    btn1.disabled = true
                    btn2.disabled = true
                    btn3.disabled = true
                    btn4.disabled = true
                    break;
                default:
                    break;
            }
             switch (key) {
                case 1:
                    btn1.style.backgroundColor = 'red'
                    btn1.disabled = true
                    btn2.disabled = true
                    btn3.disabled = true
                    btn4.disabled = true
                    break;
                case 2:
                    btn2.style.backgroundColor = 'red'
                    btn1.disabled = true
                    btn2.disabled = true
                    btn3.disabled = true
                    btn4.disabled = true
                    break;
                case 3:
                    btn3.style.backgroundColor = 'red'
                    btn1.disabled = true
                    btn2.disabled = true
                    btn3.disabled = true
                    btn4.disabled = true
                    break;
                case 4:
                    btn4.style.backgroundColor = 'red'
                    btn1.disabled = true
                    btn2.disabled = true
                    btn3.disabled = true
                    btn4.disabled = true
                    break;
                default:
                    break;
            }
            setTimeout(() => {
                btn1.style.backgroundColor = 'rgb(0, 22, 102)'
                btn1.style.color = 'white'
                btn2.style.color = 'white'
                btn3.style.color = 'white'
                btn4.style.color = 'white'
                btn1.disabled = false
                btn2.disabled = false
                btn3.disabled = false
                btn4.disabled = false
                btn2.style.backgroundColor = 'rgb(0, 22, 102)'
                btn3.style.backgroundColor = 'rgb(0, 22, 102)'
                btn4.style.backgroundColor = 'rgb(0, 22, 102)'
                sec = 30
                enitiate()
            }, 3000);
        }else {
            switch (key) {
                case 1:
                    btn1.style.backgroundColor = 'red'
                    break;
                case 2:
                    btn2.style.backgroundColor = 'red'
                    break;
                case 3:
                    btn3.style.backgroundColor = 'red'
                    break;
                case 4:
                    btn4.style.backgroundColor = 'red'
                    break;
                default:
                    break;
            }
            document.getElementById('p').innerHTML = `Your answer is wrong. You have ${2 - atemp} chance left.`

            setTimeout(() => {
                btn1.style.backgroundColor = 'rgb(0, 22, 102)'
                btn1.style.color = 'white'
                btn2.style.color = 'white'
                btn3.style.color = 'white'
                btn4.style.color = 'white'
                btn1.disabled = false
                btn2.disabled = false
                btn3.disabled = false
                btn4.disabled = false
                btn2.style.backgroundColor = 'rgb(0, 22, 102)'
                btn3.style.backgroundColor = 'rgb(0, 22, 102)'
                btn4.style.backgroundColor = 'rgb(0, 22, 102)'
                sec = 30
                set()
            }, 3000);
        }
    }
}
function end() {
    clearInterval(timer);
    result.style.display = 'block'
    show.style.height = '750px'
    if(Math.floor(score / +amount.value * 100) >= 95) {
        img.innerHTML = `<p><i class="fa-solid fa-medal fa-xl"></i></p>`
        img.style.fontSize = '100px'
        rank = 'Exellent'
    }
    else if(Math.floor(score / +amount.value * 100) > 80) {
        img.innerHTML = `<p><i class="fa-solid fa-hands-clapping fa-xl"></i></p>`
        img.style.fontSize = '100px'
        rank = 'Very Good'
    }
    else if(Math.floor(score / +amount.value * 100) > 50) {
        img.innerHTML = `<p><i class="fa-solid fa-thumbs-up" fa-xl></i></p>`
        img.style.fontSize = '100px'
        rank = 'Good'
    }
    else if(Math.floor(score / +amount.value * 100) > 30) {
        img.innerHTML = `<p><i class="fa-solid fa-thumbs-up fa-xl"></i></p>`
        img.style.fontSize = '100px'
        rank = 'Not Bad'
    }
    else if(Math.floor(score / +amount.value * 100) <= 30) {
        img.innerHTML = `<p><i class="fa-solid fa-thumbs-down fa-xl"></i></p>`
        img.style.fontSize = '100px'
        rank = 'Poor'
    }
    document.getElementById('congratsHeader').innerHTML = `Congrats ${name.value} on finishing the quiz sucessfully!`
    document.getElementById('scoren').innerHTML = `Score: ${score} out of ${amount.value}`
    document.getElementById('percent').innerHTML = `Percentage: ${Math.floor((+score / +amount.value) * 100)}%`
    document.getElementById('timeTaken').innerHTML = `Total time elapsed: ${totalmin}:${totalsec}`
    queField.innerHTML = `${rank}`
    document.getElementById('div').style.display = 'none'
    totalsec = 0
    totalmin = 0

}
