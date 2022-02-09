import React, { useContext, useState } from "react";
import axios from "axios";

const User = () => {
const [toggle, setToggle] = useState(false);
// const { user, setUser } = useContext(UserContext);
	const removeUsername = () => {
		try {
			// axios.put(`/api/auth/remove/${user.id}`);
			// toast.success("Username removed!");
		} catch (err) {
			console.log(err);
		}
	};
	const handleToggle = () => {
		setToggle(!toggle);
	};

return (
<button
onClick={() => {
	const confirmBox = window.confirm(
		"Select OK if you want to remove your username."
	);
	if (confirmBox) {
		removeUsername();
	}}}>
Delete
</button>
)}

export default User;