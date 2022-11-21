import { services } from "../assets/data/services";
import Service from "./Service";

const Services = () => {
	return (
		<div className="-mt-20 mb-24">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-8">
					{services.map((item) => (
						<Service key={item.id} service={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
