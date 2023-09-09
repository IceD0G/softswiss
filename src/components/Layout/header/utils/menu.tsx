import Cart from 'assets/svg/Cart';
interface Props {
  id: number;
  text?: string;
  icon?: JSX.Element;
}
export const menuList: Props[] = [
  { id: 1, text: 'Home' },
  { id: 2, text: 'Product' },
  { id: 3, icon: <Cart /> },
];
