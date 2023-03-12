var qtElement = document.querySelector('.quantidadeBebida');
var removeButtons = document.querySelectorAll('.menos');
var addButtons = document.querySelectorAll('.mais');
var bebidas = {};


var bebidas = {};

addButtons.forEach(function(addButton) {
  addButton.addEventListener('click', function() {
    var qtElement = this.parentElement.querySelector('.quantidadeBebida');
    var qt = parseInt(qtElement.textContent);
    qt++;
    qtElement.textContent = qt;
    
    var nomeBebida = this.parentElement.parentElement.querySelector('.bebida').textContent;
    bebidas[nomeBebida] = qt;
  });
});

removeButtons.forEach(function(removeButtons) {
  removeButtons.addEventListener('click', function() {
    var qtElement = this.parentElement.querySelector('.quantidadeBebida');
    var qt = parseInt(qtElement.textContent);
    if(qt>0){
      qt--;
      qtElement.textContent = qt;
      
      var nomeBebida = this.parentElement.parentElement.querySelector('.bebida').textContent;
      bebidas[nomeBebida] = qt;
    }
  });
});

var enviarButton = document.querySelector('.enviar');

enviarButton.addEventListener('click', function() {
  for (const [bebida, qt] of Object.entries(bebidas)) {
    contbebidas = `${bebida}: ${qt}`;
    console.log(contbebidas)

  }
  var link = "https://wa.me/5511945894011?text=" + encodeURIComponent(contbebidas);
window.open(link);
});









