function validateForm() {
    let form = document.forms["input-form"];
    var errorMessages = document.querySelectorAll("label.wrong-input");
    var res = true;
    const fullnamePattern = /[\wа-яА-ЯІ]+\s[\wа-яА-ЯІ].[\wа-яА-ЯІ]./
    if (!fullnamePattern.test(form['fullname'].value)) {
        errorMessages[0].hidden = false;
        res = false;
    }
    else {
        errorMessages[0].hidden = true;
    }

    const idCardPattern = /[\wа-яА-ЯІ]{2}\s№\d{6}/
    if (!idCardPattern.test(form['id-card'].value)) {
        errorMessages[1].hidden = false;
        res = false;
    }
    else {
        errorMessages[1].hidden = true;
    }

    const facultyPattern = /[\wа-яА-ЯІ]{4}/
    if (!facultyPattern.test(form['faculty'].value)) {
        errorMessages[2].hidden = false;
        res = false;
    }
    else {
        errorMessages[2].hidden = true;
    }

    const birthDatePattern = /\d{2}.\d{2}.\d{4}/
    if (!birthDatePattern.test(form['birth-date'].value)) {
        errorMessages[3].hidden = false;
        res = false;
    }
    else {
        errorMessages[3].hidden = true;
    }

    const addressPattern = /м.\s[\wа-яА-ЯІ]+/
    if (!addressPattern.test(form['address'].value)) {
        errorMessages[4].hidden = false;
        res = false;
    }
    else {
        errorMessages[4].hidden = true;
    }

    if (res) {
        var info = document.getElementById("info");
        var oldUl = document.getElementById("info-ul");

        var ul = document.createElement("ul");
        ul.setAttribute("id", "info-ul");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("ПІБ: " + form['fullname'].value));
        ul.appendChild(li);
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Номер ID-картки: " + form['id-card'].value));
        ul.appendChild(li);
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Факультет: " + form['faculty'].value));
        ul.appendChild(li);
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Дата народження: " + form['birth-date'].value));
        ul.appendChild(li);
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Адреса: " + form['address'].value));
        ul.appendChild(li);
        info.replaceChild(ul, oldUl);
    }
    else
        return res;
}

function createTable() {
    var table = document.createElement("table");

    let tdArr = [];
    let trArr = [];
    let rows = 6;
    let columns = 6;

    // creating two-dimensional array
    for (let i = 0; i < rows; i++) {
        tdArr[i] = document.createElement('td');
        trArr[i] = [];
        for (let j = 0; j < columns; j++) {
            trArr[i][j] = document.createElement('tr');
            trArr[i][j].setAttribute("class", "tr");
            trArr[i][j].appendChild(document.createTextNode(rows * i + j + 1));
            tdArr[i].appendChild(trArr[i][j])
        }
        table.appendChild(tdArr[i]);
    }


    // trArr[0][3].setAttribute("data-jscolor", "{ onChange: 'update(this, this)' , preset: 'dark', closeButton: true, closeText: 'OK' }");  
    trArr[0][3].setAttribute("class", "variant-td");
    trArr[0][3].onmouseover = function () {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        trArr[0][3].style.backgroundColor = "#" + randomColor;
    }

    var hueb = new Huebee(trArr[0][3], {
        setText: false
    })

    trArr[0][3].ondblclick = function () {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);

        for (let i = 0; i < rows; i++) {
            trArr[i][rows - i - 1].style.backgroundColor = "#" + randomColor;

        }
    }

    var div = document.getElementById("table-div");
    div.appendChild(table);
}


createTable();
