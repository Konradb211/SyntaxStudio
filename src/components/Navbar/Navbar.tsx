import logo from "../../assets/images/logo.svg"
import { navItems } from "../../constants/navbar"
import styles from "./Navbar.module.scss"

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__img}>
				<img src={logo} alt='Logotyp SyntaxStudio' />
			</div>
			<ul className={styles.navbar__list}>
				{navItems.map(item => (
					<li key={item.name}>
						<a href={item.link}>{item.name}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
