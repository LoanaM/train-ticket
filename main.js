var età = prompt ("Quanti anni hai?")
var km = prompt ("Quanti km devi percorrere?")
var prezzo = (0.21 * km)
var ventiperc = (prezzo *20 /100)
if (età <18) { prezzo = (prezzo - ventiperc) }
if (età >65) { prezzo = (prezzo - (prezzo *40 /100) ) }
document.getElementById('price').innerHTML = prezzo
