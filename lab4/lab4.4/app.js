let userNumberStr = prompt("Enter number", '5 / 5.0 / 5.3 / 5,3');

if (userNumberStr.match(/[\D]+/)){
        console.log(userNumberStr.split(/\.|\,/)[0]);
        console.log(userNumberStr.split(/\.|\,/)[1]);
}
else{ 
    console.log("integer " + userNumberStr);
}