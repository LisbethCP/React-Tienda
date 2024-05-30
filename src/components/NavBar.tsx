import styles from './NavBar.module.css';
import NavButton from './NavButton';

const NavBar = () => {
  return (
    <>
      <nav id="navbar" className={styles.navbar}>
        <NavButton title="Ofertas" link='/'/>
        <NavButton title="Cómo comprar" link='/'/>
        <NavButton title="Costos y tarifas" link='/'/>
        <NavButton title="Mis pedidos" link='/'/>
        <NavButton title="Garantía" link='/'/>
      </nav>
    </>
  );
}

export default NavBar;