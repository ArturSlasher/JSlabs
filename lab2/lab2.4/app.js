let matrix = [
    [],
    [],
    []
];

let noOnes;
for(i = 0; i < matrix.length; i++){
    noOnes = true;
    for(j = 0; j < 4; j++){
        matrix[i][j] = Math.floor(Math.random()*2);
        if (matrix[i][j] == 1){
            noOnes = false;
        }
    }
    if (noOnes){
        matrix[i][3] = 1;
        console.log("1 was added");
    }
    console.log(matrix[i]);
}