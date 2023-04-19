


interface LogoProps {
	ch: string,
	fontFamily: string,
	fontSize: number,
	fontWeight: number,
}

export default function Logo ({
	ch, fontFamily, fontSize, fontWeight
}: LogoProps) {
	const style = {
		fontFamily, fontSize, fontWeight
	};

	return (
		<div className="w-64 h-64 m-auto bg-blue-500 text-white text-center overflow-hidden">
			<h2 style={style}>ch</h2>
		</div>
	);
}
