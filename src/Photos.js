import React from "react";

export default function Photos(props) {
	console.log(props.photos)
	if (props.photos) {
		return (
			<div className="Photos">
				{props.photos.map(function(photo) {
					
					return (
						<div>
						<img src={photo.src.landscape} />
						</div>
					)
				})}
			</div>
		)

	} else {
		return null;
	}
}