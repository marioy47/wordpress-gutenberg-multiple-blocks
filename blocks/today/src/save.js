// blocks/today/src/save.js

import {__} from "@wordpress/i18n";
import "./save.scss";

const Save = (params) => {
	const {attributes: {className=""}} = params;
	return (
		<>
			<div class={`today ${className}`}>
				<h3>{__("Block parammeters", "gutenberg-multi")}</h3>
				<pre>{JSON.stringify(className, null, 4)}</pre>
			</div>
		</>
	);
};

export default Save;
