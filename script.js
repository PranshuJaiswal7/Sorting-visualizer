let random=document.getElementById("randomize");
let sort=document.getElementById("sort");
let bars_container=document.getElementById("bar_container")
let minrange=1;
let maxrange=30;
let n=10;
let unsorted_array=new Array(n);
function random_number(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function create_random_array(){
    for (let index = 0; index < n; index++) {
        unsorted_array[index]=random_number(minrange,maxrange);
    }
}

document.addEventListener("DOMContentLoaded",function(){
     create_random_array();
     changebar(unsorted_array);
});


function changebar(array){
    for(let i=0;i<array.length;i++){
    let bar=document.createElement("div");
    bar.classList.add("bar")
    bar.style.height=array[i]*10+"px"
    bars_container.appendChild(bar);

    }

}







