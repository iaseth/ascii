


interface CodePointProps {
	codePoint: number
}

export default function CodePoint ({codePoint}: CodePointProps) {
	const ch = String.fromCharCode(codePoint);

	return (
		<div className="bg-white text-center">
			<header className="px-4 py-6">
				<h1>{ch}</h1>
				<h2>{codePoint}</h2>
			</header>
		</div>
	);
}
