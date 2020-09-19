console.log(rangeBetween(4,7));

function rangeBetween(begin, end){
    let arr = [];
    for(begin; begin <= end; begin++)
        arr.push(begin);
    return arr;
}