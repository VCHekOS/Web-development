function mapSearch(){
    let street = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    document.getElementById("mapFrame").src="https://www.google.com/maps?q="+street+city+"&output=embed";
}