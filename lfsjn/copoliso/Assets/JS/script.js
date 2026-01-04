// Atualiza o ano no rodapé
document.getElementById('currentYear').textContent = new Date().getFullYear();

const tbody = document.getElementById("tbodyForm");

// 25 jogadores
for (let i = 1; i <= 25; i++) {
    tbody.innerHTML += `
    <tr>
        <td>${i}</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
    </tr>`;
}

// Representantes
tbody.innerHTML += `
<tr><td colspan="5"><strong>Representante 1</strong></td></tr>
<tr><td colspan="5"><input></td></tr>
<tr><td colspan="5"><strong>Representante 2</strong></td></tr>
<tr><td colspan="5"><input></td></tr>
`;

function gerarTabela() {
    const linhas = document.querySelectorAll("#tbodyForm tr");
    let html = `
    <h2 style="text-align:center">Lista Oficial de Jogadores</h2>
    <table>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>RG</th>
            <th>Posição</th>
        </tr>
    `;

    let contador = 1;

    linhas.forEach(tr => {
        const inputs = tr.querySelectorAll("input");
        if (inputs.length === 4) {
            html += `
            <tr>
                <td>${contador++}</td>
                <td>${inputs[0].value}</td>
                <td>${inputs[1].value}</td>
                <td>${inputs[2].value}</td>
                <td>${inputs[3].value}</td>
            </tr>`;
        } else if (inputs.length === 1) {
            html += `
            <tr>
                <td colspan="5"><strong>${inputs[0].value}</strong></td>
            </tr>`;
        }
    });

    html += "</table>";

    document.getElementById("conteudoTabela").innerHTML = html;
    document.getElementById("formulario").classList.add("hidden");
    document.getElementById("tabelaFinal").classList.remove("hidden");
}

function voltar() {
    document.getElementById("tabelaFinal").classList.add("hidden");
    document.getElementById("formulario").classList.remove("hidden");
}

function enviarWhatsapp() {
    const linhas = document.querySelectorAll("#tbodyForm tr");
    let texto = "*LISTA DE JOGADORES do Copoliso FC*\n\n";

    let numero = 1;

    linhas.forEach(tr => {
        const inputs = tr.querySelectorAll("input");

        if (inputs.length === 4) {
            if (
                inputs[0].value ||
                inputs[1].value ||
                inputs[2].value ||
                inputs[3].value
            ) {
                texto += `${numero}. ${inputs[0].value} ${inputs[1].value} | RG: ${inputs[2].value} | ${inputs[3].value}\n`;
                numero++;
            }
        } else if (inputs.length === 1) {
            texto += `\n*${inputs[0].value}*\n`;
        }
    });

    const telefone = "5532999837766";
    const mensagem = encodeURIComponent(texto);

    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
}
// Bloquear botão direito do mouse
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Função desabilitada!");
});

// Bloquear teclas de atalho relacionadas a ferramentas de desenvolvedor
document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" || // F12 para abrir DevTools
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl+Shift+J
        (event.ctrlKey && event.key === "U") || // Ctrl+U para visualizar o código-fonte
        (event.ctrlKey && event.key === "S") // Ctrl+S para salvar a página
    ) {
        event.preventDefault();
        alert("Ação bloqueada!");
    }
});

// Tentar detectar o uso das ferramentas de desenvolvedor
(function detectDevTools() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            alert("Ferramentas de desenvolvedor detectadas e bloqueadas!");
            window.location.href = "about:blank"; // Redireciona a página
        }
    });
    console.log('%c', element);
})();
document.addEventListener('keydown', function(event) {
    // Bloqueia Ctrl+S (salvar)
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        alert('A combinação Ctrl+S está desabilitada!');
    }
    // Bloqueia Ctrl+U (ver código-fonte)
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        alert('A combinação Ctrl+U está desabilitada!');
    }
});