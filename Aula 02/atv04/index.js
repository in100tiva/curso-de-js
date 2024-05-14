        // Função para verificar se a letra é uma vogal ou consoante
        function verificarLetra() {
            // Obtemos o valor do campo de entrada
            let letra = document.getElementById('letra').value.toLowerCase();

            // Validamos se o campo não está vazio e se é uma única letra
            if (!letra || letra.length !== 1 || !/[a-z]/.test(letra)) {
                document.getElementById('resultado').innerText = "Por favor, insira uma única letra.";
                return;
            }

            // Variável para armazenar a mensagem de resultado
            let mensagem;

            // Verificamos se a letra é uma vogal ou consoante
            if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
                mensagem = "A letra é uma vogal.";
            } else {
                mensagem = "A letra é uma consoante.";
            }

            // Exibimos a mensagem no elemento com id 'resultado'
            document.getElementById('resultado').innerText = mensagem;
        }