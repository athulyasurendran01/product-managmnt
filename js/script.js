console.log("Working")

(function () {
    fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=100', {
        method: "POST",
        body: jsonData
    })
        .then(response => response.json())
        .then(data => {
            let result = ''
            for (let index = 0; index < data.length; index++) {
                result+=`<div class="col-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="${data[index].url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${data[index].title}</p>
                    </div>
                </div>
            </div>`
            }

            document.getElementById("product_list").innerHTML = result
        }
        );
}())


const employees = [{
    id: 1,
    name: "Test",
    email: "t@gmail.com",
    score: 20
},
{
    id: 2,
    name: "Test One",
    email: "t1@gmail.com",
    score: 10
},
{
    id: 3,
    name: "Test Two",
    email: "t2@gmail.com",
    score: 25
}]

let result = '';
// for(let i=0; i<employees.length; i++){
//     if(employee[i].score > 20){
//         result+=`<li style="color: red">${employee[i].name}</li>`      // result = result+''
//     }else{
//         result+=`<li style="color: green">${employee[i].name}</li>`      // result = result+''
//     }
// }

employees.map(employee => {
    if (employee.score > 20) {
        return result += `<li style="color: red">${employee.name}</li>`      // result = result+''
    } else {
        return result += `<li style="color: green">${employee.name}</li>`      // result = result+''
    }
})

document.getElementById("employeeData").innerHTML = result



function clickMe() {
    alert("Hi.....")
}

function add(input, input1) {
    console.log(input + input1)

    // clickMe()
}

function submitHandler() {
    let username = document.getElementById("uname").value
    console.log(username)



}