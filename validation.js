function validateform() {
    var name = document.getElementById("name").value.trim();
    var deliveryInstructions = document.getElementById("inst").value.trim();
    var selectedRadio = document.querySelector('input[name="topping"]:checked'); 
    var isChecked1 = document.getElementById("check1").checked;
    var isChecked2 = document.getElementById("check2").checked;

    
    if (name === "") {
        alert("Name should not be empty.");
        return false;
    }
    if (!selectedRadio) {
        alert("Please select a pizza topping.");
        return false;
    }
    if (deliveryInstructions === "") {
        alert("Delivery instructions should not be empty.");
        return false;
    }

    
    if (!isChecked1 && !isChecked2) {
        alert("Please select at least one optional extra.");
        return false;
    }

    return true;
}
