import Image from 'next/image';

interface TransI {
	image: string;
	bg: string;
	type: string;
	title: string;
	date: string;
	amount: string;
}

const TransactionDetails = ({ image, bg, type, title, date, amount }: TransI) => {
	return (
		<div className="flex items-center gap-3">
			<div className={`${bg} w-14 h-14 rounded-full flex items-center justify-center`}>
				<Image src={image} alt="deposit card" height={28} width={28} />
			</div>
			<div className="flex items-center justify-between flex-1">
				<div>
					<div className="font-medium text-secondary-500">{title}</div>
					<div className="text-secondary-400 text-[15px]">{date}</div>
				</div>
				<span
					className={`${
						type === 'debit' ? 'text-secondary-800' : 'text-secondary-900'
					} font-medium`}
				>
					{amount}
				</span>
			</div>
		</div>
	);
};

export default TransactionDetails;
