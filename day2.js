function average(arr){

    let sum = arr.reduce(
        (acc,num)=>acc+num,
        0
    );

    return sum/arr.length;
}

console.log(
average([10,20,30,40])
);
