// blocks/latests/src/edit.js

import {__} from "@wordpress/i18n";
import {useBlockProps} from "@wordpress/block-editor";

const Edit = () => {
	const blockProps = useBlockProps();
	return <p {...blockProps}>Placeholder for the backend</p>;
}

export default Edit;
