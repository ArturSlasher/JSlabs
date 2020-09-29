userStr = prompt('Enter phone', '+7(900)123-45-67');

let isReg1 = userStr.match(/^8900\d{7}/);
let isReg2 = userStr.match(/^8\s900\s\d{3}(\s\d\d){2}/);
let isReg3 = userStr.match(/^8\s\(900\)\s\d{3}(\-\d\d){2}/);
let isReg4 = userStr.match(/^8\(900\)\d{3}(\-\d\d){2}/);
let isReg5 = userStr.match(/^\+7900\d{7}/);
let isReg6 = userStr.match(/^\+7\s900\s\d{3}(\s\d\d){2}/);
let isReg7 = userStr.match(/\+7\s\(900\)\s\d{3}(\-\d\d){2}/);
let isReg8 = userStr.match(/\+7\(900\)\d{3}(\-\d\d){2}/);
let isPhone = isReg1 || isReg2 || isReg3 || isReg4 || isReg5 || isReg6 || isReg7 || isReg8;

if (isPhone){
    console.log("this is a correct phone number");
}
else{
    console.log('this is not a correct phone number');
}