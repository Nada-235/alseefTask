import React from 'react';
import Card from "../components/home/Card";
import pro1 from '../assets/Img/1.Project.jpeg'
import pro2 from "../assets/Img/2.Project.jpeg";
import pro3 from "../assets/Img/3.Project.jpeg";



function Home() {

  const cards = [
		{
			id: 1,
			img: pro1,
			title: "Website Redesign",
			category: "Design",
		},
		{
			id: 2,
			img: pro2,
			title: "Brand Identity",
			category: "Branding",
		},
		{
			id: 3,
			img: pro3,
			title: "Development",
			category: "Development",
		},
	];
  
  return (
		<>
			<ul id='cards'>
				{cards.map((card) => (
					<Card
						key={card.id}
						{...card}
					/>
				))}
			</ul>
		</>
	);
}

export default Home