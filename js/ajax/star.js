

function saveStar(star){

    let id = localStorage.getItem("id_user")

    let countStar = {
        id_account: id,
        number_star: star

    }

    $.ajax({
        type: "POST",

        url: "http://localhost:8080/stars",
        headers: {"Authorization": "Bearer " + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json' },
        data: JSON.stringify(countStar),
        success: function () {

            alert("successfully star")
            let hidden = document.querySelector('#stars')
            hidden.style.visibility = 'hidden'
        },
        error: function (error){
            alert("error star")
        }

    })
}



