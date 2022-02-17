import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login.ts'

export default (
	<Routes>
		<Route element={<Login title='Hello World'/>} path='/' />

	</Routes>
);