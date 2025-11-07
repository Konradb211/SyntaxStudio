import { Technologies } from "../../constants/technologies"
import Title from "../Title/Title"
import styles from "./AboutUs.module.scss"

const AboutUs = () => {
	return (
		<section className={styles.aboutUs}>
			<div className={styles.aboutUs__container}>
				<div className={styles.aboutUs__container__left}>
					<Title>O nas</Title>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
						fuga in maiores iure ratione quod. Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Nisi cupiditate ex, exercitationem
						delectus, est fugiat sed unde ad error nostrum sapiente aut
						repellendus blanditiis nam sint, ipsam voluptatem repudiandae illo
						voluptatum architecto earum? Molestiae eum est accusamus quasi,
						tenetur natus!
					</p>
				</div>
				<div className={styles.aboutUs__container__right}>
					<div className={styles.aboutUs__container__right__technologies}>
						{Technologies.map(item => (
							<img src={item.src} alt={item.alt} />
						))}
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
						fuga in maiores iure ratione quod. Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Nisi cupiditate ex, exercitationem
						delectus, est fugiat sed unde ad error nostrum sapiente aut
						repellendus blanditiis nam sint, ipsam voluptatem repudiandae illo
						voluptatum architecto earum? Molestiae eum est accusamus quasi,
						tenetur natus!
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
