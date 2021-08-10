class simpblog{
    constructor(title,article,image){

    this.title=title;
    this.article=article;
    this.image=image;
    }
}
function addblog(){
    var x=document.getElementById("title").value;
    var y=document.getElementById("art").value;
    var z=document.getElementById("mis").value;
let obj=[];
let emp=new simpblog(x,y,z);
obj.push(emp);
localStorage.setItem("empobj",JSON.stringify(obj));
let empparse= localStorage.getItem("empobj");
let empjason=JSON.parse(empparse);

   
var tableContent=""

for(let i=0;i<empjason.length;i++){

    var myimgTag = document.createElement("img");
    myimgTag.src = empjason[i].image
    myimgTag.setAttribute("style","width:35%","height:25%"); 
     

    
tableContent +=""+empjason[i].title+" "+empjason[i].article+" "
}



tableContent = tableContent
var myPTagContent = document.createTextNode(tableContent);



document.getElementById("aaa").appendChild(myPTagContent);

document.getElementById("aaa").appendChild(myimgTag);



}