 document.getElementById("formLogin").onsubmit = function(event) {
    event.preventDefault()

    let user = document.getElementById("username").value
    let pw = document.getElementById("password").value

    let pesan = document.getElementById("pesan")

    console.log("Username:", user)

    if (user == "user" && pw == "123") {
        alert("Login berhasil! Selamat welcome " + user)
        pesan.innerHTML = "Selamat datang le"
        window.location.href = "dashboard.html"

    } else {
        alert("username atau pw salah")
        pesan.innerHTML = "periksa lagi datanya"
    }

    
 }
