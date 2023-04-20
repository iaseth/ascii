import React from "react";
import TabBar from "./TabBar/TabBar";



interface EditLayerProps {
	closeLogoMaker: () => void
}

export interface TabData {
	title: string,
	icon: string
}

const topTabs: TabData[] = [
	{title: "Color", icon: "palette"},
	{title: "Font", icon: "format_size"},
	{title: "Move", icon: "open_with"},
	{title: "Rotate", icon: "rotate_left"},
	{title: "Size", icon: "straighten"},
];

const bottomTabs: TabData[] = [
	{title: "Layers", icon: "layers"},
	{title: "History", icon: "work_history"},
	{title: "Vault", icon: "folder_special"},
	{title: "Export", icon: "download"},
	{title: "Options", icon: "settings"},
];

const tabs = [...topTabs, ...bottomTabs];

export default function EditLayer ({closeLogoMaker}: EditLayerProps) {
	const [currentTabTitle, setCurrentTabTitle] = React.useState("");
	const toggleTab = (title: string) => {
		if (currentTabTitle === title) {
			setCurrentTabTitle("");
		} else {
			setCurrentTabTitle(title);
		}
	};

	return (
		<article className="absolute top-0 left-0 h-full w-full flex flex-col">
			<header className="bg-slate-100">
				<TabBar tabs={topTabs} {...{currentTabTitle, toggleTab}} />
			</header>

			<main className="grow"></main>

			<footer className="bg-slate-100">
				<TabBar tabs={bottomTabs} {...{currentTabTitle, toggleTab}} />
			</footer>
		</article>
	);
}
