let text = getText();
let reg = /ик(\s|(\W\s))/g;
document.write(text.replace(reg, ' '));

function getText(){
    return 'домик, столик ключик икра абрикос';
}