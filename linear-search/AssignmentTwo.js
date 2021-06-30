class Grade {
    constructor(start, to, gradeName) {
        this.start = start
        this.to = to
        this.gradeName = gradeName
    }
}

let grades = [
    new Grade(90, 100, "A"),
    new Grade(80, 89, "B"),
    new Grade(70, 79, "C"),
    new Grade(60, 69, "D"),
    new Grade(0, 59, "E")
]

class Student {
    constructor(name, marks) {
        this.name = name
        this.marks = marks
    }
}

students = [
    new Student("Dennis", 44),
    new Student("Ken", 90),
    new Student("Derick", 32),
    new Student("James", 67),
    new Student("Joyce", 76),
    new Student("Linet", 29),
    new Student("Ben", 96),
    new Student("Jane", 82)
]

function super_students(grades, students) {
    function getGrade(marks) {
        for (grade of grades) {
            if (marks >= grade.start && marks <= grade.to) {
                return grade.gradeName
            }
        }
    }

    const ABStudents = []
    for (student of students) {
        let studentGrade = getGrade(student.marks)
        if (studentGrade === "A" || studentGrade === "B") {
            ABStudents.push(student.name)
        }
    }

    return ABStudents;
}

console.log(super_students(grades, students))