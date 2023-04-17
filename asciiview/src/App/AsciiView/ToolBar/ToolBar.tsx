import React from "react";
import Pagination from "./Pagination/Pagination";



interface ToolBarProps {
	pageNumber: number,
	setPageNumber: React.Dispatch<React.SetStateAction<number>>,
	pointsPerPage: number,
	setPointsPerPage: React.Dispatch<React.SetStateAction<number>>
}

export default function ToolBar ({
	pageNumber, setPageNumber,
	pointsPerPage, setPointsPerPage
}: ToolBarProps) {
	const goToNextPage = () => setPageNumber(x => x+1);
	const goToPrevPage = () => setPageNumber(x => (x > 0) ? x-1 : 0);

	const goToNextPPP = () => setPointsPerPage(x => (x < 1024) ? x*2 : x);
	const goToPrevPPP = () => setPointsPerPage(x => (x > 8) ? x/2 : x);

	return (
		<div>
			<header className="grid sm:grid-cols-2 text-center">
				<Pagination label="Page Number" value={pageNumber+1}
					goToNext={goToNextPage} goToPrev={goToPrevPage} />

				<Pagination label="Points Per Page" value={pointsPerPage}
					goToNext={goToNextPPP} goToPrev={goToPrevPPP} />
			</header>
		</div>
	);
}
