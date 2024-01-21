import React from "react";
import "./Card.css";

const Card = ({ id, img, title, category }) => {
	return (
		<li
			className={`card card${id}`}
			style={{ "--index": id }}
		>
			<div
				className='card-body'
				style={{
					backgroundImage: `url(${img})`,
					backgroundSize: "cover",
				}}
			>
				<div className='btnCard'>
					<h1 className="title"> {title}</h1>
					<p className="category"> {category}</p>
					<div className='btn'>
						<span className='text'>VIEW DETAILS</span>
						<span className='arrow'> 11 </span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Card;
