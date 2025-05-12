'use client';

import AtmCard from '@/components/AtmCard';
import Image from 'next/image';
import { PieChart } from 'react-minimal-pie-chart';

const cardList = [
	{
		cardType: 'secondary',
		bank: 'DBL Bank',
		cardNumber: '**** **** 5600',
		namainCard: 'William',
	},
	{
		cardType: 'secondary',
		bank: 'BRC Bank',
		cardNumber: '**** **** 4300',
		namainCard: 'David',
	},
	{
		cardType: 'secondary',
		bank: 'ABM Bank',
		cardNumber: '**** **** 7560',
		namainCard: 'Faith',
	},
];
const icons = [
	{
		icon: '/icons/credit-card-blue.png',
		bg: 'bg-[#E7EDFF]',
	},
	{
		icon: '/icons/credit-card-pink.png',
		bg: 'bg-[#FFE0EB]',
	},
	{
		icon: '/icons/credit-card-yellow.png',
		bg: 'bg-[#FFF5D9]',
	},
];

const cardSettings = [
	{
		icon: '/icons/blocked-card.png',
		title: 'block card',
		info: 'instantly block card',
	},
	{
		icon: '/icons/lock.png',
		title: 'change pin code',
		info: 'choose another pin code',
	},
	{
		icon: '/icons/google.png',
		title: 'add to google pay',
		info: 'withdraw without any card',
	},
	{
		icon: '/icons/apple.png',
		title: 'add to apple pay',
		info: 'withdraw without any card',
	},
	{
		icon: '/icons/apple.png',
		title: 'add to apple store',
		info: 'withdraw without any card',
	},
];

const CreditCard = () => {
	return (
		<section>
			<section>
				<div className="grid grid-cols-3 gap-6">
					<AtmCard type="default" />
					<AtmCard type="default" />
					<AtmCard />
				</div>
			</section>
			<section className="mt-5 flex gap-6">
				<div>
					<h2 className="header">Card Expense Statistics</h2>
					<div className="wrapper py-8 px-12">
						<div className="max-w-max flex flex-col items-center">
							<div>
								<PieChart
									data={[
										{ title: 'One', value: 10, color: '#FFBB38' },
										{ title: 'Two', value: 15, color: '#4C78FF' },
										{ title: 'Three', value: 20, color: '#16DBCC' },
										{ title: 'Four', value: 25, color: '#FF82AC' },
									]}
									lineWidth={60}
									radius={50}
								/>
							</div>
							<div className="grid grid-cols-2 gap-8 mt-5">
								<div className="flex items-center gap-4">
									<span className="bg-[#FFBB38] w-[15px] h-[15px] rounded-full"></span>
									<div>DBL Bank</div>
								</div>
								<div className="flex items-center gap-4">
									<span className="bg-[#4C78FF] w-[15px] h-[15px] rounded-full"></span>
									<div>BRC Bank</div>
								</div>
								<div className="flex items-center gap-4">
									<span className="bg-[#16DBCC] w-[15px] h-[15px] rounded-full"></span>
									<div>ABM Bank</div>
								</div>
								<div className="flex items-center gap-4">
									<span className="bg-[#FF82AC] w-[15px] h-[15px] rounded-full"></span>
									<div>MCP Bank</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-1">
					<h2 className="header">Card List</h2>
					<ul>
						{cardList.map((card, index) => {
							return (
								<li key={index} className="wrapper flex items-center justify-between">
									<div className="flex items-center gap-4">
										<div
											className={`flex items-center justify-center w-[60px] h-[60px] ${icons[index].bg} rounded-3xl`}
										>
											<Image src={icons[index].icon} alt="credit card" height={26} width={26} />
										</div>
										<div>
											<h4 className="text-secondary-500 font-medium">Card Type</h4>
											<span className="text-secondary-400">{card.cardType}</span>
										</div>
									</div>
									<div>
										<h4 className="text-secondary-500 font-medium">Bank</h4>
										<span className="text-secondary-400">{card.bank}</span>
									</div>
									<div>
										<h4 className="text-secondary-500 font-medium">Card Number</h4>
										<span className="text-secondary-400">{card.cardNumber}</span>
									</div>
									<div>
										<h4 className="text-secondary-500 font-medium">Namian Card</h4>
										<span className="text-secondary-400">{card.namainCard}</span>
									</div>
									<div className="text-secondary-1002">View Details</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
			<section className="mt-5">
				<div className="flex gap-8">
					<div className="flex-1">
						<h2 className="header">Card List</h2>
						<div className="wrapper">
							<h3 className="text-secondary-400">
								Credit Card generally means a plastic card issued by Scheduled Commercial Banks
								assigned to a Cardholder, with a credit limit, that can be used to purchase goods
								and services on credit or obtain cash advances.
							</h3>
							<form className="mt-8">
								<div className="grid grid-cols-2 gap-8">
									<label className="flex flex-col gap-3">
										<span className="text-secondary-500">Card Type</span>
										<div className="bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
											<input
												type="text"
												placeholder="Classic"
												className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
											/>
										</div>
									</label>
									<label className="flex flex-col gap-3">
										<span className="text-secondary-500">Name on Card</span>
										<div className="group relative bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
											<input
												type="text"
												placeholder="My Card"
												className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
											/>
										</div>
									</label>
									<label className="flex flex-col gap-3">
										<span className="text-secondary-500">Card Number</span>
										<div className="group relative bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
											<input
												type="number"
												placeholder="**** **** **** ****"
												className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
											/>
										</div>
									</label>
									<label className="flex flex-col gap-3">
										<span className="text-secondary-500">Expiration Date</span>
										<div className="group relative bg-secondary-300 pl-2 pr-2 py-3 rounded-2xl border border-[#DFEAF2] cursor-pointer">
											<input
												type="date"
												className="w-full placeholder-secondary-400 outline-none border-none pl-2 text-secondary-200 text-[15px]"
											/>
										</div>
									</label>
								</div>
								<button className="font-medium text-lg mt-8 px-10 py-3 bg-secondary-1002 rounded-xl text-white">
									Add Card
								</button>
							</form>
						</div>
					</div>
					<div>
						<h2 className="header">Card List</h2>
						<div className="wrapper px-8 py-10">
							<ul className="grid gap-6">
								{cardSettings.map((cardSetting, index) => {
									return (
										<li key={index} className="flex gap-5 items-center">
											<Image src={cardSetting.icon} alt={cardSetting.info} height={60} width={60} />
											<div className="capitalize">
												<h4 className="text-secondary-500 font-medium">{cardSetting.title}</h4>
												<span className="text-secondary-400">{cardSetting.info}</span>
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

export default CreditCard;
