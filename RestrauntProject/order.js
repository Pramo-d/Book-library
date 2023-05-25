let price = document.getElementById("price");
let dish = document.getElementById("dish");
let table = document.getElementById("Table");
let button = document.getElementById("btn");
let crudid = "68b2192454f24c3389027cc709e0f02d";

button.onclick = () => {
  const obj = {
    price: price.value,
    dish: dish.value,
    table: table.value,
  };
  async function forpost() {
    try {
      const response1 = await axios.post(
        `https://crudcrud.com/api/${crudid}/orderData`,
        obj
      );
      console.log(response1);
      showUserOnScreen(response1.data);
      console.log(response1.data);
    } catch (error) {
      console.log(error);
    }
  }
  forpost();
  //     axios.post(`https://crudcrud.com/api/${crudid}/orderData`,obj)
  //     .then((response)=>{
  //         console.log(response)
  //     showUserOnScreen(response.data);
  //     console.log(response.data);
  //  }).catch((err)=>{
  //     console.log(err);
  //  })
};

window.addEventListener("DOMContentLoaded", () => {
  async function forGet() {
    try {
      const response2 = await axios.get(
        `https://crudcrud.com/api/${crudid}/orderData`
      );

      for (var i = 0; i < response2.data.length; i++) {
        console.log(response2.data[i]);
        showUserOnScreen(response2.data[i]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  forGet();

  // axios.get(`https://crudcrud.com/api/${crudid}/orderData`)
  // .then((response)=>{
  //    // console.log(response)
  //     for(var i=0;i<response.data.length;i++){
  //         console.log(response.data[i]);

  //         showUserOnScreen(response.data[i]);
  //     }
  // }).catch((err)=>{
  //     console.log(err);
  // })
});

function showUserOnScreen(obj) {
  var list1 = document.getElementById("Table1");
  var list2 = document.getElementById("Table2");
  var list3 = document.getElementById("Table3");

  // var table1=document.getElementById('table1').value;
  // var table2=document.getElementById('table2').value;
  // var table3=document.getElementById('table3').value;

  //const parenElement=document.getElementById("Table");

  const childElememt = document.createElement("li");

  childElememt.textContent = obj.price + "-" + obj.dish + "-" + obj.table;

  //  parenElement.appendChild(childElememt);
  // if()

  //here for option of every table for selection append the value through checking the value which i give in building html page:
  if (obj.table == "table1") {
    list1.appendChild(childElememt);
  }
  if (obj.table == "table2") {
    list2.appendChild(childElememt);
  }
  if (obj.table == "table3") {
    list3.appendChild(childElememt);
  }

  const delbtn = document.createElement("input");
  delbtn.type = "button";
  delbtn.value = "Delete Order";

  delbtn.onclick = () => {
    // here me need to develop for delete the value from crud crud also

    async function forDelete() {
      try {
        const response3 = await axios.delete(
          `https://crudcrud.com/api/${crudid}/orderData/${obj._id}`
        );
        childElememt.remove();
        console.log(response3.data);
      } catch (error) {
        console.log(error);
      }
    }
    forDelete();
    //         axios.delete(`https://crudcrud.com/api/${crudid}/orderData/${obj._id}`)
    //         .then((response)=>{
    //             //parenElement.removeChild(childElememt);

    //             childElememt.remove();
    //             console.log(response.data)
    //         }).catch((err)=>{
    //             console.log(err);
    //         })
  };

  childElememt.appendChild(delbtn);
  // parenElement.appendChild(childElememt);
}
