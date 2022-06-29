import { FC } from "react";

interface CursusItem {
	date: string
	title: string
	desc: string
}

const CursusItem: FC<{ item: CursusItem}> = ({ item }) =>  {
	return (<div className="item">
		<h2>{item.date}</h2>
		<h1>{item.title}</h1>
		<p>{item.desc}</p>
	</div>)
}

export default CursusItem;