function register(){
    let userName = $("#userName").val();
    let passWord = $("#passWord").val();
    let address=$("#address").val();
    let phoneNumber=$("#phoneNumber").val();
    let email=$("#email").val();
    let roles =$("#roles").val();

    let account={
        userName:userName,
        passWord:passWord,
        address:address,
        phoneNumber:phoneNumber,
        email:email,
        roles:{id: roles}
    }
    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/register",
        data: JSON.stringify(account),
        //xử lý khi thành công
        success: function (data) {
            alert("Đăng ký thành công!")
            location.href = "login.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function checkUser() {
    let userName = document.getElementById("userName").value;
    $.ajax({
        type: "GET",
        headers: {
            //kiểu dữ liệu nhận về
            'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/register/user",
        data: {
            userName: userName,
        },
        success: function (data) {
        },
        error() {
            document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Account already exists!</p>`

        }
    })
}
function checkMail() {
    let email = document.getElementById("email").value;
    $.ajax({
        type: "GET",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/register/email",
        data: {
            email: email,
        },
        success: function (data) {
        },
        error() {
            document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Email already exists!</p>`

        }
    })
}
function checkPassWord() {
    let passWord = document.getElementById("passWord").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    if (passWord!=confirmpassword){
        document.getElementById("confirmpassword").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Passwords do not match!</p>`
    }
}





// let userName =document.querySelector('#userName')
// let passWord =document.querySelector('#passWord ')
// let confirmpassword =document.querySelector('#confirmpassword')
// let address =document.querySelector('#address')
// let phoneNumber=document.querySelector('#phoneNumber')
// let email=document.querySelector('#email')
// let form =document.querySelector('#form')
// function showError(input,message){
//     let parent = input.parentElement;
//     let small = parent.querySelector('#small');
//     parent.classList.add('error');
//     small.innerText = message;
// }
// function showSuccess(input){
//     let parent = input.parentElement;
//     let small = parent.querySelector('#small');
//     parent.classList.add('error');
//     small.innerText = "";
// }
// function checkEmptyError(){
//
//     listInput.forEach(input =>{
//         input.value.trim()
//         if (!input.value){
//             showError(input,'Không được bỏ trống')
//         }else {
//             showSuccess(input)
//         }
//     });
//
// }
