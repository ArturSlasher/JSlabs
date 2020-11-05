
// НЕПОНЯТНО КАК И ЗАЧЕМ ПРОДУБЛИРОВАННЫЙ РАБОЧИЙ ПРОЕКТ
// ДЛЯ ДЕПЛОЯ НА HEROKU

let main = document.querySelector('.main');
const scoreElem = document.getElementById("score");
const levelElem = document.getElementById("level");

let playfield = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

let gameSpeed = 500;
let score = 0;
let level = 1;
let gameOverText = '';

function draw(){
    let mainInnerHTML = "";
    for(let y = 0; y < playfield.length; y++){
        for(let x = 0; x < playfield[y].length; x++){
            if (playfield[y][x] === 1){
                mainInnerHTML += '<div class="cell movingCell"></div>'
            }
            else if(playfield[y][x] === 2){
                mainInnerHTML += '<div class="cell fixedCell"></div>'
            }
            else{
                mainInnerHTML += '<div class="cell"></div>';
            }
        }
    }
    main.innerHTML = mainInnerHTML;
}

function drawRandomTetro(){
    let nRandom = parseInt(Math.random() * 7);
    //nRandom = 1;
    switch (nRandom){
        case 0: //палка
            playfield[0][3] = 1;
            playfield[0][4] = 1;
            playfield[0][5] = 1;
            playfield[0][6] = 1;
            break;
        case 1: //квадрат
            playfield[0][4] = 1;
            playfield[0][5] = 1;
            playfield[1][4] = 1;
            playfield[1][5] = 1;
            break;
        case 2: //кочерга L
            playfield[0][4] = 1;
            playfield[1][4] = 1;
            playfield[2][4] = 1;
            playfield[2][5] = 1;
            break;
        case 3: //обратная кочерга
            playfield[0][5] = 1;
            playfield[1][5] = 1;
            playfield[2][5] = 1;
            playfield[2][4] = 1;
            break;
        case 4: //пирамида
            playfield[0][4] = 1;
            playfield[1][3] = 1;
            playfield[1][4] = 1;
            playfield[1][5] = 1;
            break;
        case 5: //молния S
            playfield[0][5] = 1;
            playfield[0][6] = 1;
            playfield[1][4] = 1;
            playfield[1][5] = 1;
            break;
        case 6: //обратная молния Z
            playfield[0][4] = 1;
            playfield[0][5] = 1;
            playfield[1][5] = 1;
            playfield[1][6] = 1;
            break;
        default:
            console.log("Error");
    }
}

function canTetroMoveDown(){
    for(let y = 0; y < playfield.length; y++){
        for(let x = 0; x < playfield[y].length; x++){
            if (playfield[y][x] === 1){
                //проверка на конец формы или фигуры
                if (y === playfield.length-1 ||  playfield[y+1][x] === 2){
                    return false;
                }
            }
        }
    }
    return true;
}

function moveTetroDown(){
    if (canTetroMoveDown()){
        for(let y = playfield.length - 1; y >= 0; y--){
            for(let x = 0; x < playfield[y].length; x++){
                if (playfield[y][x] === 1){
                    playfield[y+1][x] = 1;
                    playfield[y][x] = 0;
                }
            }
        }
    }
    else{
        fixTetro(); //зафиксировать фигуру
    }
}

function canTetroMoveLeft(){
    for(let y = 0; y < playfield.length; y++){
        for(let x = 0; x < playfield[y].length; x++){
            if (playfield[y][x] === 1){
                //проверка
                if (x === 0 || playfield[y][x-1] === 2){
                    return false;
                }
            }
        }
    }
    return true;
}

function moveTetroLeft(){
    if (canTetroMoveLeft()){
        for(let y = playfield.length - 1; y >= 0; y--){
            for(let x = 0; x < playfield[y].length; x++){
                if (playfield[y][x] === 1){
                    playfield[y][x - 1] = 1;
                    playfield[y][x] = 0;
                }
            }
        }
    }
}

