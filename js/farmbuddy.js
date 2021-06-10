//6) Write a message to the console that says "Hello world!"
console.log('Hello world!');

//7) Write a warning to the console that says "This is a warning!"
console.warn('This is a warning!');

//8) Write an error to the console that says "Error! System critical!"
console.error('Error! System critical!');

//9) Declare a variable named var1
var var1;

//10) Assign a string data type value to var1
var1 = 'Eric';

//11) Write the value of var1 to the console
console.log(var1);

//12) Write a blank line to the console. (I showed one way to do this in class, there are some others feel free to use those instead if you'd like, practice your google-fu)
console.log('');

//13) Define and assign a variable named var2, the value should be of the number type
var var2 = 5;

//14) Evaluate var1 + var2 and write the result to the console (You can store the result in a variable and write it to the console, or pass the expression into a method that will remain un-named)
console.log(var1 + var2);

//15) Could you guess the result? Write your guess in an inline comment next to where you're writing it to the console
// yes eric5

//16) Add in a multi line comment and write some of the types we covered in class today on individual lines
/* 
	string
	number
	null
	undefined
	NaN
*/

// 17) Write the type of the var1 variable to the console
// 18) Can you guess the result? Write your guess in an inline comment next to where you're writing to the console.
console.log( typeof var1 ); //string 

// 19) Declare a variable named var3 and assign it the string value text
var var3 = var1 + var2;

// 20) Write the value of var3 to the console
console.log(var3);

// 20) Reassign var3 to a boolean value
var3 = true;

// 21) Write the value of var3 to the console
console.log(var3);

// 22) Reassign var1 to the number 5
var1 = 5;

// 23) Reassign var2 to the string 5
var2 = "5";

// 24) In any order or in however many lines you'd like, parse var2 from a string to a number and add it to var1, write your result to the console.
console.log( 
	parseInt(var2) + var1
);




























// do nothing yet.
var string = 'er';
var bool = true;
var first = '';

var neg = -1;
var zero = 0;
// a list of ages for me to use in my loops below
var agesArray = [ 1, 10, 20];
var checkForUpdates = false;
var birthday = new Date('1984-05-09 12:00:00');
var month = birthday.getMonth();
var date  = birthday.getDate();

// IIFE immediately invoked function expression

for ( var i = 0; )

(
	function neat() {
		var whatever = 'hello';
		console.log('neat was called');

		return true;
	}
)();


(
	function () {
		console.log('hello');
	}
)();



var theName = function(parameterToCover) {
	// anything in here
};

var globalScope = 'eric';
function nameofthefunction() {
	// named function

	var myVariable = 'steve';

	console.log(globalScope);

	globalScope = 'lia';

}

console.log(globalScope);

















/* fun with functions */
var outsideVariable = 'Eric';
var function1 = function(myNameIsCool) {
	var insideVariable = 'Lia';
	console.log(outsideVariable + ' ' + insideVariable);

	var mathResult = 10 + 10;
	return mathResult;
};

function alertMe() { alert('hello') }

//setTimeout(function () { alert('anonymous function') }, 5000);

function functionStructure(arg1, arg2, arg3) {
	var mathResult = 0;

	// error trapping and exits
	if ( ! arg3 ) {
		return false;
	}

	if ( arg2 == 10 ) {
		return false;
	}

	// do some cool math stuff
	mathResult = arg1 * arg2 + arg3;

	return mathResult;
}

var countem = function(current) {
	if ( current < 10 ) {
		console.log(current);
		countem(current + 1);
		
	}
};

var makeBlue = function(el) {
	el.style.backgroundColor = 'blue';
}

var getEl = function(id) {
	if ( ! arguments.length ) {
		console.error("TypeError: Failed to execute 'getElementById' on 'Document': 1 argument required, but only 0 present.");
		return false;
	}

	var el = document.getElementById(id);
	el.style.backgroundColor = 'yellow';

	return el;
};


var hello2 = function( firstStudent, secondStudent ) {

	if ( arguments.length < 2 ) {
		console.warn('You must provide 2 students');
		return false;
	}

	console.log(firstStudent);
	console.log(secondStudent);

	return true;

	console.log(arguments);

};

function hello(name) {
	if ( name ) {
		console.log('hello' + ' ' + name);
	} else {
		console.log('hello nameless');
	}

	return 'function ran';
}

function fakeSquareThis(num, num2) {
	return num * num2 ** 2 * ( 10 + 15);
}


var didRun = hello('eric');

if ( hello('eric') ) {
	console.log('this has happened');
}



/*
whatever.com/farm 
whatever.com/user 
whatever.com/pictures 
*/
/*
var path = 'farm';

switch (path) {
	case 'farm':
		// load the farm template
		break;
	case 'user':
		// load user template
		break;
	default: 
		// load the 404 page
}

var age = true;
switch (age) {
	case 21:
		console.log('drinking!');
	case 25:	
	case 35:

		console.log('cheaper car insurance');
		console.log('surprise party');

		break;
	case 40:
		console.log('gray hairs');
		break;
	case 65:
		console.log('free coffee!');
		break;
	case 100: 
		console.log('painful joints');
		break;
	default:
		console.log('switches are just another year too');
		break;
}


if ( age == 35 ) {
	console.log('cheaper car insurance!');
	console.log('surprise!');
} else if ( age == 40 ) {
	console.log('grey hairs!');
} else if ( age == 65 ) {
	console.log('social security and cheap coffee');
} else if ( age == 100 ) {
	console.log('painful joints');
} else {
	console.log('just another year');
}

/*
if ( first ) {
	console.log('the name is: ' + first);
} else {
	console.log('the variable first has nothing in it');
}

if ( true || false ) {
	console.log('or');
}

if ( true && true ) {
	console.log('and');
}

if ( true && ( false ||  ! false ) ) {
	console.log('true and true or false');
}

if ( 5 * 10 ) {

}

if ( ! true ) {
	console.log('this will never run');
} else {
	console.log('not true');
}

5 * 10 * ( 5 + 6 * (13 + 6) )

if ( (new Date()).getMonth() == month || date == (new Date()).getDate() ) {
	console.log('Happy birthday');
} else {
	console.log('No birthday for you!');
}
/*
if ( first = 'Eric' ) {
	console.log('true');
} else {
	console.log('false');
}


if ( bool ) {
	console.log('Yes, this is true!');

	if ( age = 37 ) {
		console.log('He has the right age!');

		if ( arr.length ) {
			console.log('And the array is full');
		}

	} else {
		console.log('He is too old.');
	}


} else if ( first == 'Eric' )  {
	console.log('No, but his name is Eric');

	if ( age == 37 ) {
		console.log('He has the right age!');

		if ( arr.length ) {
			console.log('And the array is full');
		}

	} else {
		console.log('He is too old.');
	}

} else if ( first == 'Astraea' ) { 
	console.log('No, her name is Astraea');
} else if ( age == 37 ) {
	console.warn('The age is 37!');
} else {
	console.error('Nothing was true');
}

*/