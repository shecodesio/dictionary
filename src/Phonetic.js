import React from "react";

export default function Phonetic(props) {
	if (props.phonetic) {
		return (
			<div className="Phonetic">
				

					<h2>
						{props.phonetic.text}
					</h2>
					<p>
						<a href={props.phonetic.audio} target="_blank"  rel="noopener noreferrer">Audio</a>
						
					</p>
				
			</div>
		)

	} else {
		return null;
	}
}