const resultado = 10 + 15;
console.log(resultado);

const resultado1 = "10" + 2;
console.log(resultado1);

const resultado2 = "10" * 2;
console.log(resultado2);

const resultado3 = "10" / 3;
console.log(resultado3);

const resultado4 = "10" % 3;
console.log(resultado4);

const resultado5 = 10 + true;
console.log(resultado5);

const resultado6 = 10 == "10";
console.log(resultado6);

const resultado7 = 10 === "10";
console.log(resultado7);

const resultado8 = 10 < 11;
console.log(resultado8);

const resultado9 = 10 > 12;
console.log(resultado9);

const resultado10 = 10 <= 10.1;
console.log(resultado10);

const resultado11 = 10 > 9.99;
console.log(resultado11);

const resultado12 = 10 != "dez";
console.log(resultado12);

const resultado13 = 10 + true;
console.log(resultado13);

const resultado14 = "dez" + true;
console.log(resultado14);

const resultado15 = 10 + false;
console.log(resultado15);

const resultado16 = 10 * false;
console.log(resultado16);

const resultado17 = true + true;
console.log(resultado17);

let resultado18 = 10;
resultado18++;
console.log(resultado18);

let resultado19 = 10;
resultado19--;
console.log(resultado19);

const resultado20 = 1 & 1;
console.log(resultado20);

const resultado21 = 1 & 0;
console.log(resultado21);

const resultado22 = 0 & 0;
console.log(resultado22);

const resultado23 = 1 & 0;
console.log(resultado23);

const resultado24 = 0 / 1;
console.log(resultado24);

const resultado25 = 5 + 5 == 10;
console.log(resultado25);

const resultado26 = "5" + "5" == 10;
console.log(resultado26);

const resultado27 = "5" * 2 > 9;
console.log(resultado27);

const resultado28 = (10 + 10) * 2;
console.log(resultado28);

const resultado29 = 10 + 10 * 2;
console.log(resultado29);



var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var pretacao = 750;


const meuCarro = branco == "branco";
console.log(meuCarro);

const meuCarro1 = branco == cinza;
console.log(meuCarro1);

const meuCarro2 = carro == branco;
console.log(meuCarro2);

var cavalo = carro == "preto" ? "cinza" : "marron";

console.log(cavalo);


var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";

var resultadoContador = carro + " " + preto + " " + cinza + " " + branco;
console.log(resultadoContador);
console.log(resultadoContador.length);



//////////////calcular pretacao
function calcularPrestacoes() {
			var valor = document.getElementById("valor").value;
			var prestacao = document.getElementById("prestacao").value;
			var entrada = document.getElementById("entrada").value;

			var saldo = valor - entrada;
			var num_prestacoes = Math.ceil(saldo / prestacao);

			document.getElementById("resultado-cal").value = num_prestacoes;
		}





