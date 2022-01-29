// blocks/mylatests/src/index.js

import {registerBlockType} from "@wordpress/blocks";
import blockMeta from "../block.json";
import edit from "./edit";


registerBlockType( blockMeta, {
	edit,
	save: () => null
});
