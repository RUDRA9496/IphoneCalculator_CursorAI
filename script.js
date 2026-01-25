function handlecalculation(value) {
    if (value === "AC") {
        document.getElementById('outputLabel').value = '';
    }
    else if (value === "="){
        document.getElementById('outputLabel').value = eval(document.getElementById('outputLabel').value);
    }
    else {
        if (document.getElementById('outputLabel').value === "0") {
            document.getElementById('outputLabel').value = value;
        }
        else {
            document.getElementById('outputLabel').value += value;
        }
    }
}