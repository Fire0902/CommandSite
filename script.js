const lesCommandes = document.querySelectorAll('.une-commande');

lesCommandes.forEach(element => {
    element.addEventListener('click', function(){
      navigator.clipboard.writeText(element.getText);    
    })
})