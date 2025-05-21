document.getElementById("giziForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usia = parseInt(document.getElementById("usia").value);
  const berat = parseFloat(document.getElementById("berat").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const gender = document.getElementById("gender").value;
  const aktivitas = parseFloat(document.getElementById("aktivitas").value);

  // Rumus BMR Mifflin-St Jeor
  let bmr;
  if (gender === "pria") {
    bmr = 10 * berat + 6.25 * tinggi - 5 * usia + 5;
  } else {
    bmr = 10 * berat + 6.25 * tinggi - 5 * usia - 161;
  }

  const kebutuhanKalori = bmr * aktivitas;
  const protein = berat * 1.2; // gram
  const lemak = (0.25 * kebutuhanKalori) / 9; // gram
  const karbohidrat = (kebutuhanKalori - (protein * 4 + lemak * 9)) / 4;

  document.getElementById("hasil").innerHTML = `
    <h3>Hasil Perhitungan:</h3>
    <p><strong>Kalori Harian:</strong> ${kebutuhanKalori.toFixed(2)} kkal</p>
    <p><strong>Protein:</strong> ${protein.toFixed(1)} gram</p>
    <p><strong>Lemak:</strong> ${lemak.toFixed(1)} gram</p>
    <p><strong>Karbohidrat:</strong> ${karbohidrat.toFixed(1)} gram</p>
  `;
});
