import { Inputprops } from "./InputProps";
import style from "@/components/Inputs/Input.module.css";

export const Input = ({name, placeholder, type} : Inputprops) => {
    return(<> <input type="text" name={name} placeholder={placeholder} className={style.input}/> </>);
}