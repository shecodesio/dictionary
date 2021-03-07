import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Result.css";

export default function Result(props) {
	if (props.definition) {
		return (
			<div className="Result">
			<section>
				<h1>
					{props.definition.word}
				</h1>
				{props.definition.phonetics.map(function(phonetic) {
					return (
						<Phonetic phonetic={phonetic} />
					)
				})}
			</section>

				{props.definition.meanings.map(function(meaning) {
					return (
						<section>
							<Meaning meaning={meaning} />
						</section>
					)
				})}
				
			</div>
		)

	} else {
		return null;
	}
}