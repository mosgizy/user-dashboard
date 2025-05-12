import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className="fixed top-0 z-40 w-full pl-[19.5rem] flex items-center justify-between py-6 px-8 bg-white shadow-sm">
			<div className="text-[28px] text-primary-300 font-semibold">overview</div>
			<div className="flex items-center gap-6">
				<label className="group relative flex items-center bg-secondary-300 pl-5 pr-2 py-3 rounded-full cursor-pointer">
					<Image src="/icons/search.svg" alt="search" height={20} width={20} />
					<input
						type="text"
						placeholder="search for something"
						className="outline-none border-none pl-2 placeholder-secondary-200 text-secondary-200 text-[15px]"
					/>
				</label>
				<div className="bg-secondary-300 rounded-full w-[50px] h-[50px] flex justify-center items-center">
					<Image src="/icons/setting.svg" alt="setting" height={25} width={25} />
				</div>
				<div className="bg-secondary-300 rounded-full w-[50px] h-[50px] flex justify-center items-center">
					<Image src="/icons/notification.svg" alt="notification" height={25} width={25} />
				</div>
				<div>
					<Image src="/images/avatar.png" alt="avatar" height={60} width={60} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
