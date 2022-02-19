import React from 'react';
import { Route, Routes} from 'react-router-dom';
import {Login} from './components/Login/Login.tsx'

export default (
	<Routes>
		<Route element={<Login text='Hello World'/>} path='/' />

	</Routes>
);