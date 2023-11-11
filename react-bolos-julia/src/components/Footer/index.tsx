//estilização footer

import "./style.css";

// rotas
import { Link } from "react-router-dom";

//imagem
import imgWhats from "../../assets/img/whats 1.png"
import imgFace from " ../../assets/img/face1.png"
import imgInsta from "../../assets/img/instag 1.png"


function Footer() {
    return (
        <footer>
            <div className="container footer_container">
                <p>Todos os direitos reservados ®</p>
                <div>
                    <Link to={"#"} >
                        <img src={"whats 1.png"} alt=""/>

                    </Link>
                    <Link to={"#"} >
                        <img src={"face1.png"} alt=""/>

                    </Link>
                    <Link to={"#"} >
                        <img src={"instag 1.png"} alt=""/>

                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer 