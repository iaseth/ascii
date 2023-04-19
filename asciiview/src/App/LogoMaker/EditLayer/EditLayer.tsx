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
	{title: "Color", icon: "home"},
	{title: "Font", icon: "home"},
	{title: "Move", icon: "home"},
	{title: "Size", icon: "square"},
];

const bottomTabs: TabData[] = [
	{title: "Rotate", icon: "home"},
	{title: "Foo", icon: "home"},
	{title: "Export", icon: "home"},
	{title: "Options", icon: "settings"},
];

const tabs = [...topTabs, ...bottomTabs];

export default function EditLayer ({closeLogoMaker}: EditLayerProps) {
	const [currentTabTitle, setCurrentTabTitle] = React.useState("");

	return (
		<article className="absolute top-0 left-0 h-full w-full flex flex-col">
			<header className="bg-slate-100">
				<TabBar tabs={topTabs} {...{currentTabTitle, setCurrentTabTitle}} />
			</header>

			<main className="grow"></main>

			<footer className="bg-slate-100">
				<TabBar tabs={bottomTabs} {...{currentTabTitle, setCurrentTabTitle}} />
			</footer>
		</article>
	);
}
