// blocks/today/src/index.js

import {__} from "@wordpress/i18n";
import {registerBlockType} from "@wordpress/blocks";

registerBlockType("gutenberg-multi/today", {
	title: __("Show blocks creation date", "gutenberg-multi"),
	category: "widgets",
	icon: "calendar",
	edit: () => <h2>Show todays day (Backend)</h2>,
	save: () => <h2>Show todays day (Frontend)</h2>
});
