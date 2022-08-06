//Write a “person” class to hold all the details.
console.log("-------------person details problem------");
class Person {
  constructor(firstName, lastName, age, education, skills, country, state) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.education = education;
    this.skills = skills;
    this.state = state;
    this.country = country;
  }
}
const person1 = new Person(
  "Dhanesh",
  "M",
  "25",
  "Engineering",
  "HTML,CSS,JS",
  "Tamilnadu",
  "India"
);
console.log(person1);
