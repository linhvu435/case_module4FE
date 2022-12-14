let totalPages = 1;

function getData(pageNumber) {

    if (pageNumber < 0) {
        pageNumber = 0;
    }
    if (pageNumber > totalPages - 1) {
        pageNumber = totalPages - 1;
    }
    console.log(pageNumber)
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/admin/products?page=${pageNumber}`,
        // xu ly khi thanh cong
        success: function (data) {
            console.log(data)
            document.getElementById("showList").innerHTML = showData(data);
            totalPages = data.totalPages;
            // showData(data.content);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

getData(0);

function showData(pageable) {
    let arrProduct = pageable.content;
    let str = "<div class=\"col-12 pb-1\">\n" +
        // "                    <div class=\"d-flex align-items-center justify-content-between mb-4\">\n" +
        // "                        <form action=\"\" >\n" +
        // "                            <div class=\"input-group\">\n" +
        // "                                <input type=\"text\" class=\"form-control\" id='search' placeholder=\"Search by name\" '>\n" +
        // "                                <div class=\"input-group-append\">\n" +
        // "                                        <button onclick='search()' class=\"input-group-text bg-transparent text-primary\">\n" +
        // "                                            <i class=\"fa fa-search\"></i>\n" +
        // "                                        </button>\n" +
        // "                                </div>\n" +
        // "                            </div>\n" +
        // "                        </form>\n" +

        "                        <div class=\"dropdown ml-4\">\n" +
        "                            <button class=\"btn border dropdown-toggle\" type=\"button\" id=\"triggerId\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n" +
        "                                    aria-expanded=\"false\">\n" +
        "                                Sort by\n" +
        "                            </button>\n" +
        "                            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"triggerId\">\n" +
        "                                <a class=\"dropdown-item\" href=\"#\">Latest</a>\n" +
        "                                <a class=\"dropdown-item\" href=\"#\">Popularity</a>\n" +
        "                                <a class=\"dropdown-item\" href=\"#\">Best Rating</a>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>";
    for (let i = 0; i < arrProduct.length; i++) {
        str += `
    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                        <div class="single-product">
                                            <!-- Product Image Start -->
                                            <div class="pro-img">
                                                <a href="product.html">
                                                    <img class="primary-img" src="${arrProduct[i].img}" alt="single-product">
                                                    <img class="secondary-img" src="${arrProduct[i].img}" alt="single-product">
                                                </a>
                                                <a href="#" class="quick_view" data-toggle="modal" data-target="#myModal" title="Quick View"><i class="lnr lnr-magnifier"></i></a>
                                            </div>
                                            <!-- Product Image End -->
                                            <!-- Product Content Start -->
                                            <div class="pro-content">
                                                <div class="pro-info">
                                                    <h4><a href="">${arrProduct[i].name}</a></h4>
                                                    <p><span class="price">${arrProduct[i].price}</span><del class="prev-price">$400.50</del></p>
                                                    <div class="label-product l_sale">30<span class="symbol-percent">%</span></div>
                                                </div>
                                                <div class="pro-actions">
                                                   <div class="actions-secondary">
                                                   <a><div style="text-align: center">
                                                     <a> <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#myModal1" onclick="showEdit(${arrProduct[i].id})" >
                                                     Edit Product
                                                      </button>
                                                       </div>

                                                        <a><button type="button" class="btn btn-danger"  onclick="deleteProduct(${arrProduct[i].id})">Delete</button></a>
                                                    </div>
                                                </div>
                                             </div>
                                            <!-- Product Content End -->
                                        </div>
                                    </div>
                                    <!-- Single Product End -->
     </div>  
       `;
    }

    str += `<div class="col-12 pb-1">
                    <nav aria-label="Page navigation">
                    <div class="pagination justify-content-center mb-3">
                    <button onclick="getData(${pageable.number - 1})">Previous</button>
                    <span>${pageable.number + 1}</span>/<span>${pageable.totalPages}</span>
                    <button onclick="getData(${pageable.number + 1})">Next</button>
                    </div>
                    
<!--                        <ul class="pagination justify-content-center mb-3">-->
<!--                            <li class="page-item disabled">-->
<!--                                <a class="page-link" href="#" aria-label="Previous">-->
<!--                                    <span aria-hidden="true">&laquo;</span>-->
<!--                                    <span class="sr-only">Previous</span>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="page-item active"><a class="page-link" href="#">1</a></li>-->
<!--                            <li class="page-item"><a class="page-link" href="#">2</a></li>-->
<!--                            <li class="page-item"><a class="page-link" href="#">3</a></li>-->
<!--                            <li class="page-item">-->
<!--                                <a class="page-link" href="#" aria-label="Next">-->
<!--                                    <span aria-hidden="true">&raquo;</span>-->
<!--                                    <span class="sr-only">Next</span>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                        </ul>-->
                    </nav>
                </div>`
    // str += `<button onclick="getData(${pageable.number -1})">Previous</button>
    //         <span>${pageable.number + 1}</span>/<span>${pageable.totalPages}</span>
    //         <button onclick="getData(${pageable.number + 1})">Next</button>`
    return str;

}


