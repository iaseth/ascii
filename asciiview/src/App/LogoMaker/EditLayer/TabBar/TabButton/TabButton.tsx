import { TabData } from "../../EditLayer";



interface TabButtonProps {
	tab: TabData,
	current: boolean,
	onClick: () => void
}

export default function TabButton ({tab, current, onClick}: TabButtonProps) {
	return (
		<div className={`px-2 py-3 ${current ? "text-blue-700" : "bg-slate-100"}`} onClick={onClick}>
			<header>
				<span className="material-symbols-outlined pt-1">{tab.icon}</span>
			</header>
			<footer>
				<h4>{tab.title}</h4>
			</footer>
		</div>
	);
}
