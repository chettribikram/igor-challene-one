import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { quote, authorName, jobTitle } = attributes;

	return (
		<Fragment>
			<div {...useBlockProps({ className: "igor-testimonial-block" })}>
				<RichText
					tagName="p"
					placeholder={__("Write client quote here")}
					aria-label={__("Write client quote here")}
					value={quote}
					onChange={(value) => setAttributes({ quote: value })}
				/>
				<RichText
					tagName="h3"
					placeholder={__("Write Author Name")}
					aria-label={__("Write Author Name")}
					value={authorName}
					onChange={(value) => setAttributes({ authorName: value })}
				/>
				<RichText
					tagName="p"
					placeholder={__("Write Author Job Title")}
					aria-label={__("Write Author Job Title")}
					value={jobTitle}
					onChange={(value) => setAttributes({ jobTitle: value })}
				/>
			</div>
		</Fragment>
	);
}
