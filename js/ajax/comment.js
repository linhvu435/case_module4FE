<<<<<<< HEAD
function saveComment(){

        let content = document.getElementById("comments").value

        console.log(content)

        let idUser
    
        let nameProduct = document.getElementById("product-to-add")

        let idProduct

        $.ajax({
            type: "GET",
            url: "http://localhost:8080/comments",
            success: function (data){
                for (let i = 0; i< data.length; i++){
                    if (nameProduct == data[i].name){
                                idProduct = data[i].id
                    }
                }
            }
        })




         if ( typeof(Storage) !== 'undefined') {
             // khoi tao session

             sessionStorage.setItem("idUserName",1)
             // lay session


                idUser = sessionStorage.getItem("idUserName")

         }

        let reviews = {
             "id_account": idUser,
            "text": content,
            "id_product": idProduct
        }

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/comments",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(reviews),
            success: function () {
                alert("successfully comment")
            },
            error: function (error) {
=======
$(document).ready(()=> {
    $("#review-user").click(() => {
        let content = $("#comments").val()

        let reviews ={
            "text": content
        }

        $.ajax({
            type:"POST",
            url: "http://localhost:8080/comment",
            data: JSON.stringify(reviews),
            success: function () {
                alert("succesfully comment")
            },
            error: function (error){
>>>>>>> fc9220b (day1)
                alert("error comment")
            }

        })
<<<<<<< HEAD
}

// function showComment(){
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/products",
//         success: function (data){
//             let str = ""
//             for (let i = 0; i< data.length ; i++){
//                 str += `<h1>${data[i].username}</h1>
//                         <ul>
//                         <h5>${data[i].text}</h5>
//                         <li>${}</li>
//
//                         </ul>
//                 `
//             }
//         }
//
//     })
// }


// function showRating(){
//     $.ajax({
//         type: "Get",
//         url: "http://localhost:8080/stars",
//         success: function (data){
//
//
//
//             }
//         }
//     })
// }

=======

    })


})
>>>>>>> fc9220b (day1)




