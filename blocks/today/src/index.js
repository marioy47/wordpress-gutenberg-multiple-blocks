// blocks/today/src/index.js

import {__} from "@wordpress/i18n";
import {registerBlockType} from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";

registerBlockType("gutenberg-multi/today", {
	title: __("Show blocks creation date", "gutenberg-multi"),
	category: "widgets",
	icon: "calendar",
	edit,
	save,
	attributes: {
		blockTitle: {
			source: "html",
			selector: "h3",
			default: __("Enter the block title", "gutenberg-multi")
		},
		afterContent: {
			source: "string",
			selector: "em",
			default: __("Content after the options", "gutenberg-multi"),
		}
	},
	styles: [
		{
			name: "light",
			label: __("Light mode", "gutenberg-multi"),
			isDefault: true
		},
		{
			name: "dark",
			label: __("Dark mode", "gutenberg-multi")
		}
	]
});
