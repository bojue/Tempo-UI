import classNames from 'classnames'
import React, { forwardRef } from 'react'

interface ButtonProps extends Partial<TdComponent.TdButtonProps> {}
interface CompoundedComponent extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {}


const ButtonComponent: any = (props: ButtonProps, ref: React.Ref<HTMLDivElement >) => {
    const { 
        type,
        size,
        content,
        className,
    } = props
    return <button 
        className={classNames(
            className,
            `td-button-size-${size}`
        )} 
        >
        {content}
    </button>
}

const Button = forwardRef<ButtonProps, React.Ref<HTMLDivElement>>(ButtonComponent) as CompoundedComponent

export { Button }