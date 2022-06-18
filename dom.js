//console.log("Hello");
//console.dir("document");
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);
               ///GET ELEMENT BY ID//
               //GET ELEMENT BY ID//
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent="Hello";//changes the text content of id=header-title from Item lister to Hello
//headerTitle.innerText="Hi";
//headerTitle.innerHTML="<h3>Hello</h3>";
//headerTitle.style.borderTop="dotted 5px black";//styling using id
//headerTitle.style.borderBottom="dotted 5px black";//styling using id
//var header=document.getElementById('main-header');
//header.style.borderBottom="solid 5px black";//using header id to style the border

                 //////GET ELEMENTS BY CLASSNAME/////

//var items=document.getElementsByClassName("list-group-item");
//console.log(items);
//items[1].innerHTML="Hi";
//console.log(items[0]);
//items[0].textContent="Hello 1";
//items[0].style.fontWeight="bold";
//items[0].style.backgroundColor="magenta";

//items.style.backgroundColor="grey";//It will not work because it is an array so we need to loop through it//
//Instead Use This
//for(var i=0;i<items.length;i++)
//{
    //items[i].style.backgroundColor="grey";//This will work
//}

               /////GET ELEMENTS BY TAG NAME/////

//var li=document.getElementsByTagName("li");
//console.log(li);
//li[1].innerHTML="Hi";
//console.log(li[0]);
//li[0].textContent="Hello 1";
//li[0].style.fontWeight="bold";
//li[0].style.backgroundColor="magenta";

//items.style.backgroundColor="grey";//It will not work because it is an array so we need to loop through it//
//Instead Use This
//for(var i=0;i<li.length;i++)
//{
  //  li[i].style.backgroundColor="grey";//This will work
//}

                /////QUERYSELECTOR/////
//we can select id,class,tag etc...////It will select the 1st among many//
//var header = document.querySelector("#main-header");
//header.style.borderBottom="dotted 5px black";
//var input = document.querySelector("input");
//input.value="Hello World";//We have many input tag but it will take the 1st one//

//var submit=document.querySelector('input[type="Submit"]');
//submit.value="SEND";
 
//var item=document.querySelector('.list-group-item');
//item.style.color="red";

//var lastItem=document.querySelector(".list-group-item:last-child");
//lastItem.style.color= "blue"; 

//var secondItem=document.querySelector(".list-group-item:nth-child(2)");
//secondItem.style.color= "coral";

               /////QUERYSELECTOR/////
//var titles = document.querySelectorAll(".title");
//console.log(titles);
//titles[0].textContent="Hello";
//titles[1].textContent="Listttt";

//var odd=document.querySelectorAll("li:nth-child(odd)");
//for(var i=0;i<odd.length;i++)     /*This will set all odd list item
//                                       to grey */
//{                                 
    //odd[i].style.backgroundColor="grey";
//}
////FIRST VIDEO ENDS HERE////


             /////////TRAVERSING THROUGH DOM//////////
             ///////2nd VIDEO////////
//var itemList=document.querySelector("#items"); 
           ///PARENTNODE/////
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = "magenta";//Bacground of parentnode will
//                                                    will get changed 
//console.log(itemList.parentNode.parentNode);

         /////PARENTELEMENT/////
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor="black";
//console.log(itemList.parentElement.parentElement.parentElement);
         /////CHILDNODE(AVOID)////
//console.log(itemList.childNodes);//Avoid using it instead use children
//                              Find out the diff. b/w children and childNodes?
        ////children/////
//console.log(itemList.children);
//console.log(itemList.children[0]);
//itemList.children[1].style.backgroundColor="green";
           /////FIRSTCHILD(AVOID)//////
//console.log(itemList.firstChild);//Insted use (firstelementchild)
         ////firstElementChild/////
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.style.backgroundColor="yellow";
//itemList.firstElementChild.innerText="hi";
//itemList.firstElementChild.textContent="hello"; 
          ////lastChild/////
//console.log(itemList.lastChild);
         ////lastElementChild/////
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent="Hello 4";


          /////nextSibling/////
//console.log(itemList.nextSibling);
         ////nextElementSibling////
//console.log(itemList.nextElementSibling);
         ///previousSibling////
//console.log(itemList.previousSibling);
        ////previousElementSibling////
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color="green";

          ////createElement////
//create a div   
//let newDiv=document.createElement("div");
   //ADD className
//newDiv.className="hello";
   //ADD id
//newDiv.id="hello1";
   //ADD attr
//newDiv.setAttribute("title","Hello Div");
  //create text node
//let newDivText=document.createTextNode("Hello World");
   //Add text to div
//newDiv.appendChild(newDivText);

//let container=document.querySelector("header.container");
//let h1=document.querySelector("header  h1");
//console.log(newDiv);
//container.insertBefore(newDiv,h1);

        /////2nd VIDEO ENDS HERE/////

        ////3rd VIDEO STARTS HERE///
        ///Events///
//var button=document.getElementById('button').addEventListener('click',butttonClick);

//function butttonClick()
//{
    //console.log('Button Clicked');
    //document.getElementById('header-title').textContent='changed';
    //document.querySelector('#main').style.backgroundColor='grey';
//}
                  ////Event parameter////
////e.target///
//function butttonClick(e)
//{
    //console.log(e.target);
    //console.log(e.target.id);
    //console.log(e.target.className);
    //console.log(e.target.classList);
    //let output=document.getElementById("output");
    //output.innerHTML="<h3>"+e.target.id+"</h3";
    //console.log(e.type);//(Tells about the of addEventListner)

    /////e.clientX///
    //console.log(e.clientX);//returns the horizontal coordinate (according to the client area) of the mouse pointer when a mouse event was triggered
    //console.log(e.clientY);//returns the vertical coordinate

    //console.log(e.offsetX);//returns the horizontal coordinate w.r.t element they are inside of.
    //console.log(e.offsetY);//return the vertical coordinate w.r.t element they are inside of.
    ///diff b/w e.clientX & e.offsetX???
    
    //console.log(e.altKey);true==when U press the key then click Click Here
    //console.log(e.shiftKey);
    //console.log(e.ctrlKey);
//}

       ////Mouse Events////

 //let button=document.getElementById("button");

 //button.addEventListener("click",runEvent);
//button.addEventListener("dblclick",runEvent);
//button.addEventListener("mousedown",runEvent);
//button.addEventListener("mouseup",runEvent);

//let box=document.getElementById("box");

//box.addEventListener("mouseenter",runEvent);//whenever mouse enter in the area of id=box,it will increase the value of mouseenter through function//
//box.addEventListener("mouseleave",runEvent); 
//box.addEventListener("mouseover",runEvent);//It works when we hover on elements under the id="box" Whereas mouseenter don't work while hovering
//box.addEventListener("mouseout",runEvent);
//box.addEventListener("mousemove",runEvent);

//function runEvent(e)//this function is for both button&box:use one at a time
 //{
 //  console.log("Event Type : "+e.type);

   //output.innerHTML='<h3>MouseX:'+e.offsetX+'</h3><h3> MouseY:'+e.offsetY+'</h3>';
//box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"; 
//} 

        ////keyboard and input Events////

 //let itemInput=document.querySelector('input[type="text"]');
 //let form=document.querySelector("form");

 //itemInput.addEventListener("keydown",runEvent);//This event will work when we type key's in add item segment//
 //itemInput.addEventListener("focus",runEvent);
 //itemInput.addEventListener("blur",runEvent);

 //function runEvent(e)
 //{
    // console.log("Event Type:"+e.type);

     //console.log(e.target.value);
 //}