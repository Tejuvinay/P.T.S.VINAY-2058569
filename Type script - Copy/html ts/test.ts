class cm {
    public name: any;
    public price: any;
    constructor(name:any,price:any) {
        this.name = name;
        this.price = price;
       

    }

}



function setitem() {

    var cname = Document.getElementById("nam:any");HTMLElement;
    var pcar = Document.getElementById("pri:any"); HTMLElement;
    

    let emp = new cm("nam:any", "pri:any");
    let obj: any[] = [];
    obj.push(emp);
    console.log(obj);
    localStorage.setItem("empobj", JSON.stringify(obj))
    let val: any = obj.length;



}

function getitem() {

    let total = 0;

    let empparse:any = localStorage.getItem("empobj");
    let empjason:any = JSON.parse('empparse:any');

    console.log(empjason);
    var tableContent = ""
    var startTable = "<table border=2><tr><th> Name</th><th>Price</th></tr>"
    for (let i = 0; i < empjason.length; i++) {

        tableContent += "<tr><td>" + empjason[i].name + "</td><td>" + empjason[i].price +"</td></tr>";
        total = total + parseInt(empjason[i].budget);
    }
    var tot = " Total budget for above table :" + total;
    var endTable = "</table>"
    tableContent = startTable + tableContent + endTable + tot
     var main = (document.getElementById('main') = tableContent);
    if (main) main.reset();



    function newFun(): any {
        return "main:any";
    }
}



