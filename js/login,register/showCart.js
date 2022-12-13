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
                                            <td class="product-quantity"><input type="number" value="1" id="${ProductList[i].id}" onchange="upPrice(${ProductList[i].price},document.getElementById('${ProductList[i].id}'))"></td>
                                            <td class="product-subtotal" id="totalPrice"></p></td>
                                            <td class="product-remove"> <button onclick="xoa(${ProductList[i].id})">DELETE</button></td>
<!--                                            <td class="product-remove"> <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a></td>-->
                                        </tr>
          `
    }

    str += '</table>  <p style="font-size: 50px"> Tổng Tiền  = ' + productPrice() + 'Triệu</p>  <button onclick="buyProduct()">Thanh Toan</button>';

    document.getElementById('showcart').innerHTML = str
}

showCart();

function xoa(index) {
    ProductList.splice(index, 1)
    localStorage.setItem("ProductList",JSON.stringify(ProductList))
    showCart();
}

function productPrice() {
    let sum = 0
    for (let i = 0; i < ProductList.length; i++) {
        sum += parseFloat(ProductList[i].price * ProductList[i].amount)
    }
    return sum
}


function upPrice(price,amount){

    let totalPrice = price*amount;
    document.getElementById("totalPrice").innerHTML = totalPrice;
}