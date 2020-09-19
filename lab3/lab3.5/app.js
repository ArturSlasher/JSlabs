let worker = {
    name: "Ivan", 
    unit: '208', 
    phone: '00', 
    salary: '24000',
}

worker.showData = showData;
function showData(){
    console.log('Worker\nName:', this.name, 
    '\nUnit:', this.unit, 
    '\nPhone:', this.phone, 
    '\nSalary:', this.salary);
}

worker.showData();