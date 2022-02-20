import React from 'react';
import { Route, Routes} from 'react-router-dom';
import {Login} from './components/Login/Login.tsx'
// import Web from './components/Web3/Web3';

export default (
	<Routes>
		<Route element={<Login text='Hello World'/>} path='/' />
		{/* <Route element={<Web />} path='/' */}
	</Routes>
);