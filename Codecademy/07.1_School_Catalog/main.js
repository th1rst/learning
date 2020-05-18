class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this.level;
  }

  get numberOfStudents() {
    return this.numberOfStudents;
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }

  pickSubstituteTeacher(substituteTeachers) {
    return substituteTeachers[
      Math.floor(Math.random() * substituteTeachers.length)
    ];
  }

  set numberOfStudents(newNumber) {
    if (typeof newNumber === "number") {
      this._numberOfStudents = newNumber;
    } else {
      return "Invalid input: numberOfStudents must be set to a Number.";
    }
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

// <<<------ testing ------>>>
const teachers = [
  "Terry Crews",
  "Donald Duck",
  "Jim Carrey",
  "Bender The Robot",
  "Homer Simpson",
  "George Carlin",
];

const millerElementary = new PrimarySchool(
  "Miller Elementary School",
  364,
  "Students must be picked up by parents or grandparents"
);

millerElementary.quickFacts();
console.log(millerElementary.pickSubstituteTeacher(teachers));

const newStateHigh = new HighSchool("New State High", 765, [
  "Basketball",
  "Football",
  "Tennis",
  "Badminton",
  "Tae Kwon Do",
  "Krav Maga",
]);

console.log(newStateHigh._sportsTeams);
