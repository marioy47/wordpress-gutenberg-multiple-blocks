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
		exampleAttribute: {
			source: "html",
			selector: "h3",
			default: __("This is a passed attribute", "guten-multi")
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
