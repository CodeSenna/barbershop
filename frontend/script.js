const form = document.getElementById('form-cliente');
const lista = document.getElementById('lista-clientes');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede que o navegador recarregue a página, é o comportamento padrão.
});

const nome = document.getElementById('nome').value;
const telefone = document.getElementById('telefone').value;

await fetch('http:localhost:3000/clientes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, telefone })
});

form.reset();
carregarClientes();

// Requisição GET
async function carregarClientes() {
    const res = await fetch('http:localhost:3000/clientes');
    const clientes = await res.json();
};

lista.innerHTML = '';

clientes.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.nome} - ${c.telefone}`;
    lista.appendChild(li);
});

carregarClientes();
