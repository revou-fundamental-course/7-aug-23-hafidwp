document.getElementById("luasButton").addEventListener("click", function () {
  kelilingForm.style.display = "none";
  luasForm.style.display = "block";
  resultTable.style.display = "none";
  resultOutput.textContent = "";
  luasTitle.style.display = "block";
});

document.getElementById("kelilingButton").addEventListener("click", function () {
  luasForm.style.display = "none";
  kelilingForm.style.display = "block";
  resultTable.style.display = "none";
  resultOutput.textContent = "";
  luasTitle.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        } else {
          inputs[0].focus();
        }
      }
    });
  });
});

const hitungLuasButton = document.getElementById("hitungHasilLuas");
hitungLuasButton.addEventListener("click", function () {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(alas) || isNaN(tinggi)) {
    resultOutput.textContent = "Masukkan nilai yang valid.";
    return;
  }

  const luas = 0.5 * alas * tinggi;
  resultOutput.textContent = `${luas}`;
  resultTable.style.display = "block";
});

const hitungKelilingButton = document.getElementById("hitungHasilKeliling");
hitungKelilingButton.addEventListener("click", function () {
  const sisiA = parseFloat(document.getElementById("sisiA").value);
  const sisiB = parseFloat(document.getElementById("sisiB").value);
  const sisiC = parseFloat(document.getElementById("sisiC").value);

  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    resultOutput.textContent = "Masukkan nilai yang valid.";
    return;
  }

  const keliling = sisiA + sisiB + sisiC;
  resultOutput.textContent = `${keliling}`;
  resultTable.style.display = "block";
});
