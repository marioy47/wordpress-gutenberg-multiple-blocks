// blocks/today/src/save.js

import {__} from "@wordpress/i18n";

const Save = (params) => {
	return (
		<>
			<h3>{__("Block parammeters", "gutenberg-multi")}</h3>
			<pre>{JSON.stringify(params, null, 4)}</pre>
		</>
	);
};

export default Save;
