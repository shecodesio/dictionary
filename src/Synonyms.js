import React from "react";

export default function Synonyms(props) {
	function changeWord(event) {
		props.changeWord(event.target.innerHTML);
	}
	if (props.synonyms) {
		return (
			<div>
			{props.synonyms.map(function(synonym) {
				return (
					<div onClick={changeWord}>
						{synonym}
					</div>
				)
				
			})}
			</div>
		)

	} else {
		return null;
	}
}