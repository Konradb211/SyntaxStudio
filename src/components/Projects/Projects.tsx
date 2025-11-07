import { ProjectsT } from "../../constants/projects"
import Title from "../Title/Title"
import styles from "./Projects.module.scss"

const Projects = () => {
	return (
		<div className={styles.projects}>
			<div className={styles.projects__container}>
				<Title>Nasze projekty</Title>
				<div className={styles.projects__container__items}>
					{ProjectsT.map(item => (
						<div className={styles.projects__container__items__item}>
							<img src={item.src} alt={item.title} />
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
