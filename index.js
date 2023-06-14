// //ques1
// function counter() {
// 	var counter = 0;

// 	function IncreaseCounter() {
// 		return (counter += 1);
// 	}

// 	return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

//ques2
 let count = 0;
 (function () {
 	if (count === 0) {
 		let count = 1;
 		console.log(count); // What is logged?
 	}
 	console.log(count); // What is logged?
 })();

//ques3
 for (var i = 0; i < 3; i++) {
 	setTimeout(function log() {
 		console.log(i); // What is logged?
 	}, 1000);
 }

//ques4
function outerFunction(length) {
	function innerFunction(breadth) {
		console.log(`Area of rectangle:  ${length * breadth}`);
	}
	innerFunction(3);
}
outerFunction(2);

//ques5
function outerFunc(num) {
	console.log(`before inner function is called value is : ${num}`);
	function innerFunc() {
		num++;
		console.log(`after inner function is called value is : ${num}`);
	}
	innerFunc();
}
outerFunc(1);

// //ques6
// var a = 12;
// (function () {
// 	alert(a);
// })();

// //ques7
// var ques7 = 10;
// var x = (function () {
// 	var ques7 = 12;
// 	return function () {
// 		alert(ques7);
// 	};
// })();
// x();

//ques8
 var globalVar = 'xyz';

 (function outerFunc(outerArg) {
 	var outerVar = 'a';

 	(function innerFunc(innerArg) {
 		var innerVar = 'b';

 		console.log(
 			'outerArg = ' +
 				outerArg +
 				'\n' +
 				'innerArg = ' +
 				innerArg +
 				'\n' +
 				'outerVar = ' +
 				outerVar +
 				'\n' +
 				'innerVar = ' +
 				innerVar +
 				'\n' +
 				'globalVar = ' +
 				globalVar
		);
 	})(456);
 })(123);
