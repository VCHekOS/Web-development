function factorial(){

	let userInput = parseInt(prompt("Type number: "));
	let output = 1;

	if (userInput < 0){
		output = "Invalid input!";
	}else if(userInput == 0){
		output = 1;
	}else{
		for (let i = 1; i<=userInput;i++){
			output *=i;
		};
	};

	alert("!" + userInput + " = " + output);

}

function addLoop(){

    let userInput = parseInt(prompt("Type number: "));
	let output = 0;

    for (let i = 1;i<=userInput;i++){

        output +=i

    };

	alert("Answer: " + output); 

}

function sumOdEv(){

    let userInput = parseInt(prompt("Type number: "));
	let sumOd = 0;
    let sumEv = 0;

    for (let i = 0;i<=userInput;i+=2){

        sumEv +=i

    };

    for (let i = 1;i<=userInput;i+=2){

        sumOd +=i

    };

	alert("Answer: Sum of Odd = " + sumOd + ", Sum of Even = " + sumEv); 

}