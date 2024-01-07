import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	example: {
		attributes: {
			quote:
				"I am amazed at the outstanding service and creativity provided by IgorBlocks. Their dedication to excellence has truly elevated our project to new heights. Working with them was a game-changer!",
			level: 3,
			authorName: "Emily Rodriguez",
			jobTitle: "Marketing Director",
		},
	},
	edit: Edit,
	save,
});
