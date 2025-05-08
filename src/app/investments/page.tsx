'use client';

import { LineChart } from '@mui/x-charts';
import Image from 'next/image';

const accountDetails = [
	{
		img: '/icons/balance-green.png',
		title: 'Total Invested Amount',
		amount: '$150,750',
	},
	{
		img: '/icons/investment.png',
		title: 'Number of Investments',
		amount: '1,250',
	},
	{
		img: '/icons/return.png',
		title: 'Rate of Return',
		amount: '+5.80%',
	},
];

const trendingStocks = [
	{
		name: 'trivago',
		price: '$520',
		return: '+5%',
		returnType: 'profit',
	},
	{
		name: 'canon',
		price: '$480',
		return: '+10%',
		returnType: 'profit',
	},
	{
		name: 'uber food',
		price: '$350',
		return: '-3%',
		returnType: 'loss',
	},
	{
		name: 'nokia',
		price: '$940',
		return: '+2%',
		returnType: 'profit',
	},
	{
		name: 'tiktok',
		price: '$670',
		return: '-12%',
		returnType: 'loss',
	},
];

const Investments = () => {
	return (
		<section>
			<section>
				<ul className="flex gap-8 justify-evenly">
					{accountDetails.map((accountDetail, index) => {
						return (
							<li key={index} className="wrapper flex-1 flex items-center justify-center gap-5">
								<div>
									<Image src={accountDetail.img} alt={accountDetail.title} height={70} width={70} />
								</div>
								<div>
									<h4 className="text-secondary-400">{accountDetail.title}</h4>
									<h3 className="text-secondary-500 text-[20px] font-semibold">
										{accountDetail.amount}
									</h3>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
			<section className="mt-5">
				<div className="grid grid-cols-2 gap-6">
					<div>
						<h2 className="header">Yearly Total Investments</h2>
						<div className="wrapper">
							<LineChart
								xAxis={[{ scaleType: 'point', data: [2020, 2021, 2022, 2023, 2024, 2025] }]}
								yAxis={[
									{
										width: 70,
										min: 0,
										max: 40000,
										tickMinStep: 10000,
										valueFormatter: (value: string) => `$${value.toLocaleString()}`,
									},
								]}
								series={[
									{
										data: [8000, 22000, 17000, 39000, 20500, 30000],
										curve: 'linear',
										baseline: 'min',
									},
								]}
								height={300}
							/>
						</div>
					</div>
					<div>
						<h2 className="header">Monthly Revenue</h2>
						<div className="wrapper">
							<LineChart
								xAxis={[{ scaleType: 'point', data: [2020, 2021, 2022, 2023, 2024, 2025] }]}
								yAxis={[
									{
										width: 70,
										min: 0,
										max: 40000,
										tickMinStep: 10000,
										valueFormatter: (value: string) => `$${value.toLocaleString()}`,
									},
								]}
								series={[
									{
										data: [11000, 13000, 31000, 21000, 25000, 36000],
										baseline: 'min',
										showMark: false,
									},
								]}
								height={300}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-7">
				<div className="grid grid-cols-2 gap-6">
					<div>
						<h2 className="header">My Investment</h2>
						<div>
							<ul className="flex flex-col">
								<li className="wrapper px-4 py-3 grid grid-cols-4 items-center gap-4">
									<div className="flex items-center gap-4 col-span-2">
										<Image src="/icons/apple-pink.png" alt="apple" height={60} width={60} />
										<div>
											<h4 className="font-medium text-secondary-500">Apple Store</h4>
											<span className="text-[15px] text-secondary-400">
												E-commerce, Marketplace
											</span>
										</div>
									</div>
									<div>
										<h4 className="font-medium text-secondary-500">$54,000</h4>
										<span className="text-[15px] text-secondary-400">Investment Value</span>
									</div>
									<div>
										<h4 className="font-medium text-secondary-900">+16%</h4>
										<span className="text-[15px] text-secondary-400">Return Value</span>
									</div>
								</li>
								<li className="wrapper px-4 py-3 grid grid-cols-4 items-center gap-4">
									<div className="flex items-center gap-4 col-span-2">
										<Image src="/icons/google.png" alt="apple" height={60} width={60} />
										<div>
											<h4 className="font-medium text-secondary-500">Samsung Mobile</h4>
											<span className="text-[15px] text-secondary-400">
												E-commerce, Marketplace
											</span>
										</div>
									</div>
									<div>
										<h4 className="font-medium text-secondary-500">$25,300</h4>
										<span className="text-[15px] text-secondary-400">Investment Value</span>
									</div>
									<div>
										<h4 className="font-medium text-secondary-800">-4%</h4>
										<span className="text-[15px] text-secondary-400">Return Value</span>
									</div>
								</li>
								<li className="wrapper px-4 py-3 grid grid-cols-4 items-center gap-4">
									<div className="flex items-center gap-4 col-span-2">
										<Image src="/icons/tesla.png" alt="apple" height={60} width={60} />
										<div>
											<h4 className="font-medium text-secondary-500">Apple Store</h4>
											<span className="text-[15px] text-secondary-400">Electric Vehicle</span>
										</div>
									</div>
									<div>
										<h4 className="font-medium text-secondary-500">$8,00</h4>
										<span className="text-[15px] text-secondary-400">Investment Value</span>
									</div>
									<div>
										<h4 className="font-medium text-secondary-900">+25%</h4>
										<span className="text-[15px] text-secondary-400">Return Value</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<h2 className="header">Trending Stocks</h2>
						<div className="wrapper">
							<ul className="text-secondary-400 font-medium grid grid-cols-4 items-center">
								<li>SL No.</li>
								<li>Name</li>
								<li>Price</li>
								<li>Return</li>
							</ul>
							<ul className="grid gap-5 mt-5 text-secondary-500 capitalize">
								{trendingStocks.map((trendingStock, index) => {
									return (
										<li key={index} className="grid grid-cols-4 items-center">
											<div>0{index + 1}.</div>
											<div>{trendingStock.name}</div>
											<div>{trendingStock.price}</div>
											<div
												className={`${
													trendingStock.returnType === 'profit'
														? 'text-secondary-900'
														: 'text-secondary-800'
												}`}
											>
												{trendingStock.return}
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Investments;
