let form=document.getElementById("addForm");
let itemList=document.getElementById("items");
let filter=document.getElementById("filter");
////FORM SUBMIT EVENT////
form.addEventListener("submit",addItem);

///DELETE event///
itemList.addEventListener("click",removeItem);

///Filter event
filter.addEventListener("keyup",filteritems);

//Add item
function addItem(e)
{
   e.preventDefault();
   
   //GET ELEMENT VALUE//
   let newItem = document.getElementById("item").value;

   //CREATE NEW li ELEMENT//
   let li = document.createElement("li");
    //ADD CLASS
    li.className="list-group-item";
    //ADD TEXT NODE WITH INPUT VALUE//
    //let add=document.createTextNode(newItem);
    li.appendChild(document.createTextNode(newItem));

    //CREATE del button ELEMENT//
    let del=document.createElement("button");
    //ADD CLASS
    del.className="btn btn-danger btn-sm float-right delete";
    //ADD TEXT NODE//
    del.appendChild(document.createTextNode("x"));
    //APPEND del TO li
    li.appendChild(del);
    //APPEND li TO lIST
    itemList.appendChild(li);
}

///REMOVE ITEM

function removeItem(e)
{
    if(e.target.classList.contains("delete"))
    {
       if(confirm("Are You Sure ?"))
       {
           let li=e.target.parentElement;
           itemList.removeChild(li); 
       } 
    }
}

///filter item
function filteritems(e)
{
   //convert text to lowertext
   let text=e.target.value.toLowerCase();
   //GET li's
   let items=itemList.getElementsByTagName("li");
   //Convert to an array
   Array.from(items).forEach(function(item)
   {
      let itemName=item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text)!=-1)
       {
         item.style.display="block";  
       } 
       else{
           item.style.display="none";
       }
   })
}