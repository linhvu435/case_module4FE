function saveComment(){

        let content = document.getElementById("comments").value

        console.log(content)

        let reviews = {
            "text": content
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
                alert("succesfully comment")
            },
            error: function (error) {
                alert("error comment")
            }

        })
}





