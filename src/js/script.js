//cadastro usuário
let username = prompt('Cadastre um nome para  seu usuário:');
if(username == ""){
    username = prompt('Por favor, digite um nome para  seu usuário:');
}else{
    alert('Nome cadastrado.')
}
let useremail = prompt('Cadastre um e-mail para seu usuário:')
if(useremail == ""){
    useremail = prompt('Por favor, digite um e-mail válido para o seu usuário:');
}else{
    alert('E-mail cadastrado.')
}
let senha = prompt('Cadastre uma senha:')
if(senha == ""){
    let senha = prompt('Por favor, preencha o campo de senha:');
}else{
    alert('Cadastro feito com sucesso! Veja os detalhes no console.')
}

console.log(username);
console.log(useremail);
console.log(senha);

//cadastro_vinhos
alert('Bem-vindo ao cadastro de Vinhos! Clique em "OK" para começar!');
let nomeVinho = prompt('Digite o nome do vinho:');
let tipoVinho = prompt('Digite o tipo do vinho:\nTinto\nBranco\nRosé');
let safraVinho = prompt('Digite a safra do vinho(Ano):');
let qtdeEstoque = prompt('Digite a quantidade em estoque do vinho cadastrado:');

alert("Cadastro realizado! Veja os detalhes no console.")

console.log(nomeVinho);
console.log(tipoVinho);
console.log(safraVinho);
console.log(qtdeEstoque);



