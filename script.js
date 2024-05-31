// 1-passo aqui estou obtendo as referencias dos elementos do formulario.
const form = document.querySelector('form');
const modeloInput= document.getElementById('modelo');
const marcaInput = document.getElementById('marca');
const anoInput   = document.getElementById('ano');
const corInput =document.getElementById('cor');
const motorInput=document.getElementById('motor');
const portasInput=document.getElementById('portas');
const cambioInput=document.getElementById('cambio');
const unidadeInput=document.getElementById('unidade');
const precoInput =document.getElementById('preco');
const dadosFormulario=document.getElementById('dados-formulario');

// 2- passo criar um evento do envio do formulario 
form.addEventListener('submit', function(event){
    event.preventDefault(); // esse comando evita o envio padrão do formulario .

// 3-criar uma variavel para processar os dados.
    validarEprocessarDados();
});

// 4- agora aqui criamos a função para validar e processar os dados da nossa 
// variavel validarEprocessarDados();

function validarEprocessarDados() {
// 5-vamos obter os valore do campos do inputs.
const modelo = modeloInput.value.trim();
const marca  =marcaInput.value.trim();
const ano = anoInput.value.trim();
const cor = corInput.value.trim();
const motor= motorInput.value.trim();
const portas=portasInput.value.trim();
const cambio=cambioInput.value.trim();
const unidade=unidadeInput.value.trim();
let preco = precoInput.value.trim();
preco = preco.replace ('R$' ,'');

// 6-vamos verificar si os campos estao preenchidos.
if (modelo === ''|| marca === ''|| ano === ''|| cor === ''|| motor ===''|| portas ===''|| 
    cambio ===''|| unidade ==='' || preco === ''){
     mensagemAlerta= 'Ops : Por favor ,preencher todos os campos!';
     exibirMensagemDeAlerta(mensagemAlerta);
     return ;
}
// 7-agora vamos verificar o preço e o ano se  sao valores numericos 
if (isNaN(ano) || isNaN (preco)){
    mensagemAlerta = 'Ops: Por favor , DADOS INVALIDOS !';
    exibirMensagemDeAlerta(mensagemAlerta);
    return ;
}

// 8- vamos criar um objeto de dados 
const veiculo = {
    modelo: modelo,
    marca : marca,
    ano: parseInt(ano), // estou convertendo o ano para numero 
    cor: cor,
    motor:motor,
    portas:portas,
    cambio:cambio,
    unidade:unidade ,
    preco:preco, 
};
 // 9-vamos retornar o form em branco.
 form.reset();
// 10-aqui seria nossa variavel para imprimir na tela 
 imprimirNaTela(veiculo);
}

//10- aqui estou criando a fução para exibir a mensagem do nosso
// if exibirMensagemAlerta(mensagemAlerta);
 function exibirMensagemDeAlerta(mensagem){
    alert(mensagem);
 }

//11- criando uma função para os cadastro  dos veiculo para imprimir em bloco na tela 
// dentro dessa função usei template string javascript
 function imprimirNaTela(veiculo){
    const blocoHTml = `
    <br> 
    <div class="bloco-dados">
        <p><strong>Modelo:</strong> ${veiculo.modelo}</p>
        <p><strong>Marca:</strong> ${veiculo.marca}</p>
        <p><strong>Ano:</strong> ${veiculo.ano}</p>
        <p><strong>Cor:</strong> ${veiculo.cor}</p>
        <p><strong>Motor:</strong> ${veiculo.motor}</p>
        <p><strong>Portas:</strong> ${veiculo.portas}</p>
        <p><strong>Cambio:</strong> ${veiculo.cambio}</p>
        <p><strong>Unidade:</strong> ${veiculo.unidade}</p>
        <p><strong>Preço:</strong> R$ ${veiculo.preco}</p>
    <br>
        <button class="botao-excluir">Excluir</button>
    </div>
    ` ;
    dadosFormulario.innerHTML += blocoHTml;

// 12-Adicionando evento de clique a o botão de excluir
  const botoesExcluir = document.querySelectorAll('.botao-excluir');
  botoesExcluir.forEach(botao =>{
    botao.addEventListener('click', function(){
        this.parentElement.remove();
    });
  });
}
