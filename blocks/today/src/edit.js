// blocks/today/src/edit.js

import {__} from "@wordpress/i18n";
import {RichText} from "@wordpress/block-editor";
import "./edit.scss"

const Edit = (params) => {
	const {
		className,
		isSelected,
		attributes: {blockTitle, afterContent},
		setAttributes
	} = params;
	return (
		<>
			<div className={isSelected ? `${className} selected`: className}>
				<RichText
					tagName="h2"
					placeholder={__("Block title", "gutenberg-multi")}
					className="gutenberg-multi-title"
					value={blockTitle}
					onChange={(txt) => setAttributes({blockTitle: txt})}
				/>
				<pre>{JSON.stringify(params, null, 2)}</pre>
				<RichText
					tagName="em"
					placeholder={__("Content after the information", "gutenberg-multi")}
					className="gutenberg-multi-after"
					value={afterContent}
					onChange={(txt) => setAttributes({afterContent: txt})}
				/>
			</div>
		</>
	);
};

export default Edit;
