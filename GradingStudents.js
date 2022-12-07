function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38 && (grades[i] % 5) >= 3) {
            grades[i] = grades[i] + (5 - (grades[i] % 5)); // Example: 73 + (5 - 73 % 5(result is 2)) = 73 + 2 = 75
        }
    }
    return grades;
}

gradingStudents([ 73, 67, 38, 33 ])

