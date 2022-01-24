// blocks/today/src/save.js

import {__} from "@wordpress/i18n";
import {RichText} from "@wordpress/block-editor"
import "./save.scss";

const Save = (params) => {
	const {
		attributes: {className="", blockTitle, afterContent},
	} = params;
	return (
		<>
			<div class={`today ${className}`}>
				<RichText.Content
					tagName="h2"
					className="gutenberg-multi-block-title"
					value={blockTitle}
				/>
				<pre>{JSON.stringify(className, null, 4)}</pre>
				<RichText.Content
					tagName="em"
					className="gutenberg-multi-after-content"
					value={afterContent}
				/>
			</div>
		</>
	);
};

export default Save;
