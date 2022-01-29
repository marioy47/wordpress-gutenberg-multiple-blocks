// blocks/mylatests/src/edit.js

import {__} from "@wordpress/i18n";
import {useBlockProps, InspectorControls} from "@wordpress/block-editor";
import apiFetch from "@wordpress/api-fetch";
import {useState, useEffect} from "@wordpress/element";
import {Panel, PanelBody, SelectControl} from "@wordpress/components";

const postsPath = "/wp/v2/posts";
const catsPath = "/wp/v2/categories?hide_empty=true";

const Edit = () => {
	const [cats, setCats] = useState([]);
	const [posts, setPosts] = useState([]);

	useEffect( async () => {
		const fetchedCats = await apiFetch({path: catsPath});
		setCats( fetchedCats.map( c => ({label: c.name, value: c.id})));
	}, []);

	useEffect( async () => {
		const fetchedPosts = await apiFetch({path: postsPath});
		setPosts(fetchedPosts);
	}, []);

	if ( posts.length === 0 ) {
		return <div {...useBlockProps()}>Loading posts</div>;
	}

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<SelectControl
							label={__("Select the category", "gutenberg-multi")}
							options={cats}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...useBlockProps()}>
				<h3>My latests posts</h3>
				<ul className="mylatests-list">
					{ posts.map( (post) => (
						<li key={post.id}>
							<a href={post.link}>{post.title.rendered}</a>
						</li>
					))}
				</ul>
			</div>

		</>
	);
}

export default Edit;
