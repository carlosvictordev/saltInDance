function ativar(){
    const botao = document.getElementById("hambur");
    const opcao = document.getElementById("opcoes");

    botao.addEventListener("click", (e)=>{
        opcao.style.display = "flex";
        e.stopPropagation();
    });

    document.addEventListener("click", (event)=>{

        if(
            !opcao.contains(event.target) &&
            !botao.contains(event.target)
        ){
            opcao.style.display = "none";
        }

    });

};

function enviarGmail(){
    window.location.href = "mailto:carlosvictorlimadecarvalho@gmail.com?subject=Contato%20do%20site&body=Olá,%20gostaria%20de%20mais%20informações"
}
