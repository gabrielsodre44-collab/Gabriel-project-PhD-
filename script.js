const search = document.getElementById("search");
const results = document.getElementById("results");

// renderiza os cards
function render(data) {
    results.innerHTML = "";
    data.forEach(b => {
        results.innerHTML += `
            <div class="card">
                <h3>${b.nome}</h3>
                <p><b>Gram:</b> ${b.gram}</p>
                <p><b>Morfologia:</b> ${b.morfologia}</p>
                <p><b>Testes:</b> ${b.testes.join(", ")}</p>
                <p><b>Importância clínica:</b> ${b.importancia}</p>
            </div>
        `;
    });
}

// render inicial
render(bacteriaDatabase);

// busca
search.addEventListener("input", () => {
    const termo = search.value.toLowerCase();
    const filtrado = bacteriaDatabase.filter(b =>
        b.nome.toLowerCase().includes(termo)
    );
    render(filtrado);
});
