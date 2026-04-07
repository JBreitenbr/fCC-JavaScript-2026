/* Build an Inventory Management Program

In this lab, you will build an inventory management program that will allow you to add, update, find and remove products from the inventory. You will use an array of objects to represent your inventory, where each object will have name and quantity as the keys.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should declare an empty array named inventory that will store product objects having a key name with the value of a lowercase string, and a key quantity with the value of an integer.
You should create a function named findProductIndex that takes the product name as its argument and returns the index of the corresponding product object inside the inventory array. The function should always use the lowercase form of the product name to perform the search. If the product is not found, the function should return -1.
You should create a function named addProduct that takes a product object as its argument.
If the product is already present in the inventory, the addProduct function should update its quantity value by adding the quantity passed in to the function to the current quantity and log to the console the product name followed by a space and quantity updated.
If the product is not present in the inventory, the addProduct function should push the product to the inventory array and log the product name to the console, followed by a space and added to inventory.
You should create a function named removeProduct that takes the product name and quantity as its arguments.
The removeProduct function should subtract the passed quantity from the corresponding product object inside the inventory and log the string Remaining <product-name> pieces: <product-quantity> to the console, where <product-name> should be replaced by the product name, and <product-quantity> should be replaced by the product quantity.
If the quantity after the subtraction is zero, removeProduct should remove the product object from the inventory. If the quantity in the inventory is not enough to perform the subtraction, the removeProduct function should log the string Not enough <product-name> available, remaining pieces: <product-quantity> to the console.
If the product to remove is not present in the inventory, the removeProduct function should log <product-name> not found to the console.
Note: To prevent conflicts, keep only the logging mentioned in the user stories when running tests. */

let inventory=[];
const findProductIndex=(product)=>{
  let prod=product.toLowerCase();
  if(inventory.length==0){
    return -1;
  }
  else {
  for(let i=0;i<inventory.length;i++){
  let ind=inventory[i].name.toLowerCase().indexOf(prod);
    if(ind>-1){
      return i;
    }
  }
}
  return -1;
}

const addProduct=(prodObj)=>{
  let prod=prodObj.name.toLowerCase();
  let ind=findProductIndex(prod);
  if(ind==-1){
    inventory.push({name:prod,quantity:prodObj.quantity});   console.log(prod+" added to inventory");
  }
  else {
  inventory[ind].quantity+=prodObj.quantity;
  console.log(inventory[ind].name+" quantity updated");
  }
  return inventory;
}

const removeProduct=(name,quantity)=>{
  let ind=findProductIndex(name);
  if(ind>-1){
    if(inventory[ind].quantity>quantity){
    inventory[ind].quantity-=quantity;
    console.log("Remaining "+name.toLowerCase()+" pieces: "+inventory[ind].quantity);
  }
  else if(inventory[ind].quantity==quantity){
    inventory.splice(ind,1);
  }
  else {
   console.log("Not enough "+name.toLowerCase()+" available, remaining pieces: "+inventory[ind].quantity);
   }
  }
  else {console.log(name.toLowerCase()+" not found")}
  }
