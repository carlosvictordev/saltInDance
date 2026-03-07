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
