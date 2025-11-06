import styles from "./Header.module.scss"
import background from "../../assets/images/header/coomingSoon.svg"
import Navbar from "../Navbar/Navbar"

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<Navbar />
				<div className={styles.header__container__text}>
					<div className={styles.header__container__text__title}>
						<h1>Nasza strona jest w trakcie tworzenia...</h1>
						<p>
							Ale nadal możesz się z nami skontaktować w sprawie projektu
							twojej!
						</p>
					</div>
					<img src={background} alt='Zdjęcie tła ' />
				</div>
			</div>
		</header>
	)
}

export default Header
