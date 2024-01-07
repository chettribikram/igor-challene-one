import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { quote, authorName, jobTitle } = attributes;

	return (
		<div {...useBlockProps.save({ className: "igor-testimonial" })}>
			{quote && <RichText.Content tagName="p" value={quote} />}
			{authorName && <RichText.Content tagName="h3" value={authorName} />}
			{jobTitle && <RichText.Content tagName="p" value={jobTitle} />}
		</div>
	);
}
