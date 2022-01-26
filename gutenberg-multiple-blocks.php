<?php
/**
 * Gutenberg Multiple Blocks Example
 *
 * @package           GutenMultiBlocks
 * @author            Mario Yepes
 * @copyright         2022 Mario Yepes
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Gutenberg Multiple Blocks Example
 * Plugin URI:        https://marioyepes.com
 * Description:       Tutorial on how to add multiple blocks to one Gutenbert plugin
 * Version:           1.0.0
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Author:            Mario Yepes
 * Author URI:        https://marioyepes.com
 * Text Domain:       gutenberg-multiple-blocks
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Update URI:        https://example.com/my-plugin/
 */

function register_user_form_block() {
	$assets = include_once __DIR__ . '/blocks/today/build/index.asset.php';

	wp_register_script(
		'gutenberg-multi-today',
		plugins_url('./blocks/today/build/index.js', __FILE__),
		$assets['dependencies'],
		$assets['version']
	);

	wp_register_style(
		'gutenberg-multi-today',
		plugins_url('./blocks/today/build/index.css', __FILE__),
		array(),
		$assets['version']
	);

	register_block_type(
		'gutenberg-multi/today',
		array(
			'editor_script' => 'gutenberg-multi-today',
			'style' => 'gutenberg-multi-today',
		)
	);
}

add_action('init', 'register_user_form_block');


add_action('init', 'register_mylatests_block');

function register_mylatests_block() {
	register_block_type(
		__DIR__ . '/blocks/mylatests',
		array(
			'render_callback' => 'render_mylatests_block',
		)
	);
}

function render_mylatests_block($attributes, $content) {
	return '<p>My latest news block placeholder</p>';
}

