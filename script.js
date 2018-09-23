const calculate = () => {
    let bill = document.getElementById('bill').value;
    let service = document.getElementById('service').value;
    let people = document.getElementById('people').value;
    let tip;

    if (bill === '0' || people === '0' || bill === '' || people === '') {
        alert('Please enter valid numbers :)');
        return;
    }

    if (people === 1) {
        tip = Math.round((bill * service / people) * 100) / 100;
        document.getElementById('tip').innerHTML = tip + '$.';
    } else {
        tip = Math.round((bill * service / people) * 100) / 100;
        document.getElementById('tip').innerHTML = tip + '$ each.';
    }
}
