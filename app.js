// Seleciona o container onde as moedas serão exibidas
const resultadosMoedas = document.querySelector('.resultados-pesquisa');

// Função para criar os elementos de cada moeda
function exibirMoedas(moedas) {
    resultadosMoedas.innerHTML = ''; // Limpa os resultados anteriores
    let contador = 0; // Inicializa um contador para gerar classes únicas
  
    moedas.forEach(moeda => { // Corrigido para 'moeda' (singular)
        // Cria um elemento div para a moeda
        const moedaDiv = document.createElement('div'); // Correção para 'moedaDiv'
        // Gera uma classe única usando o contador
        const classeUnica = `moeda-${contador}`;
        moedaDiv.classList.add(classeUnica);
  
        // Insere o título, descrição, ano e imagem
        moedaDiv.innerHTML = `
            <h2>${moeda.moeda}</h2>
            <p><strong>Descrição:</strong> ${moeda.descrição}</p>
            <p><strong>Ano:</strong> ${moeda.ano}</p>
            <img src="images/${moeda.imagem}" alt="Imagem da moeda ${moeda.moeda}">
        `;
  
        resultadosMoedas.appendChild(moedaDiv); // Corrigido para 'moedaDiv' e 'resultadosMoedas'
        contador++;
    });
}

// Seleciona o botão de pesquisa e o campo de pesquisa
const btnPesquisar = document.getElementById('btnPesquisar');
const campoPesquisa = document.getElementById('pesquisa');
const mensagemResultado = document.getElementById('mensagemResultado')

// Função de pesquisa
function realizarPesquisa() {
    const pesquisa = campoPesquisa.value.toLowerCase();
    if (!pesquisa){
      return
    }


    const moedasFiltradas = moedas.filter(moeda =>  
        Object.values(moeda).some(valor => 
            typeof valor === 'string' && valor.toLowerCase().includes(pesquisa)
        )
    );

    // Exibe as moedas filtradas
    exibirMoedas(moedasFiltradas); // Correção para 'exibirMoedas'
}

// Adiciona o event listener ao botão de pesquisa
btnPesquisar.addEventListener('click', realizarPesquisa);

// Adiciona o event listener para o campo de pesquisa
campoPesquisa.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        realizarPesquisa();
    }
});
