import React from "react";
import { ButtonProps } from "./ButtonProps";
import style from "@/components/Button/Button.module.css";

export const Button = ({name, className, onClick} :  ButtonProps) => {
    return (
        <>
            <button type="button" className={className}  onClick={onClick}>{name}</button>
        </>
    );
};