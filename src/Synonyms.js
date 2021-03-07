import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {

	if (props.synonyms) {
		return (
			<div class="Synonyms">
			<strong>
				Similar:
				</strong>
				
				<ul>
			{props.synonyms.map(function(synonym) {
				return <li>{synonym}</li>;
				
			})}
			</ul>
			</div>
		)

	} else {
		return null;
	}
}