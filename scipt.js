// script.js

// Fungsi untuk mengubah warna latar belakang header saat dihover
document.querySelector("header").addEventListener("mouseover", function () {
  this.style.backgroundColor = "#555";
});

document.querySelector("header").addEventListener("mouseout", function () {
  this.style.backgroundColor = "#333";
});

// Fungsi untuk menampilkan pesan salam saat tombol salam ditekan
document.getElementById("btn-greet").addEventListener("click", function () {
  alert("Halo! Selamat datang di profil saya.");
});

// Anda dapat menambahkan logika JavaScript lainnya sesuai kebutuhan Anda
