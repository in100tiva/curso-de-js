// Função para verificar se o número é positivo e par
        function verificarNumero() {
            // Obtemos o valor do campo de entrada
            let numero = document.getElementById('numero').value;

            // Convertendo o valor para número inteiro
            numero = parseInt(numero);

            // Variável para armazenar a mensagem de resultado
            let mensagem;

            // Verificamos se o número é positivo e par
            if (numero > 0 && numero % 2 === 0) {
                mensagem = "O número é positivo e par.";
            } else {
                mensagem = "O número não é positivo e par.";
            }

            // Exibimos a mensagem no elemento com id 'resultado'
            document.getElementById('resultado').innerText = mensagem;
        }