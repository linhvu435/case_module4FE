

function saveStar(star){

    let countStar = {
        "number_star": star

    }

    $.ajax({
        type: "POST",

        url: "http://localhost:8080/stars",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(countStar),
        success: function () {
<<<<<<< HEAD
            alert("successfully star")
=======
            alert("succesfully star")
>>>>>>> fc9220b (day1)
            let hidden = document.querySelector('#stars')
            hidden.style.visibility = 'hidden'
        },
        error: function (error){
            alert("error star")
        }

    })
}



