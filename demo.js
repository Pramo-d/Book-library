// let headerTitle=document.getElementById('header-title');

//  headerTitle.textContent='hello';
//  headerTitle.innerText='good bye';
//  //headerTitle.style.border='solid #000';
//  let newHeader=document.getElementById('main-header');
//  newHeader.style.borderBottom='solod #000';
let items=document.getElementsByClassName('list-group-item');
//items[2].style.background='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
    items[i].style.backgroundColor='grey'; 
}
 items[0].style.fontWeight='bold';
 items[1].style.fontWeight='bold';
 items[2].style.fontWeight='bold';
 items[3].style.fontWeight='bold';

 let grpitems=document.getElementsById('items');
 grpitems.style.fontWeight='bold';

 //getelementbytag
  let value=document.getElementsByTagName('li');
 for(let i=0;i<value.length;i++){
value[i].style.backgroundColor='grey';
 }