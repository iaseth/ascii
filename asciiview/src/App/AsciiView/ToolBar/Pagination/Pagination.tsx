import PgButton from "./PgButton";



interface PaginationProps {
	value: number,
	label: string,
	goToNext: () => void | null,
	goToPrev: () => void | null
}

export default function Pagination ({value, label, goToNext, goToPrev}: PaginationProps) {

	return (
		<header className="grid grid-cols-5">
			<div>
				<PgButton onClick={goToPrev} icon="arrow_back_ios" />
			</div>

			<header className="col-span-3 flex">
				<section className="m-auto px-2 py-2">
					<h4>{label}</h4>
					<h1>{value}</h1>
				</section>
			</header>

			<div>
				<PgButton onClick={goToNext} icon="arrow_forward_ios" />
			</div>
		</header>
	);
}
