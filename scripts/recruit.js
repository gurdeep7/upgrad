console.log("test")
function sendData() {
 
  //getting data from the form
  let Full_Name = document.getElementById("name").value;
  let designation = document.getElementById("designation").value;
  let company = document.getElementById("company").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("tel").value;
  if(Full_Name.length < 3){
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
  let data = {
    Full_Name: Full_Name,
    designation: designation,
    company: company,
    email: email,
    phone: phone,
    checkbox: checkbox,
  };
  //prepare data to send to local storage
  let dataToSend = JSON.stringify(data);
  //send data to local storage
  localStorage.setItem("data", dataToSend);
}

