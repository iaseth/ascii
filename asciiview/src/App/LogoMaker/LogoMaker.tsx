


interface LogoMakerProps {
	currentCodePoint: number,
	closeLogoMaker: () => void
}

export default function LogoMaker ({currentCodePoint, closeLogoMaker}: LogoMakerProps) {
	return (
		<div className="min-h-screen bg-blue-500 px-4 py-4">
			<header>
				<h4 onClick={closeLogoMaker}>Close</h4>
			</header>
			<h4>LogoMaker</h4>
		</div>
	);
}
