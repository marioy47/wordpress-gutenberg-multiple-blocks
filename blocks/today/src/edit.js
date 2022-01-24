// blocks/today/src/edit.js

import {__} from "@wordpress/i18n";
import {RichText, InspectorControls} from "@wordpress/block-editor";
import {Panel, PanelBody, SelectControl, TextareaControl} from "@wordpress/components";
import "./edit.scss"

const Edit = (params) => {
	const {
		className,
		isSelected,
		attributes: {blockTitle, afterContent, blockContent, blockContentType},
		setAttributes
	} = params;
	const innerTypes = [
		{ value: "dump", label: "Attributes as JSON" },
		{ value: "custom", label: "Custom text" }
	];

	const innerContent = blockContentType == "dump" ? 
		JSON.stringify(params, null, 2) : blockContent;
	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<SelectControl
							label={__("Inner content type", "guetmberg-multi")}
							options={innerTypes}
							value={blockContentType}
							onChange={(val) => setAttributes({blockContentType: val})}
						/>
						<TextareaControl
							label={__("Custom text", "gutenberg-multi")}
							value={blockContent}
							onChange={(txt) => setAttributes({blockContent: txt})}
							readOnly={blockContentType == "dump" ? true: false}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div className={isSelected ? `${className} selected`: className}>
				<RichText
					tagName="h2"
					placeholder={__("Block title", "gutenberg-multi")}
					className="gutenberg-multi-title"
					value={blockTitle}
					onChange={(txt) => setAttributes({blockTitle: txt})}
				/>
				<pre>{innerContent}</pre>
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
