import { ContactProps } from "./ContactProps";
import style from "@/components/ConteinerContact/Contact.module.css";

export const Conteiner = ({children}: ContactProps) => {
    return(<div className={style.conteiner}>
        <div className={style.inputs}>{children}</div>
        </div>);
}