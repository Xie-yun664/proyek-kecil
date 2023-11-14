const inputTugas = document.getElementById("inputTugas");
console.log(inputTugas)

const daptarTugas = document.getElementById("daptarTugas")

const button = document.getElementById("tombolTambah")

tombolTambah.addEventListener("click", function() {
  tambahTugas(inputTugas.value);
});


  function tambahTugas(namaTugas) {
    if (namaTugas !== "") {
    const tugasBaru = document.createElement("li")
    tugasBaru.textContent = namaTugas;
    // tombol hapis
    const tombolHapus = document.createElement("button");
    
    tombolHapus.textContent = "hapus";
    
    tombolHapus.className = "hapus";
    
    tombolHapus.addEventListener("click", function() {
      hapusTugas(tugasBaru)
    })
    
    tugasBaru.appendChild(tombolHapus)
    
    daptarTugas.appendChild(tugasBaru);
    inputTugas.value = "";
    
    function hapusTugas(liElement) {
      liElement.remove()
    }
   }
  }
    // tombol hapus
   
  
