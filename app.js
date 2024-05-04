

document.getElementById('calculateButton').addEventListener('click', function() {
    var birthdateInput = document.getElementById('birthdate').value;
    var birthdate = new Date(birthdateInput);
    var today = new Date();

    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = "Your age is: " + age;
});