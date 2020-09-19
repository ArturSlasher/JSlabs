let n = prompt('Enter n > 1', '2');
let startArrayInteger = 1;
let mainArray = [];
let runInteger = 0;
let yInteger = 0;
let xInteger = 0;

if(n<=1){
    console.log('Alert n <= 1');
}
else{
    for(i=0; i < n; i++){
        mainArray.push([]);
        for(j = 0; j < n; j++){
            mainArray[i][j] = 0;
        }
    }

    for(i = 0; i <= (n*n)+n/2; startArrayInteger++, i++){
        switch (runInteger){
            case (0):
                if(yInteger>=n){
                    ++xInteger;
                    --yInteger;
                    ++runInteger;
                    --startArrayInteger;
                    --i;
                }
                else if(mainArray[xInteger][yInteger]!=0){
                    ++xInteger;
                    --yInteger;
                    ++runInteger;
                    --startArrayInteger;
                    --i;
                }
                else{
                mainArray[xInteger][yInteger] = startArrayInteger;
                ++yInteger;
                }
                break;
            case (1):
                if(xInteger>=n){
                    --xInteger;
                    --yInteger;
                    ++runInteger;
                    --startArrayInteger;
                    --i;
                }
                else if(mainArray[xInteger][yInteger]!=0){
                    --xInteger;
                    --yInteger;
                    ++runInteger;
                    --startArrayInteger;
                    --i;
                }
                else{
                mainArray[xInteger][yInteger] = startArrayInteger;
                ++xInteger;
                }
                break;
            case (2):
                if(yInteger<=-1){
                    --xInteger;
                    ++yInteger;
                    ++runInteger;
                    --startArrayInteger;
                    --i;
                }
                else if(mainArray[xInteger][yInteger]!=0){
                    --xInteger;
                    ++yInteger;
                    ++runInteger;
                    --startArrayInteger;
                    --i;
                }
                else{
                mainArray[xInteger][yInteger] = startArrayInteger;
                --yInteger;
                }
                break;
            case (3):
                if(xInteger<=-1){
                    ++xInteger;
                    ++yInteger;
                    ++runInteger;
                    --startArrayInteger;
                    --i;
                }
                else if(mainArray[xInteger][yInteger]!=0){
                    ++xInteger;
                    ++yInteger;
                    ++runInteger;
                    --startArrayInteger;
                }
                else{
                mainArray[xInteger][yInteger] = startArrayInteger;
                --xInteger;
                break;
                }
        }
        if(runInteger >= 4){
            runInteger -= 4;
        }
    }

    for(xInteger of mainArray){
        console.log(xInteger);
    }
}