function canTetroMoveRight(){
    for(let y = 0; y < playfield.length; y++){
        for(let x = 0; x < playfield[y].length; x++){
            if (playfield[y][x] === 1){
                //проверка
                if (x === playfield[0].length-1 || playfield[y][x+1] === 2){
                    return false;
                }
            }
        }
    }
    return true;
}

function moveTetroRight(){
    if (canTetroMoveRight()){
        for(let y = playfield.length - 1; y >= 0; y--){
            for(let x = playfield.length-1; x >= 0; x--){
                if (playfield[y][x] === 1){
                    playfield[y][x + 1] = 1;
                    playfield[y][x] = 0;
                }
            }
        }
    }
}

function removeFullLines(){
    let canRemoveLine = true;
    let filledLines = 0;
    checkStopGame();
    for(let y = 0; y < playfield.length; y++){
        for(let x = 0; x < playfield[y].length; x++){
            if (playfield[y][x] != 2){
                canRemoveLine = false;
                break;
            }
        }
        if (canRemoveLine){
            playfield[y] = [0,0,0,0,0,0,0,0,0,0];
            moveAllDown(y);
            ++filledLines;
        }
        canRemoveLine = true;
    }

    score += 10*filledLines*filledLines;
    level = parseInt(score/100) + 1;
    if (gameSpeed >= 150){
        gameSpeed -= level*5;
    }
    scoreElem.innerHTML = score;
    levelElem.innerHTML = level;
}

function moveAllDown(yMax){ //after removing full line
    for(let y = yMax; y >= 0; y--){
        for(let x = 0; x < playfield[y].length; x++){
            if (playfield[y][x] === 2){
                playfield[y+1][x] = 2;
                playfield[y][x] = 0;
            }
        }
    }
}

function fixTetro(){
    for(let y = 0; y < playfield.length; y++){
        for(let x = 0; x < playfield[y].length; x++){
            if (playfield[y][x] === 1){
                playfield[y][x] = 2;
                score += 1;
            }
        }
    }

    removeFullLines();
    drawRandomTetro();
}

function checkStopGame(){
    for(let x = 0; x < playfield[0].length; x++){
        if (playfield[0][x] === 2){
            gameOverText = "Game over: level " + level + " score " + score;
            alert(gameOverText);
            reset(); 
        }
    }
}

function reset(){
    playfield = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
    score = 0;
    level = 1;
    gameSpeed = 500;
}

drawRandomTetro();
draw();

document.onkeydown = function(e){
    //console.log(e);
    if (e.keyCode === 37){
        //left
        moveTetroLeft();
    }
    else if (e.keyCode === 39){
        //right
        moveTetroRight();
    }
    else if (e.keyCode === 40){
        //down
        moveTetroDown();
    }
    else if (e.keyCode === 38){ //32
        //rotate
        rotateTetro();
    }
    draw();
}

function startGame(){
    moveTetroDown();
    draw();
    setTimeout(startGame, gameSpeed);
}

setTimeout(startGame, gameSpeed);


