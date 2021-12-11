function numberL(){

	let str = prompt("Type word: ");
	let strWork = str.toLowerCase();
	let strLen = str.length;
	let counter = 0;
	for (let i = 0; i<=strLen;i++){
		if(strWork[i] == "l"){
			counter++;
			console.log(counter);
		};
	};
	let output = str + " contains \"L\" " + counter + " times";
	if (counter == 0){
		output = str + " doesn't contain \"L\"";
	};
	alert(output);

}

function numberVowels(){
	let str = prompt("Type word: ");
	let strWork = str.toLowerCase();
	let strLen = str.length;
	let counter = 0;
	let vowels = ["a", "e", "i", "o", "u", "y", "å", "ä", "ö"];

	for (let i = 0; i<=strLen;i++){
		for (let k = 0; k<vowels.length; k++){
			if(strWork[i] == vowels[k]){
				counter++;
				console.log(counter);
			};
		};
	};

	let output = str + " contains vowels " + counter + " times";
	if (counter == 0){
		output = str + " doesn't contain vowels";
	};
	alert(output);
}

function transform(){
	let str = prompt("Type word: ");
	let strWork = str.toLowerCase();
	let strLen = str.length;
	let newStr = "";
	let output = "";
	for (let i = strLen-1; i>=0;i--){
		newStr += strWork[i];
	};
	console.log(newStr);
	if (strWork == newStr){
		output = "palindrome";
	}else{
		output = "NOT palindrome";
	};
	alert(str + " is " + output + "!");

}