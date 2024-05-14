// Função para calcular o IMC e determinar a categoria
        function calcularIMC() {
            // Obtemos os valores dos campos de entrada
            let peso = document.getElementById('peso').value;
            let altura = document.getElementById('altura').value;

            // Validamos se os campos não estão vazios
            if (!peso || !altura) {
                document.getElementById('resultado').innerText = "Por favor, insira seu peso e altura.";
                return;
            }

            // Convertendo os valores para números
            peso = parseFloat(peso);
            altura = parseFloat(altura);

            // Calculamos o IMC
            let imc = peso / (altura * altura);

            // Variável para armazenar a mensagem de resultado
            let mensagem;

            // Determinamos a categoria com base no IMC
            if (imc < 18.5) {
                mensagem = `Seu IMC é ${imc.toFixed(2)}: Abaixo do peso.`;
            } else if (imc >= 18.5 && imc < 24.9) {
                mensagem = `Seu IMC é ${imc.toFixed(2)}: Peso normal.`;
            } else if (imc >= 25 && imc < 29.9) {
                mensagem = `Seu IMC é ${imc.toFixed(2)}: Sobrepeso.`;
            } else {
                mensagem = `Seu IMC é ${imc.toFixed(2)}: Obesidade.`;
            }

            // Exibimos a mensagem no elemento com id 'resultado'
            document.getElementById('resultado').innerText = mensagem;
        }