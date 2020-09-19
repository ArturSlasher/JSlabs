let s = 'abacdababafhhahaurjoafna';
let sum = 0;
console.log(s);
for (i = 0; i < s.length-1; i++){
    if(s[i] == 'a')
    if(s[i+1]=='b')
    if(s[i+2]=='a')
        ++sum;
}
console.log(sum);