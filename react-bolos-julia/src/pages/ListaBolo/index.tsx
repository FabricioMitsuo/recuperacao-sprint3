//estilização
import "./style.css";

//componentes
import CardBolo from "../../components/CardBolo";

//api
import api from "../../utils/api";

//hooks
import { useEffect, useState } from "react";

//js


function ListaBolo() {

    //const ListaBolo = [];

    // react
    // bolos => ver o valor que esta armazenado
    // setBolos => atribuir um novo valor

    //useState<any[]> => o tipo do valor que pode receber
    //([])=> e o valor inicial


    // atribuindo valor js
    //bolos = [1,2,3];

    // atribuindo valor react;
    //setBolos([1,2,3]);

    // visualizar o valor em js e react
    //bolos

    const [bolos, setBolos] = useState<any[]>([]);

    function listarBolos() {
        api.get("bolos")
        .then((response) =>{
            // then e quando api da retorno positivo

            // atualiza o valor da variavel bolos
            // pelo retorno da api
            setBolos(response.data);

            console.log(response.data);
        })
        .catch((error) => {

            // cath e quando api da retorno negativo

            console.log(response.data);
        })
    }

    // que useEffect e acionado quando o componente e inicializado e modificacao
    useEffect(() => {

        //listaBolos() 'e acionada quando meu componente e inicializada
        listarBolos();

    },[
        //monitora//
    ]);

    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}
                {
                    bolos.map((bolo: any, index: number) => {
                        return <CardBolo 
                        key={index}
                        nome={ bolo.nome }
                        foto={bolo.user_img }
                        ingredientes={ bolo.ingredientes}
                        cobertura ={ bolo.cobertura}
                        valor ={bolo.valor}
                        
                        />

                    })
                }

            </section>
        </main>
    );
};

export default ListaBolo;