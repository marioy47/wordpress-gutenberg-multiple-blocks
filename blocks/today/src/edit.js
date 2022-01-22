// blocks/today/src/edit.js

import {__} from "@wordpress/i18n";
import "./style.scss"

const Edit = (params) => {
	const {className, isSelected} = params;
	return (
		<>
			<div className={isSelected ? `${className} selected`: className}>
				<h3>{__("Block parammeters", "gutenberg-multi")}</h3>
				<pre>{JSON.stringify(params, null, 4)}</pre>
				<h3>{__("Passed functions:", "gutenberg-multi")}</h3>
				<p>Type of setAttributes: {typeof params.setAttributes}</p>
			</div>
		</>
	);
};

export default Edit;
