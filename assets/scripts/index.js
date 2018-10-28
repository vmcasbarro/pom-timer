'use strict'

let pomIntervalId
const alarm = new Audio('./clock-ringing.mp3')

function notifyUser() {
  // const alarm = new Audio('./clock-ringing.mp3')
  alarm.play()
    .then(()=>{alert('timer is done!')})
}

function resetTimer() {
  clearInterval(pomIntervalId)
}

function startTimer(durationInSeconds) {
  resetTimer()
  let timer = durationInSeconds
  pomIntervalId = setInterval( () => {
    const minutes = parseInt(timer/60, 10)
    const seconds = parseInt(timer%60, 10)

    let clockMinutes = minutes < 10 ? '0'+minutes : minutes
    let clockSeconds = seconds < 10 ? '0'+seconds : seconds

    $('.countdown').html(`${clockMinutes}:${clockSeconds}`)

    --timer

    // what is this really doing?
    // if (--timer < 0 ) {
    //   timer = durationInSeconds
    // }

    if (minutes == 0 && seconds == 0) {
      notifyUser()
      resetTimer()
    }
  }, 1000)
}

$(() => {
  $('#five').on('click', () => {
    startTimer(300)
  })
  $('#fifteen').on('click', () => {
    startTimer(900)
  })
  $('#twentyfive').on('click', () => {
    startTimer(1500)
  })
  $('#reset').on('click', () => {
    resetTimer()
    $('.countdown').html('00:00')
  })
})
