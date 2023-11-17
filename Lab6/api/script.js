function getData(){
    const promise = new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api')
        .then((response) => {
            resolve(response.json());
        })
    })

    promise.then((value) => {
        console.log(value);
        var data = JSON.parse(value);
            console.log(data.results);

    })
}

getData();