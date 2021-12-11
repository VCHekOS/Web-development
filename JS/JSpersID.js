function recognition(){

    let userInput = prompt("Type your Id code: ");
    console.log("code: " + userInput);

    let Error = "";

    let day = parseInt(userInput.slice(0, 2));
    console.log("day: " + day);

    let month = parseInt(userInput.slice(2, 4));
    console.log("month: " + month);

    let year = parseInt(userInput.slice(4, 6));
    let century = userInput.slice(6, 7);
    switch (century){
        case "+":
            century = 1800;
            break;
        case "-":
            century = 1900;
            break;
        case "A":
            century = 2000;
            break;
    }
    let fullyear = year + century;
    console.log("year: " + fullyear);
    
    let g = parseInt(userInput.slice(7, 10));
    let evod = "";
	if (g % 2 == 1)
		evod = "Male";
	else
		evod = "Female";
    console.log("Sex: " + evod);

    let check = userInput.slice(10, 11);
    console.log("Check = " + check);

    Error = checkDayMonth(day, month, fullyear);

    let control = controlCharacter(userInput);
    console.log("control = " + control);
    if (check != control) Error += "control character is wrong, ";
    Error = Error.slice(0, Error.length - 2) + "!";

    let age = ageCalculator(day, month, fullyear);

    let output = "Your identity code: " + userInput + "\n" + "Is valid: No, ";
    if(Error == "!"){
        output = "Your identity code: " + userInput + "\n" + "Is valid: Yes" + "\n" + "Sex: " + evod + "\n" + "Age: " + age + " years";
    }else{
        output += Error;
    };

    alert(output);

}

function controlCharacter(input){
    let control = (parseInt(input.slice(0, 6) + input.slice(7, 10)))%31;
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
    control = values[control];
    return control;
}

function checkDayMonth(day, month, fullyear){
    let Error = "";
    let day_in_year = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day_in_yearLeap = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];    
    let whichYear = "";
    if (fullyear % 4 == 0) {        
        whichYear = "Leap year";
        if (day > day_in_yearLeap[month] || day < 1){
            Error += "day is wrong, "
        };
    }
    else {        
        whichYear = "Common year";
        if (day > day_in_year[month] || day < 1){
            Error += "day is wrong, "
        };    
    };
    console.log("Which year? " + whichYear);

    if (month > 12 || month < 1) Error += "month is wrong, ";
    return Error;
}

function ageCalculator(day, month, fullyear){

    let date = new Date()
    let currentDay = date.getDay();
    let currentMonth = date.getMonth()+1;
    let currentYear = date.getFullYear();    
    let bday = new Date(fullyear, month, day);
    let age = (date.getTime() - bday.getTime())/(3600*1000*24);
    
    let ageYear = div(age, 365.25);
    //let ageMonth = (age%365.25)*12;
    //let ageDay = (ageMonth - parseInt(ageMonth))*30;
    //ageMonth = parseInt(ageMonth);
    console.log("Age: " + ageYear);
    return ageYear;
    
    /*let ageYear = Math.floor(age/365.25)
    console.log("age year = " + ageYear);
    //365.25 , 10, 33, 30, 0


    let bday = month + "/" + day + "/" + year;
    let currentDate = currentMonth + "/" + currentDay + "/" + currentYear;
    let diffDays = getNumberOfDays(bday, currentDate);
    let dayBetween = div(diffDays, 365.25);

*/
}

function div(val, by){
    return (val - val % by) / by;
}

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}


function creation(){
    let userInput = prompt("Type your Id code: ");
    console.log("code: " + userInput);

    let day = parseInt(userInput.slice(0, 2));
    console.log("day: " + day);

    let month = parseInt(userInput.slice(2, 4));
    console.log("month: " + month);

    let year = parseInt(userInput.slice(4, 6));
    let century = userInput.slice(6, 7);
    switch (century){
        case "+":
            century = 1800;
            break;
        case "-":
            century = 1900;
            break;
        case "A":
            century = 2000;
            break;
    }
    let fullyear = year + century;
    console.log("year: " + fullyear);

    let Error = "Invalid input: " + checkDayMonth(day, month, fullyear);

    let output = "";
    if (Error == "Invalid input: "){
        output = "Your input: " + userInput + "\n" + "Full personal identity code: " + userInput + controlCharacter(userInput);
    }else{
        output = "Your input: " + userInput + "\n" + Error.slice(0, Error.length - 2) + "!";
    }
        
    alert(output);
}

