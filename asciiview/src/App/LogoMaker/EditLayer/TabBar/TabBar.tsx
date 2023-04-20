import React from "react";
import { TabData } from "../EditLayer";
import TabButton from "./TabButton/TabButton";



interface TabBarProps {
	tabs: TabData[],
	currentTabTitle: string,
	toggleTab: (title: string) => void
}

export default function TabBar ({tabs, currentTabTitle, toggleTab}: TabBarProps) {
	return (
		<header>
			<section className="flex ch:basis-0 ch:grow text-center bg-slate-300 space-x-0.5 select-none">
				{tabs.map((tab, k) => <TabButton tab={tab}
					current={currentTabTitle === tab.title}
					onClick={() => toggleTab(tab.title)} />)}
			</section>
		</header>
	);
}
