function Tour(days, men, tariff){
    this.days = days;
    this.men = men;
    this.tariff = tariff;
    this.calcPrice = function(){
        return this.days*this.men*this.tariff;
    }
}

let turkeyTour = new Tour('14', '30', '2400');
console.log("Price is", turkeyTour.calcPrice());