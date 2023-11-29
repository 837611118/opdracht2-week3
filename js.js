const tekstContainer = document.getElementById('tekstContainer');

for (let i = 0; i < 100; i++) {
  const tekst = document.createElement('p');
  tekst.textContent = "Dit is tekst nummer(Abdul Argalah) " + (i + 1);
  tekstContainer.appendChild(tekst);
}
