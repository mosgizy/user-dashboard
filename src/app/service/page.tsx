import Image from 'next/image';

const services = [
	{
		img: '/icons/insurance.png',
		title: 'Life Insurance',
		info: 'Unlimited protection',
	},
	{
		img: '/icons/shopping.png',
		title: 'shopping',
		info: 'Buy. Think. Grow',
	},
	{
		img: '/icons/safety.png',
		title: 'Safety',
		info: 'We are your allies',
	},
];

const page = () => {
	return (
		<section>
			<section>
				<ul className="flex gap-8 justify-evenly">
					{services.map((service, index) => {
						return (
							<li key={index} className="wrapper flex-1 flex items-center justify-center gap-5">
								<div>
									<Image src={service.img} alt={service.title} height={70} width={70} />
								</div>
								<div>
									<h4 className="text-secondary-400">{service.title}</h4>
									<h3 className="text-secondary-500 text-lg font-semibold">{service.info}</h3>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
			<section className="mt-5">
				<h2 className="header">Last Transactions</h2>
				<ul>
					{Array.from({ length: 5 }).map((_, index) => {
						return (
							<li
								key={index}
								className="wrapper mt-6 px-4 py-3 grid grid-cols-5 items-center gap-4"
							>
								<div className="flex items-center gap-4">
									<Image src="/icons/profile.png" alt="apple" height={60} width={60} />
									<div>
										<h4 className="font-medium text-secondary-500">Business Loans</h4>
										<span className="text-[15px] text-secondary-400">
											It&apos;s a long established
										</span>
									</div>
								</div>
								<div>
									<h4 className="font-medium text-secondary-500">Lorem Ipsum</h4>
									<span className="text-[15px] text-secondary-400">Many publishing</span>
								</div>
								<div>
									<h4 className="font-medium text-secondary-500">Lorem Ipsum</h4>
									<span className="text-[15px] text-secondary-400">Many publishing</span>
								</div>
								<div>
									<h4 className="font-medium text-secondary-500">Lorem Ipsum</h4>
									<span className="text-[15px] text-secondary-400">Many publishing</span>
								</div>
								<button className="border border-[#123288] hover:border-secondary-1002 hover:-text-secondary-1002 rounded-full px-4 py-1 text-[15px] text-[#123288] cursor-pointer">
									View Details
								</button>
							</li>
						);
					})}
				</ul>
			</section>
		</section>
	);
};

export default page;
