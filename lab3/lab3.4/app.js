String.prototype.level;
String.prototype.printMe = function printMe(){
    this.level = prompt('Enter level', '1');
    return this.level;
}

let s = new String;
s.level = s.printMe();
document.write(`<h${s.level}>Ура!</h${s.level}`);