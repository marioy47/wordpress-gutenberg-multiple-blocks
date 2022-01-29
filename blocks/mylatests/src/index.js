// blocks/mylatests/src/index.js

import {registerBlockType} from "@wordpress/blocks";
import {useBlockProps} from "@wordpress/block-editor";
import blockMeta from "../block.json";


registerBlockType( blockMeta, {
	edit: () => <p {...useBlockProps()}>Placeholder for the backend</p>,
	save: () => null
});
