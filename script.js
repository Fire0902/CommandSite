function copyCommand(command, button) {
  // Créer un élément textarea temporaire pour copier le texte
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = command;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);

  // Afficher le tooltip "Copié !"
  const tooltip = button.nextElementSibling;
  tooltip.classList.add('show');

  // Cacher le tooltip après 1 seconde
  setTimeout(() => {
      tooltip.classList.remove('show');
  }, 1000);
}