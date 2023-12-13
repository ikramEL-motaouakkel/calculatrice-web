function validateForm(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email=document.getElementById("email").value;


    if (name==""){ 
        alert("Name is required"); 
    return false; 
    }
    if(age == ""){ 
        alert("Age is required"); 
        return false;
    } 

   if(age < 1){
    alert("Age must not be zero or less than zero"); 
    return false;
     }
    if (address ==""){
    alert("Address is required"); 
    return false;
    }

    

     if (!email.includes ("@")) {
    alert("Invalid email address"); 
    return false;
    }
    return true;
}


function showData(){ 
    var peopleList;
if(localStorage.getItem ("peopleList") == null) { 
    peopleList=[]; 
}
else{
peopleList = JSON.parse(localStorage.getItem("peopleList"));
}


var html="";
peopleList.forEach(function (element, projetCRUD){
html += "<tr>";
html += "<td>" + element.name + "</td>";
 html += "<td>" + element.age + "</td>";
html += "<td>" + element.address + "</td>";
html += "<td>" + element.email + "</td>";
html +=
'<td><button onclick="deleteData('+
projetCRUD +
')" class="btn btn-danger">Delete</button> <button onclick="updateData('+
projetCRUD +
')" class="btn btn-warning m-2">Edit</button></td>'; 
html += "</tr>";
});
document.querySelector("#projetCRUDTable tbody").innerHTML =
html;
} 

//loads all data when document or page loaded
document.onload=showData();

//fontion to add data
function AddData(){
    // if form is validate
    if(validateForm() == true){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value; 
    var email = document.getElementById("email").value;

    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
    } else {
    peopleList = JSON.parse(localStorage.getItem ("peopleList"));
    }
    peopleList.push({
    name:name, 
    age: age,
    address: address,
    email: email,
    });

    localStorage.setItem("peopleList", JSON.stringify
    (peopleList));
    showData();
    document.getElementById("name").value ="";
    document.getElementById("age").value="";
    document.getElementById("address").value="";
    document.getElementById("email").value = "";
    
    
    }
}
// function to delete Data from local storage 
 function deleteData(projetCRUD) {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) { 
        peopleList = [];
    } else {
    peopleList = JSON.parse(localStorage.getItem
    ("peopleList"));
    } 
    peopleList.splice (projetCRUD, 1);
    localStorage.setItem("peopleList", JSON.stringify
    (peopleList));
    showData();
    }

    // function to update/edit data in local storage
function updateData(projetCRUD) {
    // Submit button will hide and Update button will show for updating of Data in local storage
    document.getElementById("Submit").style.display = "none"; 
    document.getElementById("Update").style.display = "block";
    var peopleList;
    if (localStorage.getItem("peopleList")== null) { peopleList = [];
    } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    document.getElementById("name").valuepeopleList[projetCRUD].name;
    document.getElementById("age").value=peopleList[projetCRUD].age;
    document.getElementById("adress").value=peopleList[projetCRUD].adress;
    document.getElementById("email").value=peopleList[projetCRUD].email;

    
    document.querySelector("#Update").onclick= function(){ 
        if(validateForm() == true){
           peopleList[projetCRUD].name = document.getElementById("name").value;
           peopleList[projetCRUD].age = document.getElementById("age"). value;
           peopleList[projetCRUD].address = document.getElementById("address").value;
    
           peopleList[projetCRUD].email = document.getElementById ("email").value;
           localStorage.setItem("peopleList", JSON.stringify (peopleList));
           showData();
              document.getElementById("name").value = "";
              document.getElementById("age").value = "";
              document.getElementById("adress").value = "";
              document.getElementById("email").value = "";
       

              document.getElementById("Submit").style.display = "block"; 
              document.getElementById("Update").style.display = "none";
        }
    }
}
