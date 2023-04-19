import 'miniwindcss';
import React from 'react';
import './App.css';
import AsciiView from './AsciiView/AsciiView';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import LogoMaker from './LogoMaker/LogoMaker';



function App () {
	const [currentCodePoint, setCurrentCodePoint] = React.useState(0);

	if (currentCodePoint) {
		return (
			<LogoMaker currentCodePoint={currentCodePoint}
				closeLogoMaker={() => setCurrentCodePoint(0)} />
		);
	}

	return (
		<div className="bg-slate-100 text-zinc-800">
			<Header />
			<AsciiView {...{setCurrentCodePoint}} />
			<Footer />
		</div>
	)
}

export default App;
