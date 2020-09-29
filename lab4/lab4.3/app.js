let userEnter = prompt("Enter your name", 'Artur Azarenkov');
let userEnterSplit = userEnter.split(" ");

if (userEnter.match(/^[A-Z][a-z]+\s[A-Z][a-z]+/)){
    if(userEnterSplit[0].match(/\W|\d/) || userEnterSplit[1].match(/\W|\d/)){
        console.log('invalid enter');
    }
    else{
        userArr = userEnter.split(' ');
        console.log(userArr[1] + ' ' + userArr[0]);
    }
}
else{
    console.log('invalid enter');
}