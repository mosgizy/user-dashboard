'use client';

import AtmCard from '@/components/AtmCard';
import Bar from '@/components/Bar';
import Image from 'next/image';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const navs = ['All Transactions', 'Income', 'Expenses'];

const transactions = [
	{
		Description: 'Spotify Subscription',
		ID: '#234998268',
		Type: 'Shopping',
		Card: '1234 ****',
		Date: '26 Jan, 12:16 AM',
		Amount: '-$2,500',
		Direction: 'expense',
	},
	{
		Description: 'Salary Payment',
		ID: '#234998269',
		Type: 'Salary',
		Card: '1234 ****',
		Date: '27 Jan, 08:00 AM',
		Amount: '+$5,000',
		Direction: 'income',
	},
	{
		Description: 'Amazon Purchase',
		ID: '#234998270',
		Type: 'Shopping',
		Card: '5678 ****',
		Date: '27 Jan, 06:15 PM',
		Amount: '-$320.45',
		Direction: 'expense',
	},
	{
		Description: 'Freelance Project',
		ID: '#234998271',
		Type: 'Freelance',
		Card: '4321 ****',
		Date: '28 Jan, 10:30 AM',
		Amount: '+$1,200',
		Direction: 'income',
	},
	{
		Description: 'Uber Ride',
		ID: '#234998272',
		Type: 'Transport',
		Card: '8765 ****',
		Date: '29 Jan, 01:22 PM',
		Amount: '-$22.90',
		Direction: 'expense',
	},
	{
		Description: 'Stock Dividend',
		ID: '#234998273',
		Type: 'Investment',
		Card: '1234 ****',
		Date: '29 Jan, 09:00 AM',
		Amount: '+$350.00',
		Direction: 'income',
	},
	{
		Description: 'Grocery Market',
		ID: '#234998274',
		Type: 'Groceries',
		Card: '5678 ****',
		Date: '30 Jan, 05:45 PM',
		Amount: '-$92.70',
		Direction: 'expense',
	},
	{
		Description: 'YouTube Premium',
		ID: '#234998275',
		Type: 'Entertainment',
		Card: '4321 ****',
		Date: '30 Jan, 10:15 PM',
		Amount: '-$11.99',
		Direction: 'expense',
	},
	{
		Description: 'Tax Refund',
		ID: '#234998276',
		Type: 'Tax',
		Card: '1234 ****',
		Date: '31 Jan, 02:00 PM',
		Amount: '+$800.00',
		Direction: 'income',
	},
	{
		Description: 'Flight Ticket',
		ID: '#234998277',
		Type: 'Travel',
		Card: '8765 ****',
		Date: '01 Feb, 11:25 AM',
		Amount: '-$980.00',
		Direction: 'expense',
	},
];

const Transaction = () => {
	const display = 5;
	const [current, setCurrent] = useState('All Transactions');
	const [newTransactions, setNewTransactions] = useState(transactions.slice(display));
	const [page, setPage] = useState(1);

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
		const start = (page - 1) * display;
		const end = start + display;
		setNewTransactions(transactions.slice(start, end));
	};

	const handleNav = (nav: string) => {
		setCurrent(nav);

		if (nav === 'All Transactions') {
			setNewTransactions(transactions);
		}

		if (nav === 'Expenses') {
			setNewTransactions(transactions.filter((transaction) => transaction.Direction === 'expense'));
		}

		if (nav === 'Income') {
			setNewTransactions(transactions.filter((transaction) => transaction.Direction === 'income'));
		}
	};

	return (
		<section>
			<section>
				<div className="flex gap-8">
					<div className="flex-[68%]">
						<div className="flex items-center justify-between text-primary-300 font-semibold">
							<h2 className="header">My Cards</h2>
							<span className="header text-[17px]">+ Add Card</span>
						</div>
						<div className="flex gap-8 mt-4">
							<AtmCard type="default" />
							<AtmCard />
						</div>
					</div>
					<div className="flex-[32%]">
						<h2 className="header">My Expenses</h2>
						<div className="wrapper flex flex-col gap-3">
							<div className="flex gap-5 items-end">
								<Bar bg="bg-secondary-1003" height="h-[98px]" month="Aug" />
								<Bar bg="bg-secondary-1003" height="h-[142px]" month="Sep" />
								<Bar bg="bg-secondary-1003" height="h-[100px]" month="Oct" />
								<Bar bg="bg-secondary-1003" height="h-[65px]" month="Nov" />
								<Bar bg="bg-secondary-1004" height="h-[130px]" month="Dec" amount="$12,500" />
								<Bar bg="bg-secondary-1003" height="h-[80px]" month="Jan" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-5">
				<h2 className="header">Recent Transactions</h2>
				<ul className="flex items-center gap-16 text-secondary-400 pt-6 border-b border-[#EBEEF2]">
					{navs.map((nav, item) => {
						return (
							<li
								key={item}
								onClick={() => handleNav(nav)}
								className={`${
									current === nav &&
									'before:absolute before:bottom-0 before:left-0 before:bg-secondary-1002 before:w-full before:h-1 before:rounded-t-3xl'
								} relative h-full pb-3 px-2 font-medium text-center cursor-pointer`}
							>
								{nav}
							</li>
						);
					})}
				</ul>
				<div className="wrapper text-secondary-500">
					<ul className="grid grid-cols-9 text-secondary-400 pb-3 gap-6">
						<li className="col-span-2">Descripion</li>
						<li>Transaction ID</li>
						<li>Type</li>
						<li>Card</li>
						<li className="col-span-2">Date</li>
						<li>Amount</li>
						<li>Reciept</li>
					</ul>
					<ul className="*:py-4 *:border-t *:border-[#EBEEF2]">
						{newTransactions.map((transaction, index) => {
							return (
								<li key={index} className="grid grid-cols-9 gap-6 items-center">
									<div className="flex items-center gap-3 col-span-2">
										<Image
											src={`${
												transaction.Direction === 'income'
													? '/icons/arrow-down.png'
													: '/icons/arrow-up.png'
											}`}
											alt="arrow"
											height={30}
											width={30}
										/>
										<span>{transaction.Description}</span>
									</div>
									<div className="">{transaction.ID}</div>
									<div>{transaction.Type}</div>
									<div>{transaction.Card}</div>
									<div className="col-span-2">{transaction.Date}</div>
									<div
										className={`${
											transaction.Direction === 'income' ? 'text-[#16DBAA]' : 'text-[#FE5C73]'
										}`}
									>
										{transaction.Amount}
									</div>
									<button className="border border-[#123288] hover:border-secondary-1002 hover:-text-secondary-1002 rounded-full px-4 py-1 text-[15px] text-[#123288] cursor-pointer">
										Download
									</button>
								</li>
							);
						})}
					</ul>
					<div className="flex justify-end-safe mt-4">
						<Stack spacing={2}>
							<Pagination
								count={Math.ceil(transactions.length / 5)}
								page={page}
								onChange={handleChange}
								shape="rounded"
								color="primary"
							/>
						</Stack>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Transaction;
