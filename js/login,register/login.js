
function login() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("passWord").value;

    let Account = {
        userName: username,
        passWord: password,
    };
    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/login",
        data: JSON.stringify(Account),
        //xử lý khi thành công
        success: function (data) {
            localStorage.setItem("token", data);
            location.href = "index.html"
            alert("Đăng nhập thành công")
        },
        error: function (err) {
            if (username === "" || password === "") {
                alert("khong der tai khoan trong hoac mat khau trong ")
            }else {
                alert("Sai tài khoản hoặc mật khẩu. Vui lòng nhập lại!")
            }

        }
    })
    event.preventDefault();
}

function logout() {
    localStorage.setItem("token", "")
    location.href = "login.html"
}