import React from "react";
import EditLayer from "./EditLayer/EditLayer";
import Logo from "./Logo/Logo";



interface LogoMakerProps {
	currentCodePoint: number,
	closeLogoMaker: () => void
}

export default function LogoMaker ({currentCodePoint, closeLogoMaker}: LogoMakerProps) {
	const ch = String.fromCharCode(currentCodePoint);

	const [fontFamily, setFontFamily] = React.useState("Ubuntu");
	const [fontSize, setFontSize] = React.useState(100);
	const [fontWeight, setFontWeight] = React.useState(400);

	return (
		<div className="relative min-h-screen bg-slate-100 flex flex-col">
			<EditLayer {...{closeLogoMaker}} />

			<main className="grow bg-slate-200 flex">
				<Logo {...{ch, fontFamily, fontSize, fontWeight}} />
			</main>
		</div>
	);
}
