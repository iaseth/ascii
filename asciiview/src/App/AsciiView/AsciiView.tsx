import React from "react";
import CodePoint from "./CodePoint/CodePoint";



export default function AsciiView () {
	// x is the first codepoint
	const [x, setX] = React.useState(0);
	// n is the number of codepoints displayed on one page
	const [n, setN] = React.useState(128);
	const codePoints = [...Array(n).keys()].map(k => x+k);

	return (
		<div>
			<header className="text-center py-12">
				<h2>AsciiView</h2>
			</header>

			<main>
				<section className="grid gap-1 p-1 grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
					{codePoints.map(codePoint => <CodePoint {...{codePoint}} />)}
				</section>
			</main>
		</div>
	);
}
