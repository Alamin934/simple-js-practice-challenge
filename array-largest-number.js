
function arrayLargestNumber(numbers){
let largest = numbers[0];
for(var i = 0; i<numbers.length; i++){
    let element = numbers[i];
    if(element>largest){
        largest=element;
    }
}
return largest;

}

function arraySmallestNumber(numbers){
    let smallest = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        let element = numbers[i];
        if(smallest>element){
            smallest=element;
        }
    }
    return smallest;
}

console.log(arrayLargestNumber([123,34,23,4,5,3243,454,345,67]))
console.log(arraySmallestNumber([123,34,23,4,5,3243,454,345,67]))