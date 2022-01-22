// blocks/today/src/edit.js

import {__} from "@wordpress/i18n";

const Edit = (params) => {
	return (
		<>
			<h3>{__("Block parammeters", "gutenberg-multi")}</h3>
			<pre>{JSON.stringify(params, null, 4)}</pre>
			<h3>{__("Passed functions:", "gutenberg-multi")}</h3>
			<p>Type of setAttributes: {typeof params.setAttributes}</p>
		</>
	);
};

export default Edit;
