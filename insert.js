let arr = [1,10,2,20,40,5,80,9,6,7];

function insertionSort(arr)
{
  let current;
  let previous; //index 
  for(var i = 1; i < arr.length; i++){
    current = arr[i];
    previous = i-1;
    
    while(previous > -1 && current < arr[previous]){
      arr[previous+1] = arr[previous];
      previous--
    }
    arr[previous+1] = current;
  }
  console.log(arr);
}

insertionSort(arr);
