const findTheOldest = function (people) {
  const date = new Date();
  let updatedPeople = people.map((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = date.getFullYear();
      return person;
    } else {
      return person;
    }
  });
  let sortedPeople = updatedPeople.sort((person1, person2) =>
    person1.yearOfDeath - person1.yearOfBirth >
    person2.yearOfDeath - person2.yearOfBirth
      ? -1
      : 1
  );
  return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
