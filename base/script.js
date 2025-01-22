let urlMoodle = '';

const urlNew = 'https://betamoodle.unicv.cv/login/index.php';
const sites = {
  chatgpt: 'https://chatgpt.com',
};


function carregarURL() {
  const searchBar = document.getElementById('search-bar').value;
  if (searchBar) {
    urlMoodle = `https://betamoodle.unicv.cv/mod/quiz/view.php?id=${searchBar}`;
  } else {
    console.error('Erro: ID não encontrado');
  }
}

function openUrl(event) {
  event.preventDefault(); // Evita o reload padrão do formulário
  const urlInput = document.getElementById('search-bar').value.trim();
  
  if (urlInput) {
      const url = urlInput.startsWith('http://') || urlInput.startsWith('https://') 
          ? urlInput 
          : 'https://' + urlInput; // Adiciona https:// se estiver faltando
      window.open(url, '_blank'); // Abre a URL em uma nova aba
  } else {
      alert('Por favor, insira uma URL válida.');
  }
}


function abrir() {
  carregarURL();

  if (document.getElementById('chatgpt').checked) {
    window.open(sites.chatgpt, '_blank');
  }

  if (urlMoodle) {
    console.log('Redirecionando para a URL do Moodle:', urlMoodle);
    setTimeout(() => {
      window.location.href = urlMoodle;
    }, 2000);
  } else {
    alert('URL não carregada. Tente novamente.');
  }
}
