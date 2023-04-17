import 'miniwindcss';
import './App.css';
import AsciiView from './AsciiView/AsciiView';
import Footer from './Footer/Footer';
import Header from './Header/Header';



function App () {

	return (
		<div className="bg-slate-100 text-zinc-800">
			<Header />
			<AsciiView />
			<Footer />
		</div>
	)
}

export default App;
