import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
	const [userProfile, setUserProfile] = useState({
		name: "Maliha",
		number: "25998633",
		img: "https://plus.unsplash.com/premium_photo-1664285652161-e25579afdccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	});

	return <UserContext.Provider value="Anik">{children}</UserContext.Provider>;
};

export default UserProvider;
