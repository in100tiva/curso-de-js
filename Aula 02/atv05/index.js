        // Função para verificar o dia da semana
        function verificarDia() {
            // Obtemos o valor do campo de entrada
            let numero = document.getElementById('numero').value;

            // Convertendo o valor para número inteiro
            numero = parseInt(numero);

            // Variável para armazenar a mensagem de resultado
            let mensagem;

            // Usamos uma estrutura switch para determinar o dia da semana
            switch (numero) {
                case 1:
                    mensagem = "Domingo";
                    break;
                case 2:
                    mensagem = "Segunda-feira";
                    break;
                case 3:
                    mensagem = "Terça-feira";
                    break;
                case 4:
                    mensagem = "Quarta-feira";
                    break;
                case 5:
                    mensagem = "Quinta-feira";
                    break;
                case 6:
                    mensagem = "Sexta-feira";
                    break;
                case 7:
                    mensagem = "Sábado";
                    break;
                default:
                    mensagem = "Por favor, insira um número de 1 a 7.";
                    break;
            }

            // Exibimos a mensagem no elemento com id 'resultado'
            document.getElementById('resultado').innerText = mensagem;
        }