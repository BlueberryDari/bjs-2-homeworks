function Student(name, gender, age) {}

const studentFirst = Object.create(Student) {
	name: "",
	gender: "",
	age: Infinity,
	marks: []
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if ('marks' in this) {
		this.marks.push(...marksToAdd);
	}

}

Student.prototype.getAverage = function() {
	let marksSum = 0;

	if (!this.marks || this.marks == null) {
		return 0;
	}

	for (let mark in Student.marks) {
		marksSum += mark;
	}
	return marksSum / Student.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)