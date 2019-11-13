console.log('iniciando...')

let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();


const date = document.getElementById('date');
const month = document.getElementById('month');
const year= document.getElementById('year');


let prev = document.getElementById('prev');
let next = document.getElementById('next');


month.textContent = months[currentMonth];
year.textContent = currentYear;


prev.addEventListener('click', prev_month);
next.addEventListener('click', next_month);

writeMonth(currentMonth);

function writeMonth(month){


    for(let i = startDay(); i>0 ; i--){
        date.innerHTML += `
        <div class="calendar-date " id="date">
           ${totalDay(currentMonth-1)-(i-1)}
        </div>`; 
    }

    for(let i = 1 ; i<= totalDay(month);i++){
            date.innerHTML += ` <div class="calendar-date " id="date">${i}</div>`; 
    }
}


function totalDay(month){
   if(month=== -1){
       month = 11;
   }
   if(month==0|| month==2 ||month==4 ||month==6|| month==7 ||month==9|| month==11){
       return 31;
   }else if(month==3 ||month==5 ||month==8 ||month==10){

    return 30;
   }else {
       return isLeap() ? 29 :28;
    
    }
}

function isLeap(){
   return((currentYear % 100 !== 0) &&  (currentYear % 4 === 0) || (currentYear %400 ===0 ) ) 
}

function startDay(){
    let start = new Date(currentYear, currentMonth, 1);
    return ((start.getDay()-1) === -1 ) ? 6 : start.getDay()-1;
}



function prev_month(){

     if(currentMonth !== 0){

        currentMonth -- ;
     }else{

        currentMonth = 11;
        currentYear --;
     }

     newDay();
}

function next_month(){

    if(currentMonth !== 11){

       currentMonth ++;
    }else{

       currentMonth = 0;
       currentYear ++;
    }

    newDay();
}


function newDay(){

     currentDate.setFullYear(currentYear,currentMonth, currentDay);
     month.textContent = months[currentMonth];
     year.textContent = currentYear;
     date.textContent = "";
     writeMonth(currentMonth);
}