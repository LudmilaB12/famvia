'use client';
import React from "react";
import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = ({
    text,
    href,
    onClick,
    icon: Icon,
    iconPosition = "left", // "left" or "right"
    variant = "solid", // "solid" or "border"
    target, // e.g., "_blank" for new tab
    className,
    ...rest
}) => {
    const buttonClasses = classNames(
        styles.button,
        styles[variant],
        {
            [styles.iconRight]: iconPosition === "right"
        },
        className
    );

    const content = (
        <>
            {iconPosition === "left" && Icon && <Icon />}
            {text}
            {iconPosition === "right" && Icon && <Icon />}
        </>
    );

    if (href) {
        return (
            <a href={href} target={target} className={buttonClasses} {...rest}>
                {content}
            </a>
        );
    }

    return (
        <button type="button" onClick={onClick} className={buttonClasses} {...rest}>
            {content}
        </button>
    );
};

export default Button;