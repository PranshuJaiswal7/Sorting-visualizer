let random=document.getElementById("randomize");
let sort=getElementById("sort");
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




