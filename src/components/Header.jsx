import React, {useState, useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import MyOrder from '@containers/MyOrder';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);

    const {state} = useContext(AppContext);

    const handleToggle = () => {
        {/* Lo cambia al estado inverso*/}
        setToggle(!toggle);
    };

    const handleToggleOrders = () => {
        {/* Lo cambia al estado inverso*/}
        setToggleOrders(!toggleOrders);
    };

    return (
        <nav className={styles.nav}>
            <img src={menu.src} alt="menu" className={styles.menu} />
            <div className={styles['navbar-left']}>
                <Link href="/" passHref>
                    <Image src={logo} alt="logo" className={styles['nav-logo']} />
                </Link>
                <ul>
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="/">Toys</Link>
                    </li>
                    <li>
                        <Link href="/">Others</Link>
                    </li>
                </ul>
            </div>
            <div className={styles['navbar-right']}>
                <ul>
                    <li className={styles['navbar-email']} onClick={handleToggle} aria-hidden="true" >
                        info@example.com
                    </li>

                    <li className={styles['navbar-shopping-cart']} 
                        onClick={handleToggleOrders} aria-hidden="true" >
                        <Image src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
            </div>
            {/* Si toogle es false no muestra el menu*/}
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>

    );
};


export default Header;