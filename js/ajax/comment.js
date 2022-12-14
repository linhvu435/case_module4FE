

document.getElementById("user-name-login").innerHTML = localStorage.getItem("username") + '<i class="lnr lnr-user"></i>'

document.getElementById("sure-name").innerHTML  = localStorage.getItem("username")

$(document).ready(()=> {
    $("#review-user").click(() => {
        let content = $("#comments").val()
        let idUser = localStorage.getItem("id_user")

        let reviews = {
            id_account: idUser,
            text: content
        }

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/comments",
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
            data: JSON.stringify(reviews),
            success: function () {
                alert("successfully comment")
            },
            error: function (error) {
                alert("error comment")
            }

        })

    })
})


function showComment(){
    $.ajax({
        type: " GET ",
        url: "http://localhost:8080/comments",
        success: function (data){
            let str = "";
            for (let i = 0; i <data.length ; i++) {
                str += `<tr>
                        <li>
                             <h5>${data[i].text}</h5>
                           </li>
                           <br>
</tr>`
            }
            document.getElementById("content-user").innerHTML = str
        }
    })
}
showComment()


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





