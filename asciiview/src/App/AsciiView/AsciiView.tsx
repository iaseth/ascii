import React from "react";
import CodePoint from "./CodePoint/CodePoint";
import ToolBar from "./ToolBar/ToolBar";



export default function AsciiView () {
	const [pageNumber, setPageNumber] = React.useState(0);
	const [pointsPerPage, setPointsPerPage] = React.useState(128);
	const codePoints = [...Array(pointsPerPage).keys()].map(k => (pageNumber*pointsPerPage)+k);

	return (
		<div className="max-w-5xl mx-auto">
			<ToolBar {...{pageNumber, setPageNumber, pointsPerPage, setPointsPerPage}} />

			<main className="p-1">
				<section className="grid gap-1 grid-cols-4 md:grid-cols-8">
					{codePoints.map(codePoint => <CodePoint key={codePoint} {...{codePoint}} />)}
				</section>
			</main>
		</div>
	);
}
