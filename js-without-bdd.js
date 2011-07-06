function Person(name, sex, digits) {
    this.name = name || 'Kunta Kinte';
    this.sex = sex || 'male';
    this.digits = digits || '666-555-1212'
    this.phoneBook = [];
};

Person.prototype.isSameSexAs = function(person) {
    return person.sex === this.sex;
}
Person.prototype.isInterestedIn = function(person) {
    return person.isSameSexAs(this) === false;
}
Person.prototype.addToPhoneBook = function(phoneNumber) {
    this.phoneBook.push(phoneNumber);
}
Person.prototype.giveDigits = function(person, digits) {
    person.addToPhoneBook(digits);
    console.log(this.name + ' gave digits of ' + digits + ' to ' + person.name);
};
Person.prototype.askForPhoneNumber = function(person) {
    if (person.isInterestedIn(this)){
        person.giveDigits(this, person.digits);
    }else {
       console.log('Please... ' + this.name + ' Step off');
    }
};
function Dude(name, digits) {
    Person.call(this, name || 'The Dude', 'male', digits);
};
Dude.prototype = new Person();

function Chick(name, digits) {
    Person.call(this, name || 'The Chick', 'female', digits);
}
Chick.prototype = new Person();

function NotInterestedChick(name, digits) {
    Chick.call(this, name || 'The Not Interested Chick',  digits);
}
NotInterestedChick.prototype = new Chick();
NotInterestedChick.prototype.isInterestedIn = function(person) {
    return false;
}

console.log('good scenario');
var pimp = new Dude('super slick flava');
var flyGirl = new Chick('Electra','904-214-4360');
pimp.askForPhoneNumber(flyGirl);

console.log('bad scenario');
var notInterested = new NotInterestedChick('Gurtrude', '904-215-4360');

pimp.askForPhoneNumber(notInterested);
