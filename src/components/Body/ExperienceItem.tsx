import { FC } from "react";

interface ExperienceItem {
	date: string,
	title: string,
	desc: string,
	stacks: string[]
}

const ExperienceItem: FC<{ item: ExperienceItem }> = ({ item }) => {
	return (<div className="item">
		<h2>{item.date}</h2>
		<h1 dangerouslySetInnerHTML={{ __html: item.title}}/>
		<p dangerouslySetInnerHTML={{__html: item.desc}}/>
		<h4>
			Stack:
			{item.stacks.map((stack, i) => <span key={i}>{stack}</span>)}
		</h4>
	</div>)
}

export default ExperienceItem;