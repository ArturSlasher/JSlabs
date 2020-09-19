function Worker(name, phone, unit, salary){
    this.name = name;
    this.phone = phone;
    this.unit = unit;
    this.salary = salary;
}

Worker.prototype.adress = "street 18";
let worker1 = new Worker('Ivan', '00', '5', '24000', 'street 3');
console.log(worker1, worker1.adress);