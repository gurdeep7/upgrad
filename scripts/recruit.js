console.log("test")
async function sendData(event) {
 event.preventDefault()
  //getting data from the form
  let full_name = document.getElementById("name").value;
  let designation = document.getElementById("designation").value;
  let company = document.getElementById("company").value;
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("tel").value;
  if(full_name.length < 3){
    alert("Enter Valid Name")
    return;
  }
  if(designation.length < 3){
    alert("Enter Valid Company Name")
    return;
  }
  if(company.length < 3){
    alert("Enter Valid Comany")
    return
  }
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) {


  } else {
    alert("Invalid Email")
    return;
  }

  //geting which of checkbox is checked
  let checkbox = [];
  if (document.getElementById("DataS").checked) {
    checkbox.push("Data Science, Big Data, AI / ML, Analytics");
  } else if (document.getElementById("ProductM").checked) {
    checkbox.push("Product Management");
  } else if (document.getElementById("DigitalM").checked) {
    checkbox.push("Digital Marketing");
  } else if (document.getElementById("HR").checked) {
    checkbox.push("Management - HR, Marketing), Finance, Operations Etc");
  } else if (document.getElementById("softwareD").checked) {
    checkbox.push("Software Development");
  }
  //object for loacl sorage
  var data = {
    full_name,
    designation,
    company,
    email,
    phone_number,
    checkbox
  };
  //prepare data to send to local storage
var raw = JSON.stringify(data)
  //send data to local storage
var sendRequest = await fetch("https://upgrad78.herokuapp.com/recruits",
{'method': "POST",
"headers":{"Content-Type": "application/json"},
"body":raw
}
)
var recievedData = await sendRequest.json()

if(recievedData != undefined){
  console.log(recievedData)
  alert("Email send to you for further details")
}
}

