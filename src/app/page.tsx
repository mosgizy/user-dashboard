import AtmCard from '@/components/AtmCard';
import TransactionDetails from '@/components/TransactionDetails';
import Image from 'next/image';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import Staff from '@/components/Staff';

const data = [
	{ label: 'Entertainment', value: 30 },
	{ label: 'Bill Espenses', value: 15 },
	{ label: 'Investment', value: 20 },
	{ label: 'Others', value: 35 },
];

const transactions = [
	{
		image: '/icons/d-card.png',
		bg: 'bg-secondary-700',
		type: 'debit',
		title: 'Deposit from my card',
		date: '28 January 2025',
		amount: '-$850',
	},
	{
		image: '/icons/d-paypal.png',
		bg: 'bg-secondary-1000',
		type: 'credit',
		title: 'Deposit Paypal',
		date: '25 January 2025',
		amount: '+$2,500',
	},
	{
		image: '/icons/d-direct.png',
		bg: 'bg-secondary-1001',
		type: 'credit',
		title: 'Jemy Wilson',
		date: '21 January 2025',
		amount: '+$5,400',
	},
];

export default function Home() {
	return (
		<section>
			<section>
				<div className="flex gap-8">
					<div className="flex-[68%]">
						<div className="flex items-center justify-between text-primary-300 font-semibold">
							<h2 className="header">My Cards</h2>
							<span className="header text-[17px]">See All</span>
						</div>
						<div className="flex gap-8 mt-4">
							<AtmCard type="default" />
							<AtmCard />
						</div>
					</div>
					<div className="flex-[30%]">
						<h2 className="header">Recent Transactions</h2>
						<div className="wrapper flex flex-col gap-3">
							{transactions.map((transaction, index) => {
								return (
									<TransactionDetails
										key={index}
										image={transaction.image}
										bg={transaction.bg}
										type={transaction.type}
										title={transaction.title}
										date={transaction.date}
										amount={transaction.amount}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mt-5">
					<div className="flex gap-8">
						<div className="flex-[68%]">
							<h2 className="header">Weekly Activities</h2>
							<div className="wrapper">
								<BarChart
									xAxis={[{ data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri'] }]}
									series={[
										{ data: [120, 335, 500, 250, 370, 270, 150], label: 'Deposit' },
										{ data: [170, 120, 355, 450, 300, 480, 360], label: 'Withdraw' },
									]}
									height={350}
								/>
							</div>
						</div>
						<div className="flex-[32%]">
							<h2 className="header">Expense Statistics</h2>
							<div className="wrapper">
								<PieChart
									series={[
										{
											startAngle: 0,
											endAngle: 360,
											data,
										},
									]}
									height={380}
									width={300}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mt-5 flex gap-6">
					<div>
						<h2 className="header">Quick Transfer</h2>
						<div className="wrapper">
							<div className="flex items-center gap-8">
								<div className="flex items-center gap-6">
									<Staff />
									<Staff />
									<Staff />
								</div>
								<div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_20px_rgba(0,0,0,0.05)] cursor-pointer">
									<Image src="/icons/chevron-right.png" alt="arrow-right" height={15} width={8} />
								</div>
							</div>
							<div className="flex items-center gap-6 mt-6">
								<p>Write Amount</p>
								<label
									htmlFor="amount"
									className="group relative flex items-center bg-secondary-300 pl-5 rounded-full cursor-pointer"
								>
									<input
										type="text"
										id="amount"
										className="outline-none border-none pl-2 text-secondary-200 text-[15px]"
									/>
									<button className="bg-secondary-1002 text-white font-medium flex items-center gap-2 rounded-full px-6 py-3">
										<span>send</span>
										<Image src="/icons/send.png" alt="send" height={26} width={22.6} />
									</button>
									<span className="group-focus-within:hidden text-[15px] text-secondary-200 absolute left-6">
										525.50
									</span>
								</label>
							</div>
						</div>
					</div>
					<div className="flex-1">
						<h2 className="header">Balance History</h2>
						<div className="wrapper p-3">
							<LineChart
								xAxis={[{ scaleType: 'point', data: ['Jul', 'Aug', 'Sep', 'Oct', 'Dec', 'Jan'] }]}
								series={[
									{
										data: [80, 310, 275, 750, 150, 500],
										area: true,
										showMark: false,
									},
								]}
								height={215}
							/>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
