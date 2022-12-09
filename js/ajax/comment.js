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
                alert("error comment")
            }

        })

    })


})




