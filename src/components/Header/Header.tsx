import styles from "./Header.module.scss"

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<h1 className={styles.header__container__title}>
					Nasza strona jest w trakcie tworzenia...
				</h1>
			</div>
		</header>
	)
}

export default Header
