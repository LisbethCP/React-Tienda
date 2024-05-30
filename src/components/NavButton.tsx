import styles from './NavButton.module.css';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  title: string;
  link: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title, link }) => {
  return (
    <>
      <li className={styles['nav-li']}>
        <Link className={styles['nav-a']} to={link}>{title}</Link>
      </li>
    </>
  );
}

export default NavButton;