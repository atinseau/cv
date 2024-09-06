import cv from "../../../cv.yaml"

import CursusItem from "./CursusItem"
import ExperienceItem from "./ExperienceItem"

export default function Body() {
	return (<div className="body">
		<div className="left">

			<div className="skills">
				<h1>Compétences</h1>
				<h3>Technologies</h3>
				<ul>{cv.skills.tech.map((t, i) => <li key={i} children={t} />)}</ul>
				<h3>Qualités</h3>
				<ul>{cv.skills.quality.map((p, i) => <li key={i} children={p} />)}</ul>
			</div>

			<div className="education">
				<h1>Cursus</h1>
				{cv.cursus.map((cursus, i) => <CursusItem
					item={cursus}
					key={i}
				/>)}
			</div>
			<div className="langue">
				<h1>Langue</h1>
				<ul>{cv.languages.map((l, i) => <li key={i} dangerouslySetInnerHTML={{ __html: l }} />)}</ul>
			</div>
		</div>
		<div className="right">
			<div className="experience">
				<h1>Mes expériences professionnelles</h1>
				<div className="container">
					{cv.experiences.map((experience, i) => <ExperienceItem item={experience} key={i} />)}
				</div>
			</div>
		</div>
	</div>)
}