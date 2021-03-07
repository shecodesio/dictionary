import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	if (props.meaning) {
		return (
			<div className="Meaning">
					{props.meaning.definitions.map(function(definition) {
						return (
							<div>
								<h2>
									{definition.definition}
								</h2>
								<p>
									{definition.example}
								</p>
								<p>
									<Synonyms synonyms={definition.synonyms} changeWord={props.changeWord} />
								</p>
							</div>
						)	
					})}
					
					<small>
						{props.meaning.partOfSpeech}
					</small>
				
			</div>
		)

	} else {
		return null;
	}
}