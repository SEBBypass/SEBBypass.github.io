let urlMoodle = '';
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
