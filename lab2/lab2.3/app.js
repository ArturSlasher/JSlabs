let matrix = [
    [9,2,3],
    [1,4,2],
    [5,4,8]
];

for(i = 0; i < matrix.length; i++){
    for(j = 0; j < matrix.length; j++){
        for(k = 0; k < (matrix.length); k++){
            for(l = 0; l < (matrix.length); l++){
                if(matrix[i][j] == matrix[k][l] && (i!=k || j!=l)){
                    matrix[i][j] = 0;
                    matrix[k][l] = 0;
                }
            }
        }
    }
    console.log(matrix[i]);
}