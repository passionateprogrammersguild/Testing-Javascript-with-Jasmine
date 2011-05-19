function Person(name, sex) {
    this.name= name;
    this.sex = sex;
    this.interestedIn = {};
}

Person.prototype.receivePhoneNumber = function(phoneNumber) {
   
}

Person.prototype.isInterestedIn = function(person) {
    this.interestedIn[person] = true;
}

Person.prototype.askForPhoneNumber = function(person) {
  if (person.interestedIn[this]) {
      this.receivePhoneNumber();
  }
}

function Dude(name) {
    Person.call(this, name, 'male');
}

Dude.prototype = new Person();

function Chick(name) {
    Person.call(this, name, 'female');
}

Chick.prototype = new Person();
