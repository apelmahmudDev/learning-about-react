import { createContext, useState } from "react";

export const ColorContext = createContext({});

const ColorProvider = ({ children }) => {
	const [bgColor, setBgColor] = useState({ bgColor: "#000" });

	return (
		<ColorContext.Provider value={bgColor}>{children}</ColorContext.Provider>
	);
};

export default ColorProvider;
