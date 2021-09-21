// console.log("arquivo main.js está sendo executado!");
// console.log(document);

// let pessoa = ["Hendy", 25];

// let pessoaObj = {
//     "nome": "Hendy",
//     "idade": 25
// };

// console.log(pessoaObj.nome);

let inputNome = document.querySelector('input');

console.log(inputNome.id);

let dadosForm = document.querySelectorAll('input');
console.log(dadosForm)

let tituloPrincipal = document.querySelector('h1');
tituloPrincipal.innerText = 'Faça parte do nossso time';

let inputEmail = document.querySelector('#email');

inputEmail.setAttribute('placeholder', 'jane@email.com');

let inputCargaHoraria = document.querySelector('#carga-horaria');
console.log(inputCargaHoraria.innerHTML)

inputCargaHoraria.innerHTML += '<option value="Trainee">Trainee</option>'; //acrescentar um valor usa +=

tituloPrincipal.style.color = 'orange';

let elementoDiv = document.querySelector('div');

//elementoDiv.classList.add('novaClasse')

//elementoDiv.classList.remove('container');