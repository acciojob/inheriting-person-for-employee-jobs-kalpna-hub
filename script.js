class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}

	get name(){
		return this._name;
	}

	set age(age){
		this._age = age;
	}
}

class Student extends Person {
	study(){
		console.log(this._name + " is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this._name + " is teaching");
	}
}
//Example usuage
const person = new Person("John", 25);
console.log(person.name);
person.age = 30;

const student = new Student("Jane", 20);
console.log(student.name); //jane
person.study(); //jane is studing

const teacher = new Teacher("Bob", 35);
console.log(teacher.name); //Bob
person.teach(); //Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;