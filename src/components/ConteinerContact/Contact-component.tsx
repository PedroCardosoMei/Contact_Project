import { ContactProps } from "./ContactProps";
import style from "@/components/ConteinerContact/Contact.module.css";

export const Conteiner = ({children, text}: ContactProps) => {
    return(<div className={style.conteiner}>
        <div className={style.conteinerSub}> {text}</div>
        <div className={style.inputs}>{children}</div>
        </div>);
}