const findTheOldest = function(people) {
  let oldestPerson = people[0];
  for (const person of people) {
    if (personAge(person) >= personAge(oldestPerson)) {
      oldestPerson = person;
    }
  };
  return oldestPerson;
};

const personAge = function(person) {
  const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
  return yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
