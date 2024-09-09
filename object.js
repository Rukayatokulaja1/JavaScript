let alarms = {
    weekendAlarm: "no alarm needed", 
    weekdayAlarm: "get up at 7am"   
};

let day = "Saturday";

let alarm;

if (day === "Saturday" || day === "Sunday") {
    alarm = alarms.weekendAlarm;  // Set alarm to weekend alarm
} else {
    alarm = alarms.weekdayAlarm;  // Set alarm to weekday alarm
}

console.log(alarm); 


let person = {
    name: "John", 
    age: 25,
    
    sayHi: function() {
        return `Hello, my name is ${this.name}`;  // 'this' refers to the current object
    }
};

console.log(person.sayHi());



let pet = {
    name: "Buddy",          
    typeOfPet: "Dog",       
    age: 3,                 
    colour: "Brown",       

    eat: function() {
        return `${this.name} is eating`; 
    },

    drink: function() {
        return `${this.name} is drinking`;  
    }
};

console.log(pet.eat());    
console.log(pet.drink());  




const coffeeShop = {
    branch: 'Downtown',
    drinks: {
        coffee: 3,
        tea: 2.5,
        smoothie: 4
    },
    food: {
        sandwich: 5,
        salad: 6,
        pastry: 2.5
    },
    drinksOrdered: function(...orderedDrinks) {
        let totalCost = 0;
        let orderList = orderedDrinks.map(drink => {
            totalCost += this.drinks[drink];
            return `${drink}: $${this.drinks[drink]}`;
        }).join(', ');

        return `Your drinks order is: ${orderList}. Total cost: $${totalCost.toFixed(2)}`;
    },
    foodOrdered: function(...orderedFood) {
        let totalCost = 0;
        let orderList = orderedFood.map(food => {
            totalCost += this.food[food];
            return `${food}: $${this.food[food]}`;
        }).join(', ');

        return `Your food order is: ${orderList}. Total cost: $${totalCost.toFixed(2)}`;
    }
};

console.log(coffeeShop.drinksOrdered('coffee', 'smoothie'));
console.log(coffeeShop.foodOrdered('sandwich', 'pastry'));

