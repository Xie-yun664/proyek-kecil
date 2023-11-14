let nilayLayar = "";
const layar = document.getElementById("layar");
const tombolContainer = document.querySelector(".tombol");

tombolContainer.addEventListener("click", function (even) {
  if (even.target.tagName === "BUTTON") {
    const tombolValue = even.target.textContent;
    prosesTombol(tombolValue);
  }
});

function prosesTombol(value) {
  if (value === "=") {
    hitung();
  } else if (value === "C") {
    bersihkanLayar();
  } else if (value === "Del") {
    hapusSatuKarakter();
  } else {
    tambahKeLayar(value);
  }
}

function tambahKeLayar(nilai) {
  nilayLayar += nilai;
  perbaruiLayar();
}

function bersihkanLayar() {
  nilayLayar = "";
  perbaruiLayar()
}

function hitung() {
  try {
    nilayLayar = eval(nilayLayar).toString();
  } catch (error) {
    nilayLayar = "Error"
  }
  perbaruiLayar();
}

function perbaruiLayar() {
  layar.value = nilayLayar;
}

function hapusSatuKarakter() {
  nilayLayar = nilayLayar.slice(0, -1);
  perbaruiLayar();
}