
 
 function addData() 
 {
    
	
	var cname = document.getElementById("cname").value;
    var pname = document.getElementById("pname").value;
    var bget = document.getElementById("bget").value;
    var myPTag = document.createElement("p");
	
    var myPTagContent = document.createTextNode("cname is "+cname+" pname is "+pname+" bget is "+bget);
     myPTag.appendChild(myPTagContent);
   
  document.getElementById("a3").appendChild(myPTag);
 
    let xyz = localStorage.getItem("obj1");
 
    let empJson = JSON.parse(empObj)
    console.log("empobj "+empJson);
   
    console.log("Value from local storage is "+xyz);
}

function Fun() {
  document.getElementById("myForm").reset();
}

function displayData()
{
    let empObj = sessionStorage.getItem("empObj");
    let empJson = JSON.parse(empObj);
    var tableContent=""
    var startTable ="<table border=1 class='table'><tr><th>Id</th><th>Name</th><th>Age</th></tr>"
    
    tableContent ="<tr><td>"+empJson.cname+"</td><td>"+empJson.pname+"</td><td>"+empJson.bget+"</td></tr>"
    
    var endTable="</table>"
    tableContent = startTable+tableContent+endTable
    document.getElementById("a2").innerHTML=tableContent;
}



