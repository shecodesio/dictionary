import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary() {
	const [keyword, setKeyword] = useState(null);
	const [definition, setDefinition] = useState(null);
	const [photos, setPhotos] = useState([]);

	function handleImages(response) {
		setPhotos(response.data.photos)
	}

	function changeWord(word) {
		setKeyword(word);
		search();
	}


	function handleResponse(response) {
		setDefinition(response.data[0]);
		let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=6`;
		let apiKey = "563492ad6f91700001000001fcd94c1777b243de94bf7f60bc16a402"
		axios.get(apiUrl, { headers: {"Authorization" : `Bearer ${apiKey}`} }).then(handleImages);
	}

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={handleSubmit}>
				<input type="search" placeholder="Enter a word.." className="form-control search-input" autoFocus={true} onChange={handleKeywordChange} />
			</form>
			<Result definition={definition} changeWord={changeWord} />
			<Photos photos={photos} />
		</div>
	)
}
