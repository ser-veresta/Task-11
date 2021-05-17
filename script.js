let btn = document.querySelector('#submit');

btn.onclick = update;

function update(){
    let table = [];
    let warning = document.querySelectorAll('.warning');
    let count = 0;

    let firstname = document.querySelector('#firstname');
    if(textValidate(firstname)){
        table.push(firstname.value);
        warning[count++].hidden = true;
    }
    else{
        warning[count++].hidden = false;
    }

    let lastname = document.querySelector('#lastname');
    if(textValidate(lastname)){
        table.push(lastname.value);
        warning[count++].hidden = true;
    }
    else{
        warning[count++].hidden = false;
    }

    let address = document.querySelector('#address');
    if(textValidate(address)){
        table.push(address.value);
        warning[count++].hidden = true;
    }
    else{
        warning[count++].hidden = false;
    }

    let pincode = document.querySelector('#pincode');
    if(textValidate(pincode)){
        table.push(pincode.value);
        warning[count++].hidden = true;
    }
    else{
        warning[count++].hidden = false;
    }

    let gender = document.querySelectorAll("input[name='gender']");
    if(radioValidate(gender)){
        gender.forEach(item => {
            if(item.checked){
                table.push(item.value);
            }
        });
        warning[count++].hidden = true;
    }
    else{
        warning[count++].hidden = false;
    }

    let food = document.querySelectorAll("input[name='food']");
    if(moreThanTwoValidate(food)){
        let string = '';
        food.forEach(item => {
            if(item.checked){
                string += item.value + ' ';
            }
        });
        let temp = string.split(' ');
        temp.pop();
        string = temp.join(',');
        table.push(string);
        warning[count++].hidden = true;
    }
    else{
        warning[count++].hidden = false;
    }

    let state = document.querySelector('#state');
    if(textValidate(state)){
        table.push(state.value);
        warning[count++].hidden = true;
    }
    else{
        warning[count++].hidden = false;
    }

    let country = document.querySelector('#country');
    if(textValidate(country)){
        table.push(country.value);
        warning[count++].hidden = true;
    }
    else{
        warning[count++].hidden = false;
    }

    if(table.length === 8){
        let element = createTabelElement(table);
        document.querySelector('#table').append(element);
        document.querySelector('form').reset();
        count = 0;
    }
}


function textValidate(x){
    return !(x.value === '');
}

function radioValidate(arr){
    return (arr[0].checked || arr[1].checked || arr[2].checked);
}

function moreThanTwoValidate(arr){
    let value = [...arr].reduce((sum,item) => sum + item.checked,0);
    return (value >= 2);
}

function createTabelElement(arr){
    let row = document.createElement('tr');
    arr.forEach(item => {
        let td = document.createElement('td');
        td.innerHTML = item;
        row.append(td);
    })
    return row;
}

