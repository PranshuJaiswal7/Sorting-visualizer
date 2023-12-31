let random=document.getElementById("random");
let sort=document.getElementById("sort");
let bars_container=document.getElementById("bars_container")
let slider = document.getElementById("slider");
let select_algo = document.getElementById("algo");
let user=document.getElementById("user");
let algotouse="bubble";
let minrange=1;
let maxrange=75;
let n=slider.value;
let heightFactor = 4;
let speedFactor = 1000;
let unsorted_array=new Array(n);
let flag=false;
const array = [];
user.addEventListener("click",function processInput() {
  const elementInput = document.getElementById("elementInput");
  const inputText = elementInput.value;
  
  const elements = inputText.split(",").map(element => parseInt(element.trim()));
  array.push(...elements.filter(element => !isNaN(element)));
  bars_container.innerHTML="";
  changebar(array);
  elementInput.value = "";
  flag=true;
  return array;
})


function random_number(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function create_random_array(){
     flag=false;
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
  //console.log(numOfBars);
  bars_container.innerHTML = "";
  unsorted_array = create_random_array();
  changebar(unsorted_array);
});


document.addEventListener("DOMContentLoaded",function(){
 
     unsorted_array=create_random_array(); 
     console.log(unsorted_array);
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
    bars[i].style.backgroundColor = "red";
    await sleep(speedFactor);
    let j = i - 1;
    while (j >= 0 && array[j] > key) { 
      bars[j+1].style.backgroundColor = "red";
      bars[j].style.backgroundColor = "lightgreen";
      await sleep(speedFactor);
      let temp=array[j+1];
      array[j + 1] = array[j];
      array[j]=temp;
      bars[j].style.backgroundColor = "red";
      bars[j+1].style.backgroundColor = "lightgreen"; 
      bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
      bars[j].style.height = array[j ] * heightFactor + "px";
      // bars[j + 1].innerText = array[j + 1];
      await sleep(speedFactor);

      for (let k = 0; k < bars.length; k++) {
        if(k!=j)
          bars[k].style.backgroundColor = "aqua";
        
      }
      j = j - 1;
    }
    for (let k = 0; k < bars.length; k++) {
      bars[k].style.backgroundColor = "aqua";
    }
   
    // bars[j + 1].innerText = array[j + 1];
    await sleep(speedFactor);
  }

  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
  }
  console.log(array);
  return array;
}
   

//quicksort


async function partition(items, left, right) {
  let bars = document.getElementsByClassName("bar");
  let text=document.getElementById("text_container");
  const pivot = items[right];
  if(right-left+1==items.length){
    text.innerHTML="Selecting A Pivot";

  }
  else{

     text.innerHTML="Selecting A Pivot for subarray";
  }
 
  await sleep(speedFactor);
  text.innerHTML="";

  bars[right].style.backgroundColor="red";
  bars[right].style.transition="background-color 2s ease";
  await sleep(speedFactor);
  let i = left - 1;

  for (let j = left; j < right; j++) {
    bars[j].style.backgroundColor="lightgreen";
    await sleep(speedFactor);
    if (items[j] < pivot) {
      i++;
      if(i>0){
        bars[i-1].style.backgroundColor="aqua";
      }
      bars[i].style.backgroundColor="yellow";
      await sleep(speedFactor);
      const temp = items[i];
      items[i] = items[j];
      items[j] = temp;
      bars[i].style.height = items[i] * heightFactor + "px";
      bars[j].style.height = items[j ] * heightFactor + "px";
    }
    for (let k = left; k < right; k++) {
      if(k!=i && k!=right)
      bars[k].style.backgroundColor = "aqua";
    }
  }

  const temp = items[i + 1];
  items[i + 1] = items[right];
  items[right] = temp;
  bars[i+1].style.height = items[i+1] * heightFactor + "px";
  bars[right].style.height = items[right] * heightFactor + "px";
  for (let k = left; k <=right; k++) {
    bars[k].style.backgroundColor = "aqua";
  }
  bars[i+1].style.backgroundColor="red";
  
  await sleep(speedFactor);
  bars[i+1].style.backgroundColor="aqua";

  return i + 1;
}

async function quickSort(items, left, right) {
  if (left < right) {
    const pivotIndex = await partition(items, left, right);

    await quickSort(items, left, pivotIndex - 1);
    await quickSort(items, pivotIndex + 1, right);
  }

  return items;
}

//heap sort
async function heapify(arr, n, i) {
  let text=document.getElementById("text_container");
  let bars = document.getElementsByClassName("bar");
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child
  const right = 2 * i + 2; // Right child
  bars[i].style.backgroundColor="lightgreen";
  await sleep(speedFactor);
  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than current largest
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    bars[largest].style.backgroundColor="yellow";
    await sleep(speedFactor);
    // Swap arr[i] and arr[largest]
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    bars[i].style.height = arr[i] * heightFactor + "px";
    bars[largest].style.height = arr[largest] * heightFactor + "px";
    await sleep(speedFactor);
    bars[largest].style.backgroundColor="aqua";

    await sleep(speedFactor);
    bars[i].style.backgroundColor="aqua";
    // Recursively heapify the affected sub-tree
    await heapify(arr, n, largest);
  } 
     bars[i].style.backgroundColor="aqua";
}

// Main function to perform Heap Sort
async function heapSort(arr) {
  let bars = document.getElementsByClassName("bar");
  let text=document.getElementById("text_container");
  const n = arr.length;
  // Build a max heap
  text.innerHTML="Building a heap";
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(arr, n, i);
  }
  text.innerHTML="";
  // Extract elements from the heap one by one
  text.innerHTML="Extracting element one by one";;
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    bars[0].style.backgroundColor="lightgreen";
    await sleep(speedFactor);
    bars[i].style.backgroundColor="yellow";
    await sleep(speedFactor);
    bars[i].style.height = arr[i] * heightFactor + "px";
    bars[0].style.height = arr[0] * heightFactor + "px";
    await sleep(speedFactor);
    bars[i].style.backgroundColor="aqua";
    // Call max heapify on the reduced heap
    text.innerHTML="Heapify";
    await heapify(arr, i, 0);
    text.innerHTML="Extracting elment one by one";
  }
  text.innerHTML="";

  return arr;
}









//slecting the algo


 sort.addEventListener("click", function () {
  switch (algotouse) {
    case "bubble":
      if(flag){
        bubbleSort(array);
      }
      else{
      bubbleSort(unsorted_array);
      }
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
    case "heap":
      if(flag){
        heapSort(array);
      }
      else{
       heapSort(unsorted_array);
      }
      break;
    case "insertion":
      if(flag){
        InsertionSort(array);
      }
      else{
      InsertionSort(unsorted_array);
      }
      break;
    case "quick":
      if(flag){
        quickSort(array,0,array.length-1);
      }
      else{
      quickSort(unsorted_array,0,unsorted_array.length-1);
      }
      break;
    default:
      bubbleSort(unsorted_array);
      break;
  }
});





