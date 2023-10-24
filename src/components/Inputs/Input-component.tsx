import { Inputprops } from "./InputProps";

export const Input = ({name, placeholder} : Inputprops) => {
    return(<> <input type="text" name={name} placeholder={placeholder}/> </>);
}