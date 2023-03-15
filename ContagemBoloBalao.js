var qtElement = document.querySelector('.quantidadeBebida');
var removeButtons = document.querySelectorAll('.menos');
var addButtons = document.querySelectorAll('.mais');
var bebidas = {};
var data = new Date()
var bebidas = {};

var dia = data.getDate();
var mes = data.getMonth();
var mesName;
console.log(dia);
console.log(mes);
switch (mes) {
case 0:
 mesName = 'Janeiro';   
  break;
    case 1:
  mesName = 'fevereiro';   
  break;
    case 2:
  mesName = 'Março';   
  break;
    case 3:
  mesName = 'Abril';   
  break;
    case 4:
  mesName = 'Maio';   
  break;
    case 5:
  mesName = 'Junho';   
     break;
case 6:
  mesName = 'Julho';   
     break;
case 7:
  mesName = 'Agosto';   
     break;
case 8:
  mesName = 'Setembro';   
     break;
case 9:
  mesName = 'Outubro';   
     break;
case 10:
  mesName = 'Novembro';   
     break;
case 11:
  mesName = 'Dezembro';   
     break;
default:
  console.log(mesName);
  break;
}
var dataFesta = `Festa do dia ${dia} de ${mesName}`
document.querySelector('.dataFesta h1').innerHTML= dataFesta;

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
  var bebidas = document.querySelectorAll('.item');
  var contbebidas = '';

  bebidas.forEach(function(bebida) {
    var nomeBebida = bebida.querySelector('li').textContent;
    var qtBebida = bebida.querySelector('.quantidadeBebida').textContent;
    contbebidas += `${nomeBebida}: ${qtBebida}\n`;
  });

  var mensagem =`${dataFesta}\n ${contbebidas}`;

  var link = "https://wa.me/5511945894011?text=" + encodeURIComponent(mensagem);
  window.open(link);
});









