import BannerImg from "../assets/banner.jpg";
import Button from "./ui/Button";

const Hero = () => {
	return (
		<section
			className="h-screen bg-slate-100 flex items-center justify-center text-center bg-no-repeat bg-center bg-cover after:content-[''] after:absolute after:bg-gradient-to-t after:from-black after:w-full after:h-full after:z-5"
			style={{ backgroundImage: `url(${BannerImg})` }}
		>
			<div className="px-4 z-10">
				<h6 className="text-2xl font-extrabold text-white">
					Educated & Experienced
				</h6>
				<h1 className="text-4xl sm:text-7xl font-extrabold uppercase my-3 text-white">
					LAWN STYLIST
				</h1>
				<p className="texl-lg font-extrabold text-white">
					We provide exceptional landscaping services to a wide range of
					<br />
					technologies residential for over 40 years
				</p>

				<div className="mt-8">
					<Button label="Met our team" size="large" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
