


interface CodePointProps {
	codePoint: number
}

export default function CodePoint ({codePoint}: CodePointProps) {
	const ch = String.fromCharCode(codePoint);

	return (
		<div className="relative group py-4 bg-white text-center overflow-hidden select-none">
			<div className="absolute -top-8 -right-8 border-[12px] border-l-transparent border-b-transparent duration-300 group-hover:top-0 group-hover:right-0 border-blue-700"></div>

			{/* left and bottom border */}
			<div className="absolute h-full w-0.5 left-0 -bottom-full duration-300 group-hover:bottom-0 bg-blue-700"></div>
			<div className="absolute w-full h-0.5 bottom-0 -left-full duration-300 group-hover:left-0 bg-blue-700"></div>

			{/* right and top border */}
			<div className="absolute h-full w-0.5 right-0 -top-full duration-300 group-hover:top-0 bg-blue-700"></div>
			<div className="absolute w-full h-0.5 top-0 -right-full duration-300 group-hover:right-0 bg-blue-700"></div>

			<header className="px-4">
				<h4>{codePoint}</h4>
			</header>

			<main className="py-1">
				<div className="h-8 w-6 mx-auto flex">
					<h1 className="m-auto">{ch}</h1>
				</div>
			</main>

			<footer>
				<h4 className="pt-1">0010100</h4>
			</footer>
		</div>
	);
}
