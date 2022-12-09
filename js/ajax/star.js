

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
            alert("succesfully star")
            let hidden = document.querySelector('#stars')
            hidden.style.visibility = 'hidden'
        },
        error: function (error){
            alert("error star")
        }

    })
}



