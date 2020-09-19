let matrix = [
    [1,2,3,4],
    [5,16,7,2],
    [13,4,9,16]
]
let lastColumn = [];
let noSimples;

for(i = 0; i < matrix.length; i++){
    lastColumn.push(matrix[i][matrix.length]);
}
for(i = 0; i < matrix[1].length; i++){
    for(j = 0; j < matrix.length; j++){
        noSimples = true;
        for(k = 0; k < lastColumn.length; k++){
            if(matrix[j][i] == lastColumn[k]){
                noSimples = false;
            }
        }
        if(noSimples){
            break;
        }
    }
    if(!noSimples){
        console.log(i);
    }
}