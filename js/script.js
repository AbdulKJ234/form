 const formLogin = document.getElementById("formLogin")

 
 formLogin.addEventListener("submit", function(event) {
    event.preventDefault()

    const userLogin = document.getElementById("loginUsername").value
    const pw = document.getElementById("loginPassword").value


    // Ambil daftar user dari localStorage (kunci 'users' harus sama dengan saat daftar)
    const daftarUser = JSON.parse(localStorage.getItem('users')) || []

    const userCocok = daftarUser.find(user => 
        user.username == userLogin && user.password == pw);


    if (userCocok) {
        alert("Login berhasil! Selamat welcome " + userLogin)
        pesan.innerHTML = "Selamat datang le"

        window.location.href = "dashboard.html"

    } else {
        alert("username atau pw salah")
        pesan.innerHTML = "periksa lagi datanya"
    }
 })
 
//  document.getElementById("formLogin").onsubmit = function(event) {
//     event.preventDefault()

//     let user = document.getElementById("loginUsername").value
//     let pw = document.getElementById("loginPassword").value


//     let pesan = document.getElementById("pesan")


//     if (user == "user" && pw == "123") {
//         alert("Login berhasil! Selamat welcome " + user)
//         pesan.innerHTML = "Selamat datang le"
//         window.location.href = "dashboard.html"

//     } else {
//         alert("username atau pw salah")
//         pesan.innerHTML = "periksa lagi datanya"
//     }
    
//  }