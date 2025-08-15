document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slideshow img');
    let current = 0;

    // Slide automático
    if (slides.length > 0) {
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 3000);
    }

    // Página produtos.html: redireciona para pay.html com alerta
    const productLinks = document.querySelectorAll('a[id]');
    if (productLinks.length > 0) {
        productLinks.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault(); // evita o href padrão
                const id = e.target.id;

                // Redireciona para pay.html passando o id
                window.location.href = `pay.html?id=${id}`;
            });
        });
    }

    // Página pay.html: altera a imagem e mostra texto + QR Code centralizado
    const produtoImg = document.getElementById('produto-img');
    const texto = document.querySelector('#paragra');

    if (produtoImg && texto) {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        // Limpa conteúdo anterior
        texto.innerHTML = "";
        let mensagem = "";
        let linkQRCode = "";

        switch(id) {
            case '1':
                produtoImg.src = 'minha_imagem.jpeg';
                mensagem = "Você acaba de comprar o conjunto de diamantes<br>Valor: 3,000R$<br>Valor destinado à doação: 1,000R$<br>Colaborando com Fundo Amazonia<br>Infelizmente só estamos com a função de PIX habilitada atualmente<br>";
                linkQRCode = "https://seusite.com/pagamento?id=1";
                break;
            case '2':
                produtoImg.src = 'joiasvermelhas.jpeg';
                mensagem = "Você acaba de comprar o conjunto de rubis<br>Valor: 10,000R$<br>Valor destinado à doação: 4,000R$<br>Colaborando com AACD<br>Infelizmente só estamos com a função de PIX habilitada atualmente<br>";
                linkQRCode = "https://seusite.com/pagamento?id=2";
                break;
            case '3':
                produtoImg.src = 'joiasverdes.jpeg';
                mensagem = "Você acaba de comprar o conjunto de esmeraldas<br>Valor: 9,000R$<br>Valor destinado à doação: 2,000R$<br>Colaborando com Fundo Amazonia<br>Infelizmente só estamos com a função de PIX habilitada atualmente<br>";
                linkQRCode = "https://seusite.com/pagamento?id=3";
                break;
            case '4':
                produtoImg.src = 'perolas.jpeg';
                mensagem = "Você acaba de comprar o conjunto de pérolas e ouro<br>Valor: 8,000R$<br>Valor destinado à doação: 3,000R$<br>Colaborando com AACD<br>Infelizmente só estamos com a função de PIX habilitada atualmente<br>";
                linkQRCode = "https://seusite.com/pagamento?id=4";
                break;
            case '5':
                produtoImg.src = 'joiasroxas.jpeg';
                mensagem = "Você acaba de comprar o conjunto de diamantes roxo<br>Valor: 100,000R$<br>Valor destinado à doação: 20,000R$<br>Colaborando com Fundo amazonia<br>Infelizmente só estamos com a função de PIX habilitada atualmente<br>";
                linkQRCode = "https://seusite.com/pagamento?id=5";
                break;
            default:
                produtoImg.src = 'variavel.jpeg';
                mensagem = "";
        }

        // Adiciona mensagem + container do QR Code
        if (mensagem !== "") {
            texto.innerHTML = mensagem + "<div id='qrcode' style='margin-top: 20px; display: flex; justify-content: center;'></div>";
            // Gera o QR Code
            new QRCode(document.getElementById("qrcode"), {
                text: linkQRCode,
                width: 150,
                height: 150
            });
        }
    }
});

//------------------------------------------------------------------------------o
//                                     SPECTREE                                 |
//------------------------------------------------------------------------------o 
let seeprod = document.querySelector('#see'); 
let aacd = document.querySelector('#siteacd'); 
let amazonia = document.querySelector('#amazon'); 

seeprod.onclick = () => {
    window.location = 'produtos.html'; 
};
aacd.onclick = () => { 
    window.location = 'https://aacd.org.br/'; 
};
amazonia.onclick = () => { 
    window.location = 'https://www.fundoamazonia.gov.br/pt/home/'; 
};

