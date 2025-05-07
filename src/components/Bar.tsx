const Bar = ({
	month,
	bg,
	height,
	amount,
}: {
	month?: string;
	bg: string;
	height: string;
	amount?: string;
}) => {
	return (
		<div className="flex flex-col gap-2 text-center items-center max-w-max">
			{amount && <div className="text-primary-300 text-sm font-medium">{amount}</div>}
			<div className={`w-9 ${height} ${bg} rounded-xl`}></div>
			<span className="text-xs text-secondary-400">{month}</span>
		</div>
	);
};

export default Bar;
