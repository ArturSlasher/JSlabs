function Worker(name, phone, unit, salary){
    this.name = name;
    this.phone = phone;
    this.unit = unit;
    this.salary = salary;
}

let worker1 = new Worker('Ivan', '00', '5', '24000');
console.log(worker1);