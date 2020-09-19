let str = '';
let symbolsArray = "qwertyuiopasdfghjklzxcvbnm";
let noNumberOne = true;
let bufferNumber;
for(i = 0; i < 10; i++){
    switch (true){
        case i<4:
            str += Math.floor(Math.random() * (10));
            break;
        case i<6:
            str += symbolsArray[Math.floor(Math.random() * (26))];
            break;
        default:
            bufferNumber = Math.floor(Math.random() * (2));
            if(i == 9 && noNumberOne){ 
                str += 1;
                console.log("1 was added");
            }
            else str += bufferNumber;
            if(bufferNumber == '1') noNumberOne = false;
            break;
    }
}
console.log(str);