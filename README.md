# SEBB - Safe Exam Browser Bypass

## 📌 Sobre o Projeto

Este projeto foi criado para facilitar Kabulamento no SEB. Com uma interface simples, ele permite a inserção de um ID específico acessar a Prova com uma Inteligencia Artificial.

---

## ⚠️ Aviso Importante

Antes de clicar no botão **Start**, **memorize o ID da Variante da Prova**, pois ele será essencial para a navegação correta no sistema.

---

## 🌐 Interface

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEBB</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>SEB/B - ID</h1>
        <p>Que ID? Exemplo: </p>
        <p>https://betamoodle.unicv.cv/mod/quiz/.../config.php?cmid=<span style="color: #ff6600; font-weight: bold; font-size: 1.2em;">864</span></p>
        <br>O ID desse URL é <span style="color: #ff6600; font-weight: bold; font-size: 1.2em;">864</span></br>
        <br></br>
        <input type="number" id="search-bar" style="width: 124px;" placeholder="ID:" autocomplete="off" />
        
        <div class="url-options">
            <label for="urls">Abrir com ChatGPT?</label><br>
            <input type="checkbox" id="chatgpt" style="height: 13px; width: 13px;" checked> ChatGPT<br>
        </div>
        
        <button onclick="abrir()">Start</button>
    </div>
</body>
</html>
```

---

## 🔗 Links Úteis

- [Moodle](https://betamoodle.unicv.cv)
- [ChatGPT](https://chatgpt.com)

---

## 🚀 Autor

Desenvolvido por CV-group.

