const tekstContainer = document.getElementById('tekstContainer');

// Voeg tekst 100 keer toe aan de container
for (let i = 0; i < 100; i++) {
  const tekst = document.createElement('p');
  tekst.textContent = "Dit is tekst nummer(Abdul Argalah) " + (i + 1);
  tekstContainer.appendChild(tekst);
}
