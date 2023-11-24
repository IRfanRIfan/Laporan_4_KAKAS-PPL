// script.js

// Fungsi untuk mengubah warna latar belakang header saat dihover
const header = document.querySelector("header");
header.addEventListener("mouseover", function () {
  this.style.backgroundColor = "#555";
});

header.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#333";
});

// Fungsi untuk menampilkan pesan salam dengan efek animasi
const greetButton = document.getElementById("btn-greet");
greetButton.addEventListener("click", function () {
  const greetingMessage = document.createElement("div");
  greetingMessage.textContent = "Halo! Selamat datang di profil saya.";
  greetingMessage.style.backgroundColor = "#3498db";
  greetingMessage.style.color = "white";
  greetingMessage.style.padding = "10px";
  greetingMessage.style.borderRadius = "5px";
  greetingMessage.style.position = "fixed";
  greetingMessage.style.top = "50%";
  greetingMessage.style.left = "50%";
  greetingMessage.style.transform = "translate(-50%, -50%)";
  greetingMessage.style.opacity = "0";
  greetingMessage.style.transition = "opacity 0.5s ease";

  document.body.appendChild(greetingMessage);

  // Delay sebentar sebelum menampilkan pesan dan menghilangkannya
  setTimeout(function () {
    greetingMessage.style.opacity = "1";
  }, 100);

  setTimeout(function () {
    greetingMessage.style.opacity = "0";
    // Menghilangkan elemen setelah efek animasi selesai
    setTimeout(function () {
      document.body.removeChild(greetingMessage);
    }, 500);
  }, 2000);
});

// Anda dapat menambahkan logika JavaScript lainnya sesuai kebutuhan Anda
