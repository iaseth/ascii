


interface PgButtonProps {
	icon: string,
	onClick: () => void
}

export default function PgButton ({icon, onClick}: PgButtonProps) {
	return (
		<button onClick={onClick} className="px-6 py-6 hover:bg-slate-200">
			<span className="material-symbols-outlined pl-2 pt-2">{icon}</span>
		</button>
	);
}
