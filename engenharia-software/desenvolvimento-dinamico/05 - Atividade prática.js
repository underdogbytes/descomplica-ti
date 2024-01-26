console.log(
  `Bem-vindo ao café! :D
  CARDÁPIO
  Café.....R$1.00
  Chá.....R$2.00
  Leite.....R$3.00
  `
);

const escolhaBebida = 'Caafé'
let valor;

switch (escolhaBebida.toLowerCase()) {
  case 'café':
    valor = 2.50;
    break;
  case 'leite':
    valor = 3.00;
    break;
  case 'chá':
    valor = 2.00;
    break;
  default:
    console.log(`Não temos isso no cardápio :(\nPor favor, escolha entre café, leite ou chá :D`);
    break;
}

if (valor !== undefined) {
  console.log(`
    Ótima escolha! ${escolhaBebida} é sempre uma boa pedida :D
    O valor a ser pago é R$ ${valor.toFixed(2)} :)`
  );
}
