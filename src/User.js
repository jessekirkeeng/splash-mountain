import React, { useContext, useState } from "react";
import axios from "axios";

	const removeUsername = () => {
		try {
			axios.put(`/api/auth/remove/${user.id}`);
			toast.success("Username removed!");
		} catch (err) {
			console.log(err);
		}
	};

return (
<Button
onClick={() => {
	const confirmBox = window.confirm(
		"Select OK if you want to remove your username."
	);
	if (confirmBox) {
		removeUsername();
	}}}>
Delete
</Button>
)