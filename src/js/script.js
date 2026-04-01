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

