"use client"

import { NavBar } from "@/components/NavBar/NavBar-component";
import style from "@/Home/home.module.css";
import { Conteiner } from "@/components/ConteinerContact/Contact-component";
import { Input } from "@/components/Inputs/Input-component";
import { Button } from "@/components/Button/button-component";
import { useState } from "react";

export const Home = () => {
    const [textNormal, setTextNormal] = useState<string>("Contato Normal");
    const [textBusiness, setTextBusiness] = useState<string>("Contato Empresarial");

    // Use um estado para controlar qual texto está sendo exibido
    const [showingTextNormal, setShowingTextNormal] = useState(true);

    // Função para alternar entre os textos
    const toggleText = () => {
        setShowingTextNormal(!showingTextNormal);
    };

    return (
        <>
            <NavBar />
            <Conteiner>
                <div className={style.login}>
                    <h1>{showingTextNormal ? textNormal : textBusiness}</h1>
                    <div className={style.user} id={style.op}>
                        <Input />
                    </div>
                    <div className={style.passWord} id={style.op}>
                        <Input />
                    </div>
                    <div className={style.button} id={style.op}>
                        <Button
                            name="ENVIAR"
                            className={style.buttonSend}
                        />
                    </div>
                    <div className={style.button} id={style.op}>
                        <Button
                            name="TROCAR"
                            onClick={toggleText}
                            className={style.buttonReplce}
                        />
                    </div>
                </div>
            </Conteiner>
        </>
    );
}

