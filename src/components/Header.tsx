import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import profil from "../images/profil.png"

import cv from "../../cv.yaml"

export default function Header() {
	return <div className="header">
		<div className="left">
			<div className="contact">
				<h3><span>Tél:</span>{cv.tel}</h3>
				<a href={"mailto:" + cv.email}>
					<h3><span>Email:</span> {cv.email}</h3>
				</a>
				<h3>{cv.address}</h3>
			</div>
			<div className="logo">
				<a target={"_blank"} href={cv.github}>
					<img src={github} />
					<p>{cv.github.replace('https://', '')}</p>
				</a>
				<a target={"_blank"} href={cv.linkedin}>
					<img src={linkedin} />
					<p>{cv.linkedin.replace('https://', '')}</p>
				</a>
			</div>
			<div className="desc">
				<h1>Profil</h1>
				<p>{cv.profil}</p>
			</div>
		</div>
		<div className="right">
			<div>
				<h1>{cv.firstname}</h1>
				<h1>{cv.lastname}</h1>
			</div>
			<img className="" src={profil} />
			<p className="under">{cv.job}</p>
		</div>
	</div>
}