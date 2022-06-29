import cv from "../../../cv.json"

import CursusItem from "./CursusItem"
import ExperienceItem from "./ExperienceItem"
import ProjectItem from "./ProjectItem"

export default function Body() {
	return (<div className="body">
		<div className="left">
			<div className="skills">
				<h1>Skills</h1>
				<h3>Professionnel</h3>
				<ul>{cv.skills.professional.map((p, i) => <li key={i} children={p} />)}</ul>
				<h3>Technologie</h3>
				<ul>{cv.skills.tech.map((t, i) => <li key={i} children={t} />)}</ul>
			</div>
			<div className="education">
				<h1>Cursus</h1>
				{cv.cursus.map((cursus, i) => <CursusItem
					item={cursus}
					key={i}
				/>)}
			</div>
			<div>
				<h1>Langue</h1>
				<ul>
					<li>Francais</li>
					<li>Anglais</li>
				</ul>
			</div>
		</div>
		<div className="right">
			<div className="experience">
				<h1>Experience</h1>
				<div className="container">
					{cv.experiences.map((experience, i) => <ExperienceItem item={experience} key={i} />)}
				</div>
			</div>
			<div className="ressource">
				<h1>Mes ressources</h1>
				<ul>
					{cv.projects.map((project, i) => <ProjectItem item={project} key={i} />)}
				</ul>
			</div>
		</div>
	</div>)
}