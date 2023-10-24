import React from "react";
import { ButtonProps } from "./ButtonProps";
import style from "@/components/Button/Button.module.css";

export const Button = ({name} :  ButtonProps) => {
    return (
        <>
            <button type="button" className={style.button}>{name}</button>
        </>
    );
};