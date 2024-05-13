let clock = ()=>{

    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minutes");
    let sec = document.querySelector(".sec");
    let datemonthday = document.querySelector(".box2");
    let ampm = document.querySelector(".ampm");
    let date = new Date();
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds  = date.getSeconds();
    let years = date.getFullYear();
    let d = date.getDate();
    let day = date.getDay();
    let month = date.getMonth();

    
    hour.innerHTML=hours;
    minute.innerHTML=minutes;
    sec.innerHTML=seconds
    datemonthday.innerHTML=`${d} ${months[month]} ${days[day]} ${years}`;

     if(hours <=12){
        ampm.innerHTML="AM";
     }else{
        ampm.innerHTML="PM";
     }


};
// clock();
setInterval(clock,1000);