function demoexternalalert(){
    alert("External Alert")
}
function demoexternalconfirm(){
    if(confirm("Are You Sure?")){
        alert("Yes");
    }
    else{
        alert("No");
    }
}
function demoexternalprompt(){
    var Fname= prompt("Enter FirstName Here...");
    var Lname= prompt("Enter LastName here...");
    alert(Fname + " " + Lname);
}