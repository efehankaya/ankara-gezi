// // JavaScript: Tıklanınca açıklamayı göster/gizle

function goster(yer) {
  const aciklamalar = document.querySelectorAll('.yer-aciklama'); // // Tüm açıklamaları al

  aciklamalar.forEach(aciklama => {
    aciklama.style.display = 'none'; // // Hepsini gizle
  });

  const secilen = document.getElementById(yer + '-desc'); // // Tıklanan yerin açıklamasını bul
  secilen.style.display = 'block'; // // Sadece onu göster
}
