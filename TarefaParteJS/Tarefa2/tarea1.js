        // Função para obter a saudação de acordo com a hora
        function obterSaudacao() {
            var agora = new Date();
            var hora = agora.getHours();
            var saudacao = "Olá";

            if (hora >= 0 && hora < 12) {
                saudacao = "Bom dia";
            } else if (hora >= 12 && hora < 18) {
                saudacao = "Boa tarde";
            } else {
                saudacao = "Boa noite";
            }

            var nomeUsuario = prompt("Digite seu nome:");
            if (nomeUsuario) {
                alert(saudacao + " " + nomeUsuario);
            }
        }

        // Chama a função quando a página é carregada
        obterSaudacao();
