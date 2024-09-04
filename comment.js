var post= document.getElementById("btn");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("inputedId").value;
    var name=document.getElementById("nameId").value;
    
    var pa = document.createElement("p");
    var nPa= document.createElement("p");
    

    var textName= document.createTextNode(name);
    var text = document.createTextNode(commentBoxValue);


    nPa.appendChild(textName);
    pa.appendChild(text);
  


    document.getElementById("section").appendChild(pa);
    document.getElementById("section").appendChild(nPa);


//  const mystyle=`
//     border-bottom: 1px solid black;
//     `
//     const demo=document.getElementById("section");
//     demo.style=mystyle;  
});



// document.getElementById("btn").addEventListener("click", function(){
//     var divElement = document.createElement("Div");
//     divElement.id = "divID";
//     var createdDiv= document.createElement("Div").style.cssText = `
// font-size: 19px;
// box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
// margin: 2% auto;
// text-align: center;
// background-color: rgb(255, 255, 255);
// padding: 15px 20px;
// max-width: 100%;
// font-size: small;
//  border-radius: 10px; width: 700px;
// height: 100%;
// margin: 2% auto;
// padding: 15px;
// background-color: #FFFFFF;
// -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
// box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
// `;
//    document.getElementById("divID").appendChild(createdDiv);
// })















































