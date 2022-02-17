import React from "react";
import { Link } from "react-router-dom";

export const Links =()=>{
	return (
		<div>
			<Link to='/'>
				<button> home </button>
			</Link>
			<Link to="/splash">
        <button> splash </button>
      </Link>
      <Link to="/settings">
        <button> settings </button>
      </Link>
		</div>
	)
}