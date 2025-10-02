let sapiList = [];

function renderSapi() {
  const container = document.getElementById("daftarSapi");
  container.innerHTML = "";

  if (sapiList.length === 0) {
    container.innerHTML = "<p>Belum ada sapi.</p>";
    return;
  }

  sapiList.forEach((sapi, index) => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "8px";
    div.style.margin = "4px 0";

    div.innerHTML = `
      <b>${sapi.jenis}</b><br>
      Umur: ${sapi.umur} bulan<br>
      Berat: ${sapi.berat} kg<br>
      <button onclick="beriMakan(${index})">Beri Makan</button>
      <button onclick="jualSapi(${index})">Jual</button>
    `;

    container.appendChild(div);
  });
}

function tambahSapi() {
  const jenis = document.getElementById("jenis").value;
  const umur = parseInt(document.getElementById("umur").value);
  const berat = parseInt(document.getElementById("berat").value);

  if (!jenis || isNaN(umur) || isNaN(berat)) {
    alert("Lengkapi data sapi!");
    return;
  }

  sapiList.push({ jenis, umur, berat });
  renderSapi();

  // reset form
  document.getElementById("jenis").value = "";
  document.getElementById("umur").value = "";
  document.getElementById("berat").value = "";
}

function beriMakan(index) {
  sapiList[index].berat += 10; // naik 10kg
  alert(sapiList[index].jenis + " sudah diberi makan, berat bertambah!");
  renderSapi();
}

function jualSapi(index) {
  alert(sapiList[index].jenis + " sudah dijual!");
  sapiList.splice(index, 1);
  renderSapi();
}

// inisialisasi
renderSapi();
