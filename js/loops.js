var students = [
	'eric', 'salena', 'andrew', 'gregory', 'astraea', 'lia'
];

/* simple for loop */
for ( var i = 0; i < students.length; i++ ) {
	console.log(students[i]);
}

/* simple while loop */
var student;
while ( student = students.pop() ) {
	console.log(student);
}

/* do...while */
students = [
	'eric', 'salena', 'andrew', 'gregory', 'astraea', 'lia'
];
var student_id = 0;
do {
	console.log('Student #' + student_id + ' - ' + student);
	student_id++;
} while ( student = students.pop());

/* for in */
var studentInfo = {
	'name': 'Eric Harrison',
	'grade': 95,
	'absent_days': 4,
	'major': 'Computer Science',
};
for ( var key in studentInfo ) {
	console.log(key + ' - ' + studentInfo[key]);
}

/* Array.forEach -- version 1 */
students = [
	'eric', 'salena', 'andrew', 'gregory', 'astraea', 'lia'
];

function showStudents(person) {
	console.log(person);
}
students.forEach( showStudents );

/* Array.forEach -- version 2*/
students.forEach(function(person) { console.log(person) } );

/* recursive */
var studentList = [
	'eric', 'salena', 'andrew', 'gregory', 'astraea', 'lia'
];
function listStudents(studentList) {
	if ( studentList.length ) {
		console.log(studentList.pop());
		listStudents(studentList);
	}
}
listStudents(studentList);

/* string loops - for*/
var alphabet = 'abcdefghijklmnOpqrstuvwxyz';
for ( var i = 0; i < alphabet.length; i++ ) {
	if ( alphabet.charAt(i) != 'O' ) {
		console.log(alphabet.charAt(i));
	}
}
for ( var i = 0; i < alphabet.length; i++ ) {
	
	if ( alphabet.charAt(i) == 'O' ) {
		continue;
	}
	
	if ( alphabet.charAt(i) == 't' ) {
		break;
	}

	console.log(alphabet.charAt(i));
}

/* for...in */
for ( var letter in alphabet ) {
	console.log(letter);
}

/* for...of */
// for...of gives us the VALUE of the array element */
for ( var letter of alphabet ) {
	console.log(letter);
}

var students = [
	'eric', 'salena', 'andrew', 'gregory', 'astraea', 'lia'
];
for ( var student of students ) {
	console.log(student);
}

/* loops can be nested */
var students = {
	'eric': {
		'age': 37,
		'major': 'CS',
		'grades': [90, 100, 82, 50, 65]
	},
	'steve': {
		'age': 87,
		'major': 'CS',
		'grades': [90, 100, 37, 50]
	}
};
function calcGrade(total,numberOfScores) {
	return total / numberOfScores;
}

function calculateFinalGrade(grades) {
	var totalGrade = 0;
	for ( var i = 0; i < grades.length; i++ ) {
		totalGrade = totalGrade + grades[i];
	}

	return calcGrade(totalGrade, grades.length);
}
for ( var student in students ) {
	console.log(student);

	for ( var info in students[student] ) {
		if ( typeof students[student][info] == 'object' ) {
			
			console.log('\n\t\t Final Grade Average: ' + calculateFinalGrade(students[student][info]));

		} else { 
			console.log('\t' + info + ' = ' + students[student][info]);
		}
	}
}
