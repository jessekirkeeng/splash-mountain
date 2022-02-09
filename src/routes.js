import React from 'react';
import { Route, Routes} from 'react-router-dom';
import User from './components/User/User';
import Login from './components/Login/Login';

export default (
	<Routes>
		<Route element={<User />} path='/' />
		<Route element={<Login />} path='/login' />
	</Routes>
)