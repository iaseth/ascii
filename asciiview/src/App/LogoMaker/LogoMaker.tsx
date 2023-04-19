import Logo from "./Logo/Logo";



interface LogoMakerProps {
	currentCodePoint: number,
	closeLogoMaker: () => void
}

export default function LogoMaker ({currentCodePoint, closeLogoMaker}: LogoMakerProps) {
	const ch = String.fromCharCode(currentCodePoint);

	return (
		<div className="min-h-screen bg-slate-100 flex flex-col">
			<header className="bg-slate-100 px-4 py-4">
				<h4 onClick={closeLogoMaker}>Close</h4>
			</header>

			<main className="grow bg-slate-200 flex">
				<Logo {...{ch}} />
			</main>

			<footer className="bg-slate-100 px-4 py-4">
				<h4>Footer</h4>
			</footer>
		</div>
	);
}
