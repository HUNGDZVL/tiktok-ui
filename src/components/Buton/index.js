import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

<Button primary>Log in</Button>;
function Button({
    to,
    href,
    primary = false,
    small = false,
    text = false,
    disable = false,
    rounded = false,
    large = false,
    outline = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // remove event when btn is disabled
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]:className,
        primary,
        outline,
        disable,
        text,
        small,
        rounded,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{leftIcon}</span>}
        </Comp>
    );
}

export default Button;
