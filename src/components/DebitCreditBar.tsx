import Bar from './Bar';

const DebitCreditBar = ({ hbar1, hbar2, day }: { hbar1: string; hbar2: string; day: string }) => {
	return (
		<div className="text-secondary-400 text-sm text-center max-w-max">
			<div className="flex gap-3 items-end">
				<Bar bg="bg-[#1A16F3]" height={hbar1} />
				<Bar bg="bg-[#FCAA0B]" height={hbar2} />
			</div>
			<span className="capitalize">{day}</span>
		</div>
	);
};

export default DebitCreditBar;
