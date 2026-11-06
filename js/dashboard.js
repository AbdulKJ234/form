function ubahTulisan() {
    let judul = document.getElementById("judul")

    judul.textContent = "saya jago DOM"
}

function ubahHalaman(menu) {
    let judul = document.getElementById("judul");

    let isi = document.getElementById("isi")

    if (menu == "Beranda") {
        judul.textContent = "INI BERANDA"
        isi.textContent = "Ini aadalah halaman beranda setelah klik menu berada"

    } else if (menu == "Profil") {
        judul.textContent = "INI PROFIL"
        isi.textContent = "Ini adalah halaman Profil"

    } else if (menu == "Galeri") {
        judul.textContent = "INI GALERI "
        isi.textContent = "Ini adalah halaman galeri"
        
    } else {
        judul.textContent = "INI KONTAK"
        isi.textContent = "Ini adalah halaman kontak"
    }

    // judul.textContent = menu
    // isi.textContent = "selamat welcome" + menu
}

function toggleMenu () {
    let sidebar = document.getElementById("sidebar")

    if (sidebar.style.display == "none") {

        sidebar.style.display = "flex"

    }else {
        sidebar.style.display = "none"
    }
}