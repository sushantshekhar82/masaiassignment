document.querySelector("form").addEventListener("submit",myfun);
let data=JSON.parse(localStorage.getItem("objdata"))||[];
displaydata(data);


// window.addEventListener("load",function()
// {
//     displaydata(data);

// });
function myfun(event)
{
    event.preventDefault();
    let obj=
    {title:document.querySelector("#title").value,
      link:document.querySelector("#link").value,
      difficulty:document.querySelector("#difficulty").value,
    
};
data.push(obj);
displaydata(data);
localStorage.setItem("objdata",JSON.stringify(data));

}

function displaydata(data){
    document.querySelector("tbody").innerHTML="";
    data.map(function (elem){
        
        let tr=document.createElement("tr");

        let d1=document.createElement("td");
        d1.innerText=elem.title;
        let d2=document.createElement("td");
        d2.innerText=elem.link;
        let d3=document.createElement("td");
        d3.innerText=elem.difficulty;
        let d4=document.createElement("td");
        if(elem.difficulty=="Easy")
        {
            d4.innerText="No";

        }
        else{
            d4.innerText="Yes";
        }
       tr.append(d1,d2,d3,d4);
       document.querySelector("tbody").append(tr);

    });
}
