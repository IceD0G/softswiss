import React from 'react';
import { clsx } from 'clsx';
interface Props {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const Burger = ({ setShowMenu, showMenu }: Props) => {
  const onClick = () => {
    setShowMenu(value => !value);
  };
  return (
    <button className={'burger-btn'} type={'button'} onClick={onClick}>
      <span className={clsx('burger-btn__line', showMenu ? 'burger-btn__line-open' : '')}></span>
    </button>
  );
};

export default Burger;
