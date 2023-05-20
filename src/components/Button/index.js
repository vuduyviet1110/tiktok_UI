import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
function Button({
  to,
  href,
  onClick,
  small,
  medium,
  large,
  disabled,
  primary,
  outline,
  normalText,
  customeClass,
  children,
  rounded,
  ...otherProps
}) {
  let Component = 'button';
  const cx = classNames.bind(styles);
  //để mặc định rồi có cái gì thêm thì cho vào
  var props = {
    onClick,
    ...otherProps,
  };
  // 2 loại link là link nội bộ dùng react-route hay là to-link ra ngoài dùng thẻ a-href
  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }
  let classes = cx(styles.wrapper, {
    [customeClass]: customeClass,
    small,
    large,
    medium,
    disabled,
    primary,
    outline,
    rounded,
    normalText,
  });
  return (
    <Component className={classes} {...props}>
      <span>{children}</span>
    </Component>
  );
}

export default Button;
