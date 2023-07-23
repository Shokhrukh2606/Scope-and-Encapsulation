Array.prototype.bubbleSort = function () {
    var i, j;
    var len = this.length;

    var isSwapped = false;

    for (i = 0; i < len; i++) {

        isSwapped = false;

        for (j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                var temp = this[j]
                this[j] = this[j + 1];
                this[j + 1] = temp;
                isSwapped = true;
            }
        }

        // IF no two elements were swapped
        // by inner loop, then break 
        if (!isSwapped) {
            break;
        }
    }


    return this;
}
String.prototype.filter = function (param) {
    if (!this.includes(param)) {
        return this;
    } else {
        const words = this.split(" ")
        return words.filter(w => w != param).join(" ")
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Teacher extends Person {
    constructor(name) {
        super(name);
    }
    teach(course) {
        return `${this.name} is now teaching ${course}`
    }
}


function OCPerson(name) {
    this.name = name;
}
function OCTeacher(name) {
    OCPerson.call(this, name); // call super constructor.
}
OCTeacher.prototype = Object.create(OCPerson.prototype, {
    constructor: {
        value: OCPerson,
        enumerable: false,
        writable: true,
        configurable: true,
    },
    teach: {
        value: function (course) {
            return `${this.name} is now teaching ${course}`
        }
    }
});

class FPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`)
    }
    salute() {
        console.log(`Good morning!, and in case I dont see you, good afternoon, good evening and good night!`)
    }
}

class Student extends FPerson {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    greeting() {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`)
    }
}
class Professor extends FPerson {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }
    salute() {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`)
    }
}

function OCFPerson(name, age) {
    this.name = name;
    this.age = age;
    greeting = () => {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`)
    }
    salute = () => {
        console.log(`Good morning!, and in case I dont see you, good afternoon, good evening and good night!`)
    }
}
function OCProfessor(name, age, department) {
    OCFPerson.call(this, name, age); // call super constructor.
    this.department = department
}
OCProfessor.prototype = Object.create(OCFPerson.prototype, {
    constructor: {
        value: OCFPerson,
        enumerable: false,
        writable: true,
        configurable: true,
    },
    salute: {
        value: function () {
            console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`)
        }
    }
});
function OCStudent(name, age, department) {
    OCFPerson.call(this, name, age); // call super constructor.
    this.department = department
}
OCStudent.prototype = Object.create(OCFPerson.prototype, {
    constructor: {
        value: OCFPerson,
        enumerable: false,
        writable: true,
        configurable: true,
    },
    greeting: {
        value: function () {
            console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`)

        }
    }
});
console.log("Exercise 1: ")
console.log("This weather is s good!".filter("not"))

console.log("Exercise 2: ")
console.log([6, 4, 0, 3, -2, 1].bubbleSort())

console.log("Exercise 3: ")
const teacher = new Teacher("Peterson")
console.log(teacher.teach("Operating Systems"))
const teacher2 = new OCTeacher("John")
console.log(teacher2.teach("Calculus"))

console.log("Exercise 4: ")
const student = new Student("Jamie", 24, "Computer Science")
const professor = new Professor("Adam", 45, "Finance")
student.greeting()
professor.greeting()
student.salute()
professor.salute()
console.log("Using Object create:")
const student2 = new Student("Richard", 24, "Medical Science")
const professor2 = new Professor("Paul", 45, "Finance")
student2.greeting()
professor2.greeting()
student2.salute()
professor2.salute()
