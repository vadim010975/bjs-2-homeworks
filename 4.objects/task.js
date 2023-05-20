function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty('marks') || !this.marks.length) {
    return 0;
  }
  return this.marks.reduce((acc, item, idx, arr) => {
    if (idx === arr.length - 1) {
      return parseFloat(((acc + item) / arr.length).toFixed(1));
    }
    return acc + item;
  }, 0);
}

Student.prototype.exclude = function (reason) {
  if (!this.hasOwnProperty('excluded')) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}
