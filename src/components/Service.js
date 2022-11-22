import React, { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import Button from "./ui/Button";

const Service = (props) => {
	const { content, img, btnLabel, items } = props.service;
	const {
		userProfile: { number },
	} = useContext(UserContext);

	return (
		<div className="flex gap-2 sm:max-h-72 flex-col sm:flex-row z-10 group/elements group/item">
			<div className="flex flex-col gap-2">
				<div className="bg-primary py-8 px-6 w-full sm:min-w-48">
					<i className="fa-solid fa-house-fire text-5xl mb-4 text-white"></i>
					<p className="font-extralight text-xl text-white font-nunito">
						{content}
					</p>
				</div>
				<button className="text-secondary font-semibold text-sm uppercase bg-light px-6 py-4">
					{btnLabel}
				</button>
				<Button label={number} />
			</div>

			<div className="relative w-full max-h-72">
				<img className="w-full h-full object-cover" src={img} alt="plant" />

				<div className="absolute top-0 left-0 bg-black bg-opacity-0 w-full h-full p-8 overflow-hidden invisible group-hover/elements:visible group-hover/elements:bg-opacity-80 transition-all ease-in-out duration-500">
					<ul className="">
						{items.map((item) => (
							<li className="relative -left-full group-hover/item:left-0 ease-in-out duration-150 text-white flex gap-2 items-center my-3">
								<i className="fa-solid fa-cannabis text-green-600"></i>
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Service;
