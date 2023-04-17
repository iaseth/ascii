


interface CodePointProps {
	codePoint: number
}

export default function CodePoint ({codePoint}: CodePointProps) {
	const ch = String.fromCharCode(codePoint);

	return (
		<div className="bg-white text-center">
			<header className="px-4 py-4">
				<div className="h-8 w-6 mx-auto">
					<h1 className="">{ch}</h1>
				</div>
				<h4>{codePoint}</h4>
			</header>
		</div>
	);
}
