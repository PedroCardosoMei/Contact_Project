import { NavBar } from "@/components/NavBar/NavBar-component";
import style from "@/Home/home.module.css";
import { Conteiner } from "@/components/ConteinerContact/Contact-component";
import { Input } from "@/components/Inputs/Input-component";

export const Home = () => {
    const text = "Pedro"
    
    return(<>
        <NavBar/>
        <Conteiner text={text}>
            <div className={style.user}><Input/></div>
            <div className={style.passWord}></div>
        </Conteiner>
    </>);
}