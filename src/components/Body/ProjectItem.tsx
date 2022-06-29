import { FC } from "react";

interface ProjectItem {
	title: string
	desc: string
	link: string
}

const ProjectItem: FC<{ item: ProjectItem }> = ({ item }) => {
	return (<li>
		<h3>{item.title}</h3>
		<p>{item.desc}</p>
		<a href={item.link}>{item.link.replace('https://', '')}</a>
	</li>)
}

export default ProjectItem;