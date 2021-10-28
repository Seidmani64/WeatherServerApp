console.log('Archivo javascript cliente cargado!')



function getCity() {
    fetch('http://localhost:3000/weather?address=' + document.getElementById("city").value).then((response) => {
    response.json().then((data) => {
        if(data.data == undefined || data.data == "undefined"){
            document.getElementById("results").innerHTML = "City not found."
        }
        else {
            document.getElementById("results").innerHTML = data.data
        }
    })
})
}