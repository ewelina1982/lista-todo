const button =  document.querySelector("#button");
const input =  document.querySelector("#input");
const lista =  document.querySelector("#lista");

const usun1 =  document.querySelector(".remove");


console.log(usun1);
function dodanie (){
    if(input.value.length <1){
        alert ("podaj wartość")
    }else {
    let zadania = document.createElement("li");
        zadania.innerHTML = input.value;
        
    let usun = document.createElement("button");
        usun.classList.add("remove");
        usun.innerHTML = "usuń";
        usun.addEventListener("click", usunZadanie);
        
    let zrobione = document.createElement("button");
        zrobione.classList.add("done-btn");
       zrobione.innerHTML = "zrobione";
        zrobione.addEventListener("click", zrobioneZadanie);
        
    input.value = '';
        
        lista.appendChild(zadania);
        zadania.appendChild(usun);
        zadania.appendChild(zrobione);
    };
    
    
};
    
   
function usunZadanie (){
     
       this.parentElement.parentElement.removeChild(this.parentElement);
    };

function zrobioneZadanie(){
     this.parentElement.classList.add("done");
}
    



button.addEventListener("click", dodanie);