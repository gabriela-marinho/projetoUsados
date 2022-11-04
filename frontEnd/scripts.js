// const carros = document.getElementById('carros');



// // FETCH - É usado para se comunica via requiscoes http (GET/POST/PUT/DELETE/PATCH)
// // primeiro parametro  = endpoint da requiscao (url).
// // segundo parametro(opcional) = configuroes da requisicao.


// // programacao assincrona

// const chamadaApi = fetch('http://localhost:3131/carros');
// console.log(chamadaApi); // promisse

// chamadaApi.then((response) => {
//     // apenas a resposta do servidor (api) ( que a carta retornou certa)
//     console.log(response);
//     return response.json();
// }).then((tarefasData) => {
//     tarefasData.map((tarefa) => {
//         lista.insertAdjacentHTML('beforeend', `
//             <li class="list-item">
//                 <p><b>Titulo:</b> ${tarefa.text} </p>
//                 <p><b>Prazo:</b> ${tarefa.prazo}</p>
//             </li>
//         `)
//     })
// })