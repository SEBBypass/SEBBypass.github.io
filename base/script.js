let urlMoodle = '';

const sites = {
  chatgpt: 'https://chatgpt.com',
  /*
  custom1: 'https://www.google.com',
  custom2: 'https://copilot.microsoft.com',
  */
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

  let openedTabs = [];
  if (document.getElementById('chatgpt').checked) {
    openedTabs.push(window.open(sites.chatgpt, '_blank'));
  }

  /*
  if (document.getElementById('custom1').checked) {
    openedTabs.push(window.open(sites.custom1, '_blank'));
  }

  if (document.getElementById('custom2').checked) {
    openedTabs.push(window.open(sites.custom2, '_blank'));
  }
  */

  // Abrir nova URL se fornecida
  const newUrl = document.getElementById('new-url').value;
  if (newUrl) {
    openedTabs.push(window.open(newUrl, '_blank'));
  }

  if (urlMoodle) {
    setTimeout(() => {
      window.location.href = urlMoodle;
    }, 2000);
  } else {
    alert('URL não carregada. Tente novamente.');
  }
}
