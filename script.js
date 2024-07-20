
let ampm=document.getElementById('ampm')
function displayTime(){
    let dateTime = new Date()
    let hr=padzero(dateTime.getHours());
    let min=padzero(dateTime.getMinutes());
    let sec=padzero(dateTime.getSeconds());
    if(hr>12){
        hr -=12
        ampm.innerHTML='PM'
        
    }
    document.getElementById('hours').innerHTML=hr
    document.getElementById('mins').innerHTML=min
    document.getElementById('secs').innerHTML=sec

}

function padzero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,500)
