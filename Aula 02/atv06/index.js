        // Função para verificar se um número é primo
        function verificarPrimo() {
            // Obtemos o valor do campo de entrada
            let numero = document.getElementById('numero').value;

            // Convertendo o valor para número inteiro
            numero = parseInt(numero);

            // Variável para armazenar a mensagem de resultado
            let mensagem;

            // Função para determinar se um número é primo
            function ehPrimo(num) {
                if (num <= 1) return false;
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) return false;
                }
                return true;
            }

            // Verificamos se o número é primo
            if (ehPrimo(numero)) {
                mensagem = `${numero} é um número primo.`;
            } else {
                mensagem = `${numero} não é um número primo.`;
            }

            // Exibimos a mensagem no elemento com id 'resultado'
            document.getElementById('resultado').innerText = mensagem;
        }