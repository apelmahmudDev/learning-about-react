const Button = ({ label, size = "small" }) => {
	return (
		<button
			className={`uppercase rounded-full bg-primary px-7 py-${
				size === "small" ? 2 : 4
			} font-semibold text-white text-sm active:bg-primary active:text-white hover:bg-white hover:text-primary`}
		>
			{label}
		</button>
	);
};

export default Button;