function rotateTetro(){
    for(let y = 0; y < playfield.length; y++){
        for(let x = 0; x < playfield[y].length; x++){
            if (playfield[y][x] === 1){
                //лежащая палка
                if (y < playfield.length-3 && y >= 0 &&
                    playfield[y][x+1] === 1 && playfield[y][x+2] === 1 && playfield[y][x+3] === 1 &&
                    playfield[y+1][x+1] != 2 && playfield[y+2][x+1] != 2 && playfield[y+3][x+1] != 2)
                {
                    playfield[y][x] = 0;
                    playfield[y][x+2] = 0;
                    playfield[y][x+3] = 0;
                    playfield[y+1][x+1] = 1;
                    playfield[y+2][x+1] = 1;
                    playfield[y+3][x+1] = 1;
                    draw();
                    return true;
                }
                //стоящая палка
                if (x > 1 && x < playfield[y].length-1 && y >= 0 &&
                    playfield[y+1][x] === 1 && playfield[y+2][x] === 1 && playfield[y+3][x] === 1 &&
                    playfield[y+1][x-2] != 2 && playfield[y+1][x-1] != 2 && playfield[y+1][x+1] != 2)
                {
                    playfield[y][x] = 0;
                    playfield[y+2][x] = 0;
                    playfield[y+3][x] = 0;
                    playfield[y+1][x-2] = 1;
                    playfield[y+1][x-1] = 1;
                    playfield[y+1][x+1] = 1;
                    draw();
                    return true;
                }
                //===================================================
                //стоящая кочерга L
                if (x > 0 && y >= 0 &&
                    playfield[y+1][x-1] != 2 && playfield[y+1][x] != 2 && playfield[y+1][x+1] != 2 && playfield[y+2][x-1] != 2 &&
                    playfield[y+1][x] === 1 && playfield[y+2][x] === 1 && playfield[y+2][x+1])
                {
                    playfield[y][x] = 0;
                    playfield[y+2][x] = 0;
                    playfield[y+2][x+1] = 0;
                    playfield[y+1][x-1] = 1;
                    playfield[y+1][x] = 1;
                    playfield[y+1][x+1] = 1;
                    playfield[y+2][x-1] = 1;
                    draw();
                    return true;
                }
                //кочерга-трамплин
                if (y < playfield.length-1 &&
                    playfield[y+1][x+1] != 2 && playfield[y+2][x+1] != 2 &&
                    playfield[y][x+1] === 1 && playfield[y][x+2] === 1 && playfield[y+1][x] === 1)
                {
                    playfield[y][x+2] = 0;
                    playfield[y+1][x] = 0;
                    playfield[y+1][x+1] = 1;
                    playfield[y+2][x+1] = 1;
                    draw();
                    return true;
                }
                //кочерга-вышка
                if (x < playfield[y].length-2 && 
                    playfield[y+1][x] != 2 && playfield[y][x+2] != 2 && playfield[y+1][x+2] != 2 &&
                    playfield[y][x+1] === 1 && playfield[y+1][x+1] === 1 && playfield[y+2][x+1])
                {
                    playfield[y][x] = 0;
                    playfield[y][x+1] = 0;
                    playfield[y+2][x+1] = 0;
                    playfield[y+1][x] = 1;
                    playfield[y][x+2] = 1;
                    playfield[y+1][x+2] = 1;
                    draw();
                    return true;
                }
                //лежащая кочерга
                if (y > 0 &&
                    playfield[y-1][x-1] != 2 && playfield[y][x-1] != 2 &&
                    playfield[y+1][x-2] === 1 && playfield[y+1][x-1] === 1 && playfield[y+1][x] === 1)
                {
                    playfield[y+1][x-2] = 0;
                    playfield[y][x] = 0;
                    playfield[y-1][x-1] = 1;
                    playfield[y][x-1] = 1;
                    draw();
                    return true;
                }
                //===============================================================
                //стоящая обратная кочерга
                if (x < playfield[y].length -1 &&
                    playfield[y+2][x] != 2 && playfield[y+1][x-1] != 2 &&
                    playfield[y+1][x] === 1 && playfield[y+2][x] === 1 && playfield[y+2][x-1] === 1)
                {
                    playfield[y][x] = 0;
                    playfield[y+1][x] = 0;
                    playfield[y+1][x-1] = 1;
                    playfield[y+2][x+1] = 1;
                    draw();
                    return true;
                }
                // лежащая обратная кочерга
                if (y > 0 &&
                    playfield[y-1][x] != 2 && playfield[y-1][x+1] != 2 &&
                    playfield[y+1][x] === 1 && playfield[y+1][x+1] === 1 && playfield[y+1][x+2] === 1)
                {
                    playfield[y+1][x+1] = 0;
                    playfield[y+1][x+2] = 0;
                    playfield[y-1][x] = 1;
                    playfield[y-1][x+1] = 1;
                    draw();
                    return true;
                }
                // обратная кочерга-вышка
                if (x > 0 &&
                    playfield[y][x-1] != 2 && playfield[y+1][x+1] != 2 &&
                    playfield[y][x+1] === 1 && playfield[y+1][x] === 1 && playfield[y+2][x] === 1)
                {
                    playfield[y+1][x] = 0;
                    playfield [y+2][x] = 0;
                    playfield[y][x-1] = 1;
                    playfield[y+1][x+1] = 1;
                    draw();
                    return true;
                }
                // обратная кочерга-трамплин
                if (y > 0 &&
                    playfield[y+1][x+1] != 2 && playfield[y-1][x+2] != 2 &&
                    playfield[y][x+1] === 1 && playfield[y][x+2] && playfield[y+1][x+2] ===1)
                {
                    playfield[y][x] = 0;
                    playfield[y][x+1] = 0;
                    playfield[y-1][x+2] = 1;
                    playfield[y+1][x+1] = 1;
                    draw();
                    return true;
                }
                //лежащая пирамида
                if (y < playfield.length-2 && playfield[y+2][x] != 2 &&
                    playfield[y+1][x-1] === 1 && playfield[y+1][x] === 1 && playfield[y+1][x+1] === 1)
                {
                    playfield[y+1][x-1] = 0;
                    playfield[y+2][x] = 1;
                    draw();
                    return true;
                }
                // пирамида вправо
                if (x > 0 && playfield[y+1][x-1] != 2 &&
                    playfield[y+1][x] === 1 && playfield[y+1][x+1] === 1 && playfield[y+2][x] === 1)
                {
                    playfield[y][x] = 0;
                    playfield[y+1][x-1] = 1;
                    draw();
                    return true;
                }
                // пирамида стоящая
                if (y > 0 && playfield[y-1][x+1] != 2 &&
                    playfield[y][x+1] === 1 && playfield[y+1][x+1] === 1 && playfield[y][x+2] === 1)
                {
                    playfield[y][x+2] = 0;
                    playfield[y-1][x+1] = 1;
                }
                // пирамида влево
                if (x < playfield[y].length-1 && playfield[y+1][x+1] != 2 &&
                    playfield[y+1][x-1] === 1 && playfield[y+1][x] === 1 && playfield[y+2][x] === 1)
                {
                    playfield[y+2][x] = 0;
                    playfield[y+1][x+1] = 1;
                }
                //===============================================
                // молния S
                if (y < playfield.length-1 &&
                    playfield[y][x-1] != 2 && playfield[y+2][x] != 2 &&
                    playfield[y][x+1] === 1 && playfield[y+1][x-1] === 1 && playfield[y+1][x] === 1)
                {
                    playfield[y][x] = 0;
                    playfield[y][x+1] = 0;
                    playfield[y][x-1] = 1;
                    playfield[y+2][x] = 1;
                    draw();
                    return true;
                }
                // стоящая молния
                if (x < playfield[y].length-2 &&
                    playfield[y+1][x+2] != 2 && playfield[y+2][x] != 2 &&
                    playfield[y+1][x] === 1 && playfield[y+1][x+1] === 1 && playfield[y+2][x+1] === 1)
                {
                    playfield[y][x] = 0;
                    playfield[y+1][x] = 0;
                    playfield[y+1][x+2] = 1;
                    playfield[y+2][x] = 1;
                    draw();
                    return true;
                }
                //============================================
                // обратная молния Z
                if (playfield[y][x+1] === 1 && playfield[y+1][x+1] === 1 && playfield[y+1][x+2] === 1)
                {
                    playfield[y][x] = 0;
                    playfield[y+1][x+2] = 0;
                    playfield[y+1][x] = 1;
                    playfield[y+2][x] = 1;
                }
                // стоящая обратная молния
                if (x < playfield[y].length-1 &&
                    playfield[y+2][x] != 2 && playfield[y+2][x+1] != 2 &&
                    playfield[y+1][x] === 1 && playfield[y+1][x-1] === 1 && playfield[y+2][x-1])
                {
                    playfield[y][x] = 0;
                    playfield[y+2][x-1] = 0;
                    playfield[y+2][x] = 1;
                    playfield[y+2][x+1] = 1;
                    draw();
                    return true;
                }
                return true;
            }
        }
    }
}