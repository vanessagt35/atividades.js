// Solicitar ao usuário que insira os dados
var nome = prompt("Digite o nome da pessoa: ");
var salario = parseFloat(prompt("Digite o salário da pessoa: "));
var idade = parseInt(prompt("Digite a idade da pessoa: "));
var temDiploma = prompt("A pessoa possui diploma? (sim ou nao): ").toLowerCase(); // Converter para minúsculas

// Verificar se a pessoa possui um diploma
var possuiDiploma;
if (temDiploma === "sim") {
    possuiDiploma = true;
} else if (temDiploma === "nao") {
    possuiDiploma = false;
} else {
    console.log("Resposta inválida. Por favor, responda 'sim' ou 'nao'.");
    // Encerre o programa ou lide com a resposta inválida de acordo com suas necessidades.
}

// Exibir os dados cadastrados
console.log("Cadastro da pessoa:");
console.log("Nome: " + nome);
console.log("Salário: $" + salario);
console.log("Idade: " + idade + " anos");
if (possuiDiploma) {
    console.log("Possui diploma: Sim");
} else {
    console.log("Possui diploma: Não");
}


