
function login() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("passWord").value;
    if (username === "") {
        document.getElementById("error_login").innerHTML = "Tên tài khoản không được để trống !";
        return false;
    }
    if (password === "") {
        document.getElementById("error_login").innerHTML = "Mật khẩu không được để trống !";
        return false;
    }

    let Account = {
        userName: username,
        passWord: password,
    };
    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/login",
        data: JSON.stringify(Account),
        //xử lý khi thành công
        success: function (data) {
            localStorage.setItem("token", data);
            location.href = "shopUser.html"
            alert("Đăng nhập thành công")
        },
        error: function (err) {
            console.log(err)
            alert("Sai tài khoản hoặc mật khẩu. Vui lòng nhập lại!")
        }
    })
    event.preventDefault();
}

function logout() {
    localStorage.setItem("token", "")
    location.href = "login.html"
}