import Title from "../Title/Title"
import styles from "./Contact.module.scss"

const Contact = () => {
	return (
		<section className={styles.contact}>
			<div className={styles.contact__container}>
				<Title>Kontakt</Title>

				<form className={styles.contact__container__from} action=''>
					<div className={styles.contact__container__from__input}>
						<div className={styles.contact__container__from__input__text}>
							<input
								id='firstName'
								name='firstName'
								type='text'
								placeholder=' '
								required
							/>
							<label htmlFor='firstName'>Imię</label>
						</div>

						<div className={styles.contact__container__from__input__text}>
							<input
								id='lastName'
								name='lastName'
								type='text'
								placeholder=' '
								required
							/>
							<label htmlFor='lastName'>Nazwisko</label>
						</div>

						<div className={styles.contact__container__from__input__text}>
							<input
								id='email'
								name='email'
								type='email'
								placeholder=' '
								required
							/>
							<label htmlFor='email'>E-mail</label>
						</div>

						<div className={styles.contact__container__from__input__text}>
							<input id='phone' name='phone' type='tel' placeholder=' ' />
							<label htmlFor='phone'>Telefon</label>
						</div>
					</div>
					<div className={styles.contact__container__from__textarea}>
						<label htmlFor='text'>Skontaktuj się z nami</label>
						<textarea id='text' name='text' placeholder='' />
					</div>
				</form>
			</div>
		</section>
	)
}

export default Contact
