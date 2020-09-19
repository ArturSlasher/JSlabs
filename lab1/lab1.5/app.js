let userNumber;
let noSimple;
for(i = 0; i < 10; i++){
    userNumber = prompt('Enter a number > 2', '257');
    noSimple = false;
    for(j = 2; j < userNumber; j++){
        if(userNumber%j == 0) noSimple = true;
    }
    if (noSimple) console.log(userNumber + ' is not simple');
    else console.log(userNumber + ' is simple')
}