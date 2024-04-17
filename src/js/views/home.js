import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Personajes } from "../component/personajes";
import { Planetas } from "../component/planetas";
import { Naves } from "../component/naves";
import { Link } from "react-router-dom";


export const Home = () => ( 
	
	<div className="text-center mt-5">
		<Personajes />
		<Planetas />
		<Naves />		
	</div>
);
