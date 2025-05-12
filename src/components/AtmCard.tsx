import Image from 'next/image';

const AtmCard = ({ type }: { type?: string }) => {
	return (
		<div
			className={`${
				type === 'default' ? 'bg-secondary-1002 text-white' : 'bg-white text-primary-300'
			} rounded-3xl overflow-hidden flex-1`}
		>
			<div className="px-6 pt-6">
				<div className="flex items-center justify-between">
					<div>
						<h4 className="text-xs">Balance</h4>
						<h3 className="font-semibold text-xl">$5,756</h3>
					</div>
					<Image
						src={type === 'default' ? '/icons/chip.png' : '/icons/chip-primary.png'}
						alt="chip"
						height={34}
						width={34}
					/>
				</div>
				<div className="flex gap-16 py-6">
					<div>
						<h4 className="text-xs uppercase text-white/70">Card Holder</h4>
						<h3 className="font-semibold text-xl">Abu Eleniyan</h3>
					</div>
					<div>
						<h4 className="text-xs uppercase text-white/70">valid thru</h4>
						<h3 className="font-semibold text-xl">12/22</h3>
					</div>
				</div>
			</div>
			<div
				className={`${
					type !== 'default' && 'border-t border-[#EBEEF2]'
				} flex items-center justify-between px-6 py-5 bg-linear-bl bg-gradient-to-r from-white/20 to-white/5 shadow-xs`}
			>
				<div className="font-semibold text-[22px]">3778 **** **** 1234</div>
				<Image
					src={type === 'default' ? '/icons/master-card.png' : '/icons/master-card-primary.png'}
					alt="chip"
					height={30}
					width={44}
				/>
			</div>
		</div>
	);
};

export default AtmCard;
