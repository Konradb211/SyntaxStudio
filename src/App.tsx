import { useEffect } from "react"
import AboutUs from "./components/AboutUs/AboutUs"
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects"
import Lenis from "lenis"
import Contact from "./components/Contact/Contact"

function App() {
	useEffect(() => {
		const lenis = new Lenis()
		const raf = (time: number) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])
	return (
		<>
			<Header />
			<main>
				<AboutUs />
				<Projects />
				<Contact />
			</main>
		</>
	)
}

export default App
