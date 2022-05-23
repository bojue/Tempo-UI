import classNames from "classnames"
import React, { forwardRef} from "react"

type ButtonProps = Partial<TdComponent.TdButtonProps>;

const Button = forwardRef(
  (props: ButtonProps, ref: any) => {
    const {
      type,
      title,
      size,
      content,
      variant,
      className: customizeClassName = ""
    } = props
    const classDesignPre = "td"
    const classTypePre = "button"
    const classPre = `${classDesignPre}-${classTypePre}`
    return (
      <button
        className={classNames(customizeClassName,
        `${classPre}-size`,
        `${classPre}-border`,
        `${classPre}-size-${size}`,
        {
          [`${classPre}-border-dashed`]: variant === 'dashed',
          [`${classPre}-outline`] : variant === 'outline',
          [`${classPre}-link`]: variant === 'link',
          [`${classPre}-text`]: variant === 'text',
        }
      )}
        title={title}
      >
        <span>{content}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
