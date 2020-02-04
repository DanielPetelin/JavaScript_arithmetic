if (document.getElementById('num1').value == '') {
    document.getElementById('num1').value = '0';
};

if (document.getElementById('num2').value == '') {
    document.getElementById('num2').value = '0';
};

function clearInputs() {
    document.getElementById('num1').value = '0';
    document.getElementById('num2').value = '0';
    document.getElementById('out').innerHTML = 'Результат:';
}

function plus() {
    if (document.getElementById('num1').value == '') {
        document.getElementById('num1').value = '0';
    };
    
    if (document.getElementById('num2').value == '') {
        document.getElementById('num2').value = '0';
    };

    var num1, num2, result;
        num1 = document.getElementById('num1').value;
        num1 = parseInt(num1);

        num2 = document.getElementById('num2').value;
        num2 = parseInt(num2);

        result = num1 + num2 || num2 + num1;

    document.getElementById('out').innerHTML = result;
};

function minus() {
    if (document.getElementById('num1').value == '') {
        document.getElementById('num1').value = '0';
    };
    
    if (document.getElementById('num2').value == '') {
        document.getElementById('num2').value = '0';
    };

    var num1, num2, result;
        num1 = document.getElementById('num1').value;
        num1 = parseInt(num1);

        num2 = document.getElementById('num2').value;
        num2 = parseInt(num2);

        result = num1 - num2;

    document.getElementById('out').innerHTML = result;
};

function composition() {
    if (document.getElementById('num1').value == '') {
        document.getElementById('num1').value = '0';
    };
    
    if (document.getElementById('num2').value == '') {
        document.getElementById('num2').value = '0';
    };

    var num1, num2, result;
        num1 = document.getElementById('num1').value;
        num1 = parseInt(num1);

        num2 = document.getElementById('num2').value;
        num2 = parseInt(num2);

        result = num1 * num2 || num2 * num1;

    document.getElementById('out').innerHTML = result;
};

function division() {
    if (document.getElementById('num1').value == '') {
        document.getElementById('num1').value = '0';
    };
    
    if (document.getElementById('num2').value == '') {
        document.getElementById('num2').value = '0';
    };

    var num1, num2, result;
        num1 = document.getElementById('num1').value;
        num1 = parseInt(num1);

        num2 = document.getElementById('num2').value;
        num2 = parseInt(num2);

        result = num1 / num2;
        
    if (document.getElementById('num1').value == 0 && document.getElementById('num1').value == 0) {
        result = 'error';
    };   

    document.getElementById('out').innerHTML = result;
};

function divisionNotNum() {
    if (document.getElementById('num1').value == '') {
        document.getElementById('num1').value = '0';
    };
    
    if (document.getElementById('num2').value == '') {
        document.getElementById('num2').value = '0';
    };

    var num1, num2, result;
        num1 = document.getElementById('num1').value;
        num1 = parseInt(num1);

        num2 = document.getElementById('num2').value;
        num2 = parseInt(num2);

        result = num1 / num2;
        result.toFixed(1);

    if (document.getElementById('num1').value == 0 && document.getElementById('num1').value == 0) {
        result = 'error';
    };    

    document.getElementById('out').innerHTML = result.toFixed(1);
};

function degree() {
    if (document.getElementById('num1').value == '') {
        document.getElementById('num1').value = '0';
    };
    
    if (document.getElementById('num2').value == '') {
        document.getElementById('num2').value = '0';
    };

    var num1 = document.getElementById('num1').value;
        num1 = parseInt(num1);

    var num2 = document.getElementById('num2').value;
        num2 = parseInt(num2);

        result = Math.pow(num1, num2);

    if (document.getElementById('num1').value == 0) {
        result = 0;
    };    

    document.getElementById('out').innerHTML = result;
};