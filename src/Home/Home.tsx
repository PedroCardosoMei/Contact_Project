import { NavBar } from "@/components/NavBar/NavBar-component";
import style from "@/Home/home.module.css";
import { Conteiner } from "@/components/ConteinerContact/Contact-component";
import { Input } from "@/components/Inputs/Input-component";
import { Button } from "@/components/Button/button-component";
import { FiPhoneCall } from "react-icons/fi";
import {AiOutlineUser} from "react-icons/ai";

export const Home = () => {
    const text = "Pedro"
    
    return(<>
        <NavBar/>
        <Conteiner text={text}>
            <div className={style.login}>
                <div className={style.user} id={style.op}><AiOutlineUser/><Input placeholder=" Nome Completo"/></div>

                
                <div className={style.passWord} id={style.op}><FiPhoneCall/><Input placeholder=" Número"/></div>
               <div className={style.button} ><Button name="ENVIAR"/></div>  
            </div>
            
            
        </Conteiner>
    </>);
}