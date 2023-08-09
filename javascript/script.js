let random=document.getElementById("random");
let sort=document.getElementById("sort");
let bars_container=document.getElementById("bars_container")
let slider = document.getElementById("slider");
let select_algo = document.getElementById("algo");
let algotouse="bubble";
let minrange=1;
let maxrange=slider.value;
let n=slider.value;
let heightFactor = 4;
let speedFactor = 1000;
let unsorted_array=new Array(n);
function random_number(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function create_random_array(){
    let array = new Array(n);
    for (let index = 0; index < n; index++) {
        array[index]=random_number(minrange,maxrange);
    }

    return array
}


speed.addEventListener("change", (e) => {
  speedFactor = parseInt(e.target.value);
});

select_algo.addEventListener("change", function () {
  algotouse = select_algo.value;
});


slider.addEventListener("input", function () {
  n= slider.value;
  maxrange = slider.value;
  //console.log(numOfBars);
  bars_container.innerHTML = "";
  unsorted_array = create_random_array();
  changebar(unsorted_array);
});


document.addEventListener("DOMContentLoaded",function(){
     unsorted_array=create_random_array();
     changebar(unsorted_array);
});


function changebar(array){
   
    for(let i=0;i<array.length;i++){
    let bar=document.createElement("div");
    bar.classList.add("bar")
    bar.style.height=array[i]*heightFactor+"px"
    bars_container.appendChild(bar);

    }
}
random.addEventListener("click", function () {
    bars_container.innerHTML="";
    unsorted_array = create_random_array();
    changebar(unsorted_array);
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  



  //bubble sort
  async function bubbleSort(array) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          for (let k = 0; k < bars.length; k++) {
            if (k !== j && k !== j + 1) {
              bars[k].style.backgroundColor = "aqua";
            }
          }
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          bars[j].style.height = array[j] * heightFactor + "px";
          bars[j].style.backgroundColor = "lightgreen";
          // bars[j].innerText = array[j];
          bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
          bars[j + 1].style.backgroundColor = "lightgreen";
          // bars[j + 1].innerText = array[j + 1];
          await sleep(speedFactor);
        }
      }
      await sleep(speedFactor);
    }

    for (let k = 0; k < bars.length; k++) {
      bars[k].style.backgroundColor = "aqua";
    }
    return array;
  }


//Insertion sort

async function InsertionSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) { 
      
      let temp=array[j+1];
      array[j + 1] = array[j];
      array[j]=temp;
      bars[j + 1].style.backgroundColor = "red";
      bars[j].style.backgroundColor = "lightgreen"; 
      bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
     bars[j].style.height = array[j ] * heightFactor + "px";
      // bars[j + 1].innerText = array[j + 1];
      await sleep(speedFactor);

      for (let k = 0; k < bars.length; k++) {
        if (k != j + 1 && k!=j) {
          bars[k].style.backgroundColor = "aqua";
        }
      }
      j = j - 1;
    }
    
   
    // bars[j + 1].innerText = array[j + 1];
    await sleep(speedFactor);
  }

  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
  }
  return array;
}
   














//slecting the algo


 sort.addEventListener("click", function () {
  switch (algotouse) {
    case "bubble":
      bubbleSort(unsorted_array);
      break;
    // case "merge":
    //   if (
    //     confirm(
    //       "Merge Sort is not visualized properly. Do you want to continue?"
    //     )
    //   ) {
    //     mergeSort(unsorted_array);
    //   } else {
    //     break;
    //   }
    //   //console.log(mergeSort(unsorted_array));
    //   break;
    // case "heap":
    //   HeapSort(unsorted_array);
    //   break;
    case "insertion":
      InsertionSort(unsorted_array);
      break;
    // case "quick":
    //   console.log(unsorted_array.length);

    //   quickSort(unsorted_array, 0, unsorted_array.length - 1);
    //   break;
    default:
      bubbleSort(unsorted_array);
      break;
  }
});





