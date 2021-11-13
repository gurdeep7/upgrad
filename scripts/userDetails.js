var details = JSON.parse(localStorage.getItem("User_data"))
if(details.name != undefined){
    let username = document.getElementById("username")
    username.textContent = details.name
}