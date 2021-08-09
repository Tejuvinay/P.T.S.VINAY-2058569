
 


function setvalue() {

    var cnam = document.getElementById("cname").value;
    var pnam = document.getElementById("pname").value;
    var bud = document.getElementById("budget").value;

    let emp = new pm(cnam, pnam, bud);
    obj.push(emp);
    console.log(obj);
    localStorage.setItem("empobj", JSON.stringify(obj))


}


let obj = [];
function reset() {
  
    document.getElementById("cname").value = ""
    document.getElementById("pname").value = ""
    document.getElementById("budget").value = ""
}
class pm {
    constructor(clientname, projectname, budget) {
        this.clientname = clientname;
        this.projectname = projectname;
        this.budget = budget;

    }

}
