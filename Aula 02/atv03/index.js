// Função para calcular o preço final com desconto
        function calcularDesconto() {
            // Obtemos os valores dos campos de entrada
            let preco = document.getElementById('preco').value;
            let idade = document.getElementById('idade').value;

            // Validamos se os campos não estão vazios
            if (!preco || !idade) {
                document.getElementById('resultado').innerText = "Por favor, insira o preço do produto e sua idade.";
                return;
            }

            // Convertendo os valores para números
            preco = parseFloat(preco);
            idade = parseInt(idade);

            // Variável para armazenar o preço final
            let precoFinal;

            // Verificamos a idade para aplicar o desconto
            if (idade < 18) {
                precoFinal = preco * 0.90; // Aplica 10% de desconto
            } else {
                precoFinal = preco; // Sem desconto
            }

            // Exibimos o preço final no elemento com id 'resultado'
            document.getElementById('resultado').innerText = `O preço final é R$ ${precoFinal.toFixed(2)}.`;
        }