function search() {
    let name = document.getElementById("search").value;

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/products/findByName/" + name,
        success: function (data) {
            let str = "";
            for (let i = 0; i < data.length; i++) {
                str += `<div class="single-product">
                                            <!-- Product Image Start -->
                                            <div class="pro-img">
                                                <a href="product.html">
                                                    <img class="primary-img" src="${data[i].img}" alt="single-product">
                                                    <img class="secondary-img" src="${data[i].img}" alt="single-product">
                                                </a>
                                                <a href="#" class="quick_view" data-toggle="modal" data-target="#myModal" title="Quick View"><i class="lnr lnr-magnifier"></i></a>
                                            </div>
                                            <!-- Product Image End -->
                                            <!-- Product Content Start -->
                                            <div class="pro-content">
                                                <div class="pro-info">
                                                    <h4><a href="">${data[i].name}</a></h4>
                                                    <p><span class="price">${data[i].price}</span><del class="prev-price">$400.50</del></p>
                                                    <div class="label-product l_sale">30<span class="symbol-percent">%</span></div>
                                                </div>
                                                <div class="pro-actions">
                                                   <div class="actions-secondary">
                                                   <a><div style="text-align: center">
                                                     <a> <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#myModal1" onclick="showEdit(${data[i].id})" >
                                                     Edit Product
                                                      </button>
                                                       </div>

                                                        <a><button type="button" class="btn btn-danger"  onclick="deleteProduct(${data[i].id})">Delete</button></a>
                                                    </div>
                                                </div>
                                             </div>`


            }
            document.getElementById("showList").innerHTML = str
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function create() {
    let name = document.getElementById("name").value;
    let img = document.getElementById("img").value;
    let price = document.getElementById("price").value;
    let amount = document.getElementById("amount").value;
    let idshop = document.getElementById("idshop").value;
    let product = {
        name: name,
        img: img,
        price: price,
        amount: amount,
        shop: {id : idshop},
    }

    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/admin/products`,
        data: JSON.stringify(product),
        //xử lý khi thành công
        success: function (data) {
            showData()

        },
        error: function (err) {
            console.log(err)
        }
    })
}

function deleteProduct(id) {
    $.ajax({
        type: "delete",
        url: `http://localhost:8080/admin/products/` + id,
        success: function () {
            alert("Do You Want Delete?")
            location.reload();
        },
        error: function (err) {
            console.log(err)
        }
    })
}


function showEdit(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/admin/products/` + id,
        //xử lý khi thành công
        success: function (data) {
            document.getElementById("id").value = data.id;
            document.getElementById("nameEdit").value = data.name;
            document.getElementById("imgEdit").value = data.img;
            document.getElementById("priceEdit").value = data.price;
            document.getElementById("amountEdit").value = data.amount;
            document.getElementById("shop").value = data.shop.id;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function edit() {
    let id =   document.getElementById("id").value;
    let name = document.getElementById("nameEdit").value;
    let img =  document.getElementById("imgEdit").value;
    let price =  document.getElementById("priceEdit").value
    let amount =  document.getElementById("amountEdit").value
    let shop = document.getElementById("shop").value
    let product = {
        id : id,
        name: name,
        img: img,
        price: price,
        amount: amount,
        shop: {id :shop},
    }

    $.ajax({
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        type: "PUT",
        url: "http://localhost:8080/admin/products/"+ id,
        data: JSON.stringify(product),
        success: function (data) {

            alert("Do you want edit")
            location.reload();
            // localStorage.removeItem("updateId")
            // document.getElementById("nameU").value = data.name
            // document.getElementById("ageU").value = data.age
            // document.getElementById("genderU").value = data.gender

        }
    })
    event.preventDefault()
}

