import Image from 'next/image';

const EditProfile = () => {
	return (
		<div className="flex gap-16">
			<div className="relative max-w-max max-h-max">
				<Image src="/images/avatar.png" alt="avatar" height={130} width={130} />
				<Image
					src="/icons/edit.png"
					alt="edit"
					height={30}
					width={30}
					className="absolute -right-1 bottom-4"
				/>
			</div>
			<form className="w-full grid gap-5">
				<div className="flex gap-8">
					<label className="flex flex-col gap-3 flex-1">
						<span className="text-secondary-500">Your Name</span>
						<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
							<input
								type="text"
								placeholder="Charlene Reed"
								className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
							/>
						</div>
					</label>
					<label className="flex flex-col gap-3 flex-1">
						<span className="text-secondary-500">User Name</span>
						<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
							<input
								type="text"
								placeholder="Charlene Reed"
								className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
							/>
						</div>
					</label>
				</div>
				<div className="flex gap-8">
					<label className="flex flex-col gap-3 flex-1">
						<span className="text-secondary-500">Email</span>
						<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
							<input
								type="email"
								placeholder="CharleneReed@email.com"
								className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
							/>
						</div>
					</label>
					<label className="flex flex-col gap-3 flex-1">
						<span className="text-secondary-500">Password</span>
						<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
							<input
								type="password"
								placeholder="*******"
								className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
							/>
						</div>
					</label>
				</div>
				<div className="flex gap-8">
					<label className="flex flex-col gap-3 flex-1">
						<span className="text-secondary-500">Date of Birth</span>
						<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
							<input
								type="date"
								placeholder="Charlene Reed"
								className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
							/>
						</div>
					</label>
					<label className="flex flex-col gap-3 flex-1">
						<span className="text-secondary-500">Present Address</span>
						<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
							<input
								type="text"
								placeholder="San Jose, California, USA"
								className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
							/>
						</div>
					</label>
				</div>
				<div className="flex gap-8">
					<label className="flex flex-col gap-3 flex-1">
						<span className="text-secondary-500">Permanent Address</span>
						<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
							<input
								type="text"
								placeholder="San Jose, California, USA"
								className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
							/>
						</div>
					</label>
					<label className="flex flex-col gap-3 flex-1">
						<span className="text-secondary-500">City</span>
						<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
							<input
								type="text"
								placeholder="San Jose"
								className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
							/>
						</div>
					</label>
				</div>
				<div className="flex gap-8">
					<label className="flex flex-col gap-3 flex-1">
						<span className="text-secondary-500">Postal Code</span>
						<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
							<input
								type="numeric"
								placeholder="46592"
								className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
							/>
						</div>
					</label>
					<label className="flex flex-col gap-3 flex-1">
						<span className="text-secondary-500">Country</span>
						<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
							<input
								type="text"
								placeholder="USA"
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
	);
};

export default EditProfile;
