import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
	if (props.definition) {
		return (
			<div className="Result">
				<h1>
					{props.definition.word}
				</h1>
				{props.definition.phonetics.map(function(phonetic) {
					return (
						<div>
							<Phonetic phonetic={phonetic} />
						</div>
					)
				})}
				{props.definition.meanings.map(function(meaning) {
					return (
						<div>
							<Meaning meaning={meaning} changeWord={props.changeWord} />
						</div>
					)
				})}
				
			</div>
		)

	} else {
		return null;
	}
}