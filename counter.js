let hours = 23;
minutes = 0;
seconds = 0;

function chargeSeconds(){
    let txtSeconds;

    if(seconds < 0){
        seconds = 59;
    }

    if (seconds < 10) {
        txtSeconds = `0${seconds}`
    }else{
        txtSeconds = seconds;
    }
    document.getElementById('seconds').innerHTML = txtSeconds;
    seconds --;

    chargeMinutes(seconds);
};

function chargeMinutes(seconds){
    let txtMinutes;

    if(seconds == -1 && minutes !== 0){
        setTimeout(() => {
            minutes--;
        }, 500)
    }else if(seconds == -1 && minutes == 0){
        setTimeout(() => {
            minutes = 59;
        }, 500)
    }

    if(minutes < 10){
        txtMinutes = `0${minutes}`
    } else{
        txtMinutes = minutes
    };

    document.getElementById('minutes').innerHTML = txtMinutes;
    chargeHours(seconds, minutes)
}

function chargeHours(minutes){
    let txtHours;

    if(seconds == -1 && minutes == 0 && hours !== 0){
        setTimeout(() => {
            hours--;
        }, 500)
    }else if(seconds == -1 && minutes == 0 && hours == 0){
        setTimeout(() => {
            hours = 2;
        }, 500)
    }

    if(hours < 10){
        txtHours = `0${hours}`;
    }else{
        txtHours = hours
    }
    document.getElementById('hours').innerHTML = txtHours;
}


setInterval(chargeSeconds, 1000);
