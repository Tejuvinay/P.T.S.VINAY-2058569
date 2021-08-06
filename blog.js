
function addblog() {
  
   

        var title = document.getElementsByName("title").value;
        var article = document.getElementsByName("article").value;
        var url = document.getElementsByName("url").value;


        document.getElementById("dd").innerHTML = b;

   var myPTag1 = document.createElement("p");
        var myPTag2 = document.createElement("p");
        var myPTag3 = document.createElement("p");
    

        var myPTag1Content = document.createTextNode(title);
        var myPTag2Content = document.createTextNode(article);
        var myPTag3Content = document.createTextNode(url);
          
        myPTag1.appendChild(myPTag1Content);
        myPTag2.appendChild(myPTag2Content);
        myPTag3.appendChild(myPTag3Content);

   
        document.getElementById("title").appendChild(myPTag);
        document.getElementById("art").appendChild(myPTag);
        document.getElementById("ur").appendChild(myPTag);
}
