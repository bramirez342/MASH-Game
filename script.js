// New function called random_number that takes one parameter, num (or a number)
function random_number(num) {
	// Get a random number between 0 and a passed-in number
	var num = num || 4  // If no number passed in, default to 4
	return Math.floor(Math.random() * num); // Round the answer down (floor) of a random number between 0 and 1 and multiply it by a number. Then return a value and exit the function.
}

// Get a random answer from the available answers in a given category
function get_answer(category) { 
	var choices = [];  // A blank array to hold the user provided answer  
	var selector = 'input[name="' + category + '[]"]';  // Build a CSS selector for the blanks in our passed in category 
	var inputs = document.querySelectorAll(selector);  // Get all of the inputs that match our selector 
	var answer;

	for (var i = 0; i < inputs.length; i++) {  // Begin a for loop that will run through the code. i++ = add one to the counter which is "i"
		answer = inputs[i].value;  // Get the input with the index value of the counter and get the value ie. if they typed in dog, you get back "dog" 
		if (answer !== '') {  // If answer doesn't equal a blank... !== means doesn't equal 
			choices.push(answer); //...add it to the end of the list 
		}
	}
	return choices[random_number(choices.length)];   // Pick and return a random choice choice.length = number of answers the user provided in that category 
}

// Function to find the spans that need to be filled
function fill_in_answers(answers) {
	var answer_1 = document.querySelector('#answer_1');
	var answer_2 = document.querySelector('#answer_2');
	var answer_3 = document.querySelector('#answer_3');
	var answer_4 = document.querySelector('#answer_4');
	
	// Fill them with the provided answers
	answer_1.innerText = answers['answer_1'];
	answer_2.innerText = answers['answer_2'];
	answer_3.innerText = answers['answer_3'];
	answer_4.innerText = answers['answer_4'];
	answer_1.innerHTML = answers.answer_1;
	answer_2.innerHTML = answers.answer_2;  // Change the content of the element in the HTML doc with the id "career" to the "career" value in answers 
	answer_3.innerHTML = answers.answer_3;
	answer_4.innerHTML = answers.answer_4;
}

// Button submit handler function
function handle_submission(evt) {
	evt.preventDefault();  // Stop the form from reloading the page 
	evt.stopPropagation();  // Stop the form from reloading the page
	
	// Build up our answers object
	var answers = {
	    'answer_1': get_answer('answer_1'),
	    'answer_2': get_answer('answer_2'),
	    'answer_3': get_answer('answer_3'),
	    'answer_4': get_answer('answer_4')
	}
	// Fill in the answers
	fill_in_answers(answers);
	
	var answer_div = document.querySelector('#answers');
	answer_div.classList.add('show');
}

// Find the form on the page and attach a handler for when it's submitted
var form = document.querySelector('#mash');

// Anytime the form is submitted, we want to call the function handle_submission 
form.addEventListener('submit', handle_submission);