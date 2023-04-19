import React from "react";
import { TabData } from "../EditLayer";
import TabButton from "./TabButton/TabButton";



interface TabBarProps {
	tabs: TabData[],
	currentTabTitle: string,
	setCurrentTabTitle: React.Dispatch<React.SetStateAction<string>>
}

export default function TabBar ({tabs, currentTabTitle, setCurrentTabTitle}: TabBarProps) {
	return (
		<header>
			<section className="flex ch:basis-0 ch:grow text-center bg-slate-200 space-x-0.5">
				{tabs.map((tab, k) => <TabButton tab={tab}
					current={currentTabTitle === tab.title}
					onClick={() => setCurrentTabTitle(tab.title)} />)}
			</section>
		</header>
	);
}
