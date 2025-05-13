import Toggle from './Toggle';

const Preference = () => {
	return (
		<div>
			<div className="flex gap-8">
				<label className="flex flex-col gap-3 flex-1">
					<span className="text-secondary-500">Currency</span>
					<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
						<input
							type="text"
							placeholder="USD"
							className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
						/>
					</div>
				</label>
				<label className="flex flex-col gap-3 flex-1">
					<span className="text-secondary-500">Time Zone</span>
					<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
						<input
							type="text"
							placeholder="(GMT-12:00) International Date Line West"
							className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
						/>
					</div>
				</label>
			</div>
			<div className=" mt-7 text-secondary-500">
				<h2 className="text-primary-300 font-medium text-[17px]">Notification</h2>
				<div className="mt-5 grid gap-4">
					<div className="flex items-center gap-6">
						<Toggle name="send" />
						<div>I send or receive digita currency</div>
					</div>
					<div className="flex items-center gap-6">
						<Toggle name="marchant" />
						<div>I receive merchant order</div>
					</div>
					<div className="flex items-center gap-6">
						<Toggle name="recommendation" />
						<div>There are recommendation for my account</div>
					</div>
				</div>
				<div className="flex justify-end-safe mt-16">
					<button className="font-medium text-lg px-20 py-3 bg-secondary-1002 rounded-xl text-white">
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default Preference;
