import { ReactNode } from "react";

export enum ButtonType {
    PRIMARY,
    BORDER,
    DARK
}
export interface ButtonPropsType extends React.HTMLProps<HTMLButtonElement> {
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    text?: string;
    border?: boolean;
    buttonType?: ButtonType;
}

