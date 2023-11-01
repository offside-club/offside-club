
//styles
import { useMemo } from 'react'
import styles from './primaryButton.module.scss'
import { ButtonPropsType, ButtonType } from './types';

import classNames from "classnames";

const PrimaryButton = ({ rightIcon, leftIcon, text, border, buttonType = ButtonType.PRIMARY, ...otherProps }: ButtonPropsType) => {

    const buttonstyle = useMemo((): any => {
        switch (buttonType) {
            case ButtonType.DARK:
                return styles.dark_container;
            case ButtonType.BORDER:
                return styles.border_container;
            default:
                return styles.container;
        }
    }, [buttonType])

    return (
        <button className={buttonstyle} {...otherProps}  >
            <>{leftIcon && leftIcon}</>
            {text && (<p className={classNames(styles['text1'], styles["background"])}>{text}</p>)}
            <>{rightIcon && rightIcon}</>
        </button>
    )
}

export default PrimaryButton