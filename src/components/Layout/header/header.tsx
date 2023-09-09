import { useState } from 'react';
import Logo from 'assets/svg/Logo';
import Burger from 'components/ui/Burger';
import { menuList } from 'components/Layout/header/utils/menu';
import { clsx } from 'clsx';

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <header className={'header__background'}>
      <section className={'header container'}>
        <div className={'header__logo'}>
          <Logo />
        </div>
        <nav className={clsx('header__nav burger__nav', showBurgerMenu ? 'open' : '')}>
          <ul className={'header__links'}>
            {menuList.map(menuItem => {
              return (
                <li key={menuItem.id}>
                  <a className={'header__link'} href={'#'}>
                    {menuItem.icon ? menuItem.icon : menuItem.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Burger setShowMenu={setShowBurgerMenu} showMenu={showBurgerMenu} />
      </section>
    </header>
  );
};

export default Header;
