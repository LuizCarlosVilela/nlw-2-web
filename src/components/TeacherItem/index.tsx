import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4" alt="Luiz Carlos" />
                <div>
                    <strong>Luiz Carlos</strong>
                    <span>Informática</span>
                </div>
            </header>

            <p>
                Entusiastas das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e mudar a vida das pessoas.
                    </p>

            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 20,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>

        </article>

    );
}

export default TeacherItem;