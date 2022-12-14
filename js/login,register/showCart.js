let ProductList = JSON.parse(localStorage.getItem("ProductList"));
function showCart() {
    let str = '<table align="center">'
    for (let i = 0; i < ProductList.length; i++) {
        str += `
         <tr>                                <td class="product-name"><a href="#">${ProductList[i].id}</a></td>
                                            <td class="product-thumbnail">
                                                <a href="#"><img src="${ProductList[i].img}" alt="cart-image"></a>
                                            </td>
                                            <td class="product-name"><a href="#">${ProductList[i].name}</a></td>
                                            <td class="product-price"><span class="amount">${ProductList[i].price}</span></td>
                                            <td class="product-quantity"><input type="number"  id="${ProductList[i].id}" onchange="upPrice(${ProductList[i].price},document.getElementById('${ProductList[i].id}').value, ${ProductList[i].id}); ProductList[i].amount = this.innerText;"></td>
                                            <td class="product-subtotal" id="totalPrice${ProductList[i].id}">0</p></td>
                                            <td class="product-remove"> <button onclick="xoa(${i})">DELETE</button></td>
<!--                                            <td class="product-remove"> <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a></td>-->
                                        </tr>
          `
    }
    document.getElementById('showcart').innerHTML = str
    showProductPrice();
}

showCart();


function xoa(index) {
    ProductList.splice(index, 1)
    localStorage.setItem("ProductList",JSON.stringify(ProductList))
    showCart();
}

function showProductPrice() {
    let sum = 0
    for (let i = 0; i < ProductList.length; i++) {
        sum += +document.getElementById("totalPrice"+ProductList[i].id).innerText;
    }
    document.getElementById('totalPrice').innerHTML = '<p style="font-size: 50px">  ' + sum + '$</p> ' +
        ' <button onclick="buyProduct()">Thanh Toan</button>'

}


function upPrice(price,amount, index){

    let totalPrice = price*amount;
    document.getElementById("totalPrice"+index).innerHTML = totalPrice;
    showProductPrice();
}
//
// class ProductInCart {
//     id;
//     name;
//     img;
//     price;
//     amount;
//
//     constructor(id,name,img,price,amount) {
//         this.id = id;
//         this.name = name;
//         this.img = img;
//         this.price = price;
//         this.amount = amount;
//
//     }
// }



function buyProduct(){

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/products",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('token')
        },
        data: JSON.stringify(ProductList),
        success: function () {

        }
    });

}