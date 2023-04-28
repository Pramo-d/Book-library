 //Traverse the Dom

 var itemList= document.querySelector('#items');
 //parentNode
 // console.log(itemList.parentNode);

//1.parentElement
 console.log(itemList.parentElement);

//2.lastElementchild
 console.log(itemList.lastElementChild);

 //3.lastchild
 console.log(itemList.lastChild);

 //4.createchild
 
 let newchild=document.createElement('div');
 console.log(newchild);
 //add class & id
 newchild.className='hello';
 newchild.id='childId';
  

  //5.firstelementchild
  console.log(itemList.firstElementChild);
  itemList.firstElementChild.style.backgroundColor='red';

  //6.firstchild
  console.log(itemList.firstChild);

  //7.nextsibling
  console.log(itemList.nextSibling);

  //8.nextelementsibling
  console.log(itemList.nextElementSibling);

  //9.previoussibling
  console.log(itemList.previousSibling);

  //10.previouselementsibling
console.log(itemList.previousElementSibling);

//11.createElement
let newElement=document.createElement('newdiv');
console.log(newElement);
newElement.className='Mmeber';
newElement.id='420';
//setattribute
newElement.setAttribute('inpute','hello newmember');
 let eletext=document.createTextNode('new Member');
 newElement.appendChild(eletext);
  
 var container=document.querySelector('header .container');
 var h1=document.querySelector('header h1');
   container.insertBefore(newElement,h1);
 

