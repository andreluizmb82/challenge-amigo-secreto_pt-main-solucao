// Selecionar elementos do DOM
const inputFriend = document.querySelector('#amigo');
const listFriends = document.querySelector('#listaAmigos');
const result = document.querySelector('#resultado');

// Criar um conjunto para armazenar os amigos
const friendsSet = new Set();

// Eventos:
function adicionarAmigo() {
  // Obter o valor do campo de entrada e remover espaços em branco
  const newFriend = inputFriend.value.trim();
  
  // Verificar se o amigo pode ser adicionado
  if(!isFriendAddable(newFriend)) return;

  // Adicionar o amigo à lista
  addFriend(newFriend);

  // Limpar o campo de entrada e definir o foco nele
  cleanAndFocusInput();
}

function sortearAmigo() {
  // Verificar se há amigos na lista
  if (friendsSet.size <= 1) {
    // Exibir mensagem de erro
    result.textContent = 'Insira pelo menos dois amigos para sortear.';
    // Interromper a execução da função
    return;
  }

  // Selecionar um amigo aleatório
  const friendSelected = drawFriend();

  // Exibir o amigo sorteado
  result.textContent = `O amigo sorteado foi: ${friendSelected}`;

  // Limpar a lista de amigos
  friendsClear();

}

// Evento de carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  // Adicionar ouvinte de evento para o campo de entrada
  inputFriend.addEventListener('keydown', (event) => {
    // Verificar se a tecla pressionada é "Enter"
    if (event.key === 'Enter') {
      // Chamar a função adicionarAmigo()
      adicionarAmigo();
    }
  });

  // Adicionar ouvinte de evento para foco no campo de entrada
  inputFriend.addEventListener('focus', () => {
    // Selecionar todo o texto no campo de entrada quando receber foco
    inputFriend.select();
  });
});

function isFriendAddable(newFriend){
  let _result = false;
  // Verificar se o valor de newFriend é vazio
  if (!newFriend) {
    // Exibir mensagem de erro
    result.textContent = 'Digite um nome!';
  }
  // Verificar se o amigo já existe na lista
  else if (friendsSet.has(newFriend)) {
    // Exibir mensagem de erro
    result.textContent = 'Amigo já adicionado!';
  }
  // Se o amigo pode ser adicionado
  else{
    // Limpar a mensagem de erro
    result.textContent = '';
    _result = true;
  }

  // Retornar o resultado da verificação
  return _result;
}

function addFriend(newFriend) {
  // Adicionar o amigo ao conjunto
  friendsSet.add(newFriend);

  // Criar um novo elemento li com o valor do campo de entrada
  const li = document.createElement('li');
  li.textContent = inputFriend.value;

  // Adicionar o elemento li à lista de amigos
  listFriends.appendChild(li);
}

function cleanAndFocusInput() {
  // Limpar o campo de entrada
  inputFriend.value = '';
  // Definir o foco no campo de entrada
  inputFriend.focus();
}

function friendsClear() { 
  // Limpar o conjunto de amigos
  friendsSet.clear();
  // Limpar a lista de amigos
  listFriends.innerHTML = '';
}

function drawFriend() {
  // Converter o conjunto de amigos em um array
  const arrayFriends = Array.from(friendsSet);
  // Gerar um índice aleatório dentro do comprimento do array
  const randomIndex = Math.floor(Math.random() * arrayFriends.length);
  // Obter o amigo correspondente ao índice aleatório
  const friend = arrayFriends[randomIndex];

  // Retornar o amigo sorteado
  return friend;
}
