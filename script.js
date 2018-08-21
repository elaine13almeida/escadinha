let escada = prompt("Digite quantos degraus deseja desenhar:");
let simbolo = prompt("Digite o simbolo que queira como degrau:");
let i = 1;

if(isNaN(Number(escada)) || escada === null){
    alert("Valor inválido");
}
else{
	alert("Vamos lá!");
}


let lista = [];
  while(i <= escada){
	i++;
    lista.push(simbolo.repeat(i));
  }
console.log(lista);