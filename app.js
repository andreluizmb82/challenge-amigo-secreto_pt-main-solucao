const inputFriend = document.querySelector('#amigo');
const listFriends = document.querySelector('#listaAmigos');
const result = document.querySelector('#resultado');

const friends = new Set();

function adicionarAmigo() {
  const newFriend = inputFriend.value.trim();
  if (newFriend === '') return;

  if (friends.has(newFriend)) {
    result.textContent = 'Amigo já adicionado!';
    return;
  }

  result.textContent = '';

  friends.add(newFriend);

  const li = document.createElement('li');
  li.textContent = inputFriend.value;

  listFriends.appendChild(li);
  inputFriend.value = '';
  inputFriend.focus();
  console.log(friends);
}
function sortearAmigo() {
  if (friends.size <= 0) return;

  const arrayFriends = Array.from(friends);
  const randomIndex = Math.floor(Math.random() * arrayFriends.length);
  const friend = arrayFriends[randomIndex];
  result.textContent = `O amigo sorteado foi: ${friend}`;
  listFriends.innerHTML = '';
  friends.clear();
  console.log(friends);
}

document.addEventListener('DOMContentLoaded', () => {
  inputFriend.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      adicionarAmigo();
    }
  });

  inputFriend.addEventListener('focus', () => {
    inputFriend.select();
  });
});
