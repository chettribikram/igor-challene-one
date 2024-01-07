<?php

/**
 * Plugin Name:       Igor Challenge One
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       igor-challenge-one
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

if (!class_exists('IgorChallengeOne')) {
    class IgorChallengeOne
    {
        public function __construct()
        {
            add_action('init', array($this, 'igor_blocks_init'));

            if (version_compare($GLOBALS['wp_version'], '5.7', '<')) {
                add_filter('block_categories', array($this, 'igorblocks_do_category'), 10, 1);
            } else {
                add_filter('block_categories_all', array($this, 'igorblocks_do_category'), 10, 1);
            }
        }

        public function igor_register_block($name, $options = array())
        {
            register_block_type(__DIR__ . '/build/' . $name, $options);
        }


        public function igor_blocks_init()
        {
            $this->igor_register_block('testimonial');
            // $this->igor_register_block('fetch-post');
            $this->igor_register_block('accordion');
        }

        public function igorblocks_do_category($categories)
        {
            return array_merge(
                array(
                    array(
                        'slug' => 'igorblocks',
                        'title' => __('IgorBlocks', 'igor-challenge-one')
                    )
                ),
                $categories
            );
        }
    }
}

if (class_exists('IgorChallengeOne')) {
    $igorChallengeOne = new IgorChallengeOne();
}
