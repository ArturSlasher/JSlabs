let s = 'abcdafhhahaurjoafna';
console.log(s);
for (i = 0; i < s.length-1; i++){
    if(s[i] == s[s.length-1]){
        console.log(i);
    }
}