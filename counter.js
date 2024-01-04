//Grab input fields
let hour = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let second = document.querySelector('#second')
let start = document.querySelector('#start')
let reset = document.querySelector('#reset')
let startTimer


//Counter Performance
function time_counter() {
    second.value ++
    if(second.value == 60){
        second.value = 0
        minute.value ++
    } else if(minute.value == 60){
        minute.value = 0
        second.value = 0
        hour.value ++
    }
}

//Stop Interval
function stopInterval(){
    clearInterval(startTimer)
}

//Reset values
reset.addEventListener('click', () => {
    hour.value = 0
    minute.value = 0
    second.value = 0

    stopInterval()
})

//Start Time Counter
start.addEventListener('click', () =>{
    startTimer = setInterval(() =>{
        time_counter()
    }, 1000)
})
