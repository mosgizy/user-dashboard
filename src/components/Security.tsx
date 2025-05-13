import Toggle from './Toggle';

const Security = () => {
	return (
		<div>
			<h2 className="text-primary-300 font-medium text-[17px]">Two-factor Authentication</h2>
			<div className="flex items-center gap-6 my-4">
				<Toggle name="recommendation" />
				<div>Enable or disable two factor authentication</div>
			</div>
			<div>
				<h2 className="text-primary-300 font-medium text-[17px]">Change Passworde</h2>
				<form className="w-full grid gap-5 mt-4">
					<div className="grid grid-cols-2">
						<label className="flex flex-col gap-3 flex-1">
							<span className="text-secondary-500">New Password</span>
							<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
								<input
									type="password"
									placeholder="*******"
									className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
								/>
							</div>
						</label>
					</div>
					<div className="grid grid-cols-2">
						<label className="flex flex-col gap-3 flex-1">
							<span className="text-secondary-500">New Password</span>
							<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
								<input
									type="password"
									placeholder="*******"
									className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
								/>
							</div>
						</label>
					</div>
					<div className="flex justify-end-safe">
						<button className="font-medium text-lg mt-4 px-20 py-3 bg-secondary-1002 rounded-xl text-white">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Security;
