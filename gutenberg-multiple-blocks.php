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
	$assets = include_once __DIR__ . '/blocks/user-form/build/index.asset.php';

	wp_register_script(
		'guten-multi-user-form',
		plugins_url('./blocks/user-form/build/index.js', __FILE__),
		$assets['dependencies'],
		$assets['version']
	);

	wp_register_style(
		'guten-multi-user-form',
		plugins_url('./blocks/user-form/build/style-index.css', __FILE__),
		array(),
		$assets['version']
	);

	register_block_type(
		'guten-multi/user-form',
		array(
			'editor_script' => 'guten-multi-user-form',
			'style' => 'guten-multi-user-form'
		)
	);
}

add_action('init', 'register_user_form_block');



