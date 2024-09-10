function pesquisar()
{
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById ("campo-pesquisa"). value
    
    if(!campoPesquisa)
    {
       section.innerHTML = "<p>Não encontrado!!! Voce precisa digitar para pesquisar</p> "
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()


let resultados = "";
let titulo = "";
let descrição = "";
let tags = "";

//para cada dado dentro da lista de dados
for (let dado of dados)
    {
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        if(titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
            resultados +=
            `
                 <div class="item-resultado ">
                        <h2>
                            <a href="#"target = "blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descrição}</p>
                        <a href=${dado.link} target="_blank">Mais informacoes</a>
                    </div>`
        }

       

    }
    if(!resultados)
        {
            resultados = "Não encontrado!!!"
        }

    section.innerHTML = resultados  
}




    

