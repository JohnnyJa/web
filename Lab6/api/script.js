function getData(){
    const promise = new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api')
        .then((response) => {
            resolve(response.json());
        })
    })

    parent = document.getElementById("result");

    child = document.createElement("div");

    promise.then((value) => {
        console.log(value);
        img = document.createElement("img");
        img.src = value.results[0].picture.large;
        img.width = 250;
        img.height = 250;
        child.appendChild(img);

        city = document.createElement("p");
        city.appendChild(document.createTextNode("City: "+value.results[0].location.city));
        child.appendChild(city);    

        uname = document.createElement("p");
        uname.appendChild(document.createTextNode(
            "Name: "+ value.results[0].name.title + 
            " " + value.results[0].name.first + 
            " " + value.results[0].name.last));
        child.appendChild(uname); 

        cell = document.createElement("p");
        cell.appendChild(document.createTextNode(
            "Cell: "+ value.results[0].cell));
        child.appendChild(cell);

        phone = document.createElement("p");
        phone.appendChild(document.createTextNode(
            "Phone: "+ value.results[0].phone));
        child.appendChild(phone);
        parent.appendChild(child);
    })  
}
