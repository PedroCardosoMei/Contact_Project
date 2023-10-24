import { NavBar } from "@/components/NavBar/NavBar-component";
import style from "@/Home/home.module.css";
import { Conteiner } from "@/components/ConteinerContact/Contact-component";
import { Input } from "@/components/Inputs/Input-component";
import { Button } from "@/components/Button/button-component";

export const Home = () => {
    const text = "Pedro"
    
    return(<>
        <NavBar/>
        <Conteiner text={text}>
            <div className={style.login}>
                <div className={style.user} id={style.op}><Input/></div>
                <div className={style.passWord} id={style.op}><Input/></div>
               <div className={style.button} id={style.op}><Button name="ENVIAR"/></div>  
            </div>
            
            
        </Conteiner>
    </>);
}