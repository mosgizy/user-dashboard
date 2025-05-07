import AtmCard from '@/components/AtmCard';
import DebitCreditBar from '@/components/DebitCreditBar';
import Image from 'next/image';

const accountDetails = [
	{
		img: '/icons/balance.png',
		title: 'My Balance',
		amount: '$12,750',
	},
	{
		img: '/icons/income.png',
		title: 'Income',
		amount: '$5,600',
	},
	{
		img: '/icons/expense.png',
		title: 'Expense',
		amount: '$12,750',
	},
	{
		img: '/icons/savings.png',
		title: 'Total Saving',
		amount: '$12,750',
	},
];

interface Transaction {
	type: TransactionType;
	title: string;
	date: string;
	info: string;
	card: string;
	status: string;
	amount: string;
}

const transactions: Transaction[] = [
	{
		type: 'subscription',
		title: 'spotify subscription',
		date: '21 Jan 2025',
		info: 'shopping',
		card: '1234 ****',
		status: 'pending',
		amount: '-$150',
	},
	{
		type: 'service',
		title: 'mobile service',
		date: '18 Jan 2025',
		info: 'service',
		card: '1234 ****',
		status: 'completed',
		amount: '-$340',
	},
	{
		type: 'transfer',
		title: 'emilly wilson',
		date: '17 Jan 2025',
		info: 'transfer',
		card: '1234 ****',
		status: 'completed',
		amount: '+$780',
	},
];

interface Invoice {
	type: TransactionType;
	title: string;
	time: string;
	amount: string;
}

const invoices: Invoice[] = [
	{
		type: 'apple',
		time: '5h ago',
		amount: '$450',
		title: 'Apple Store',
	},
	{
		type: 'transfer',
		time: '2days ago',
		amount: '$160',
		title: 'Michael',
	},
	{
		type: 'subscription',
		time: '5days ago',
		amount: '$1085',
		title: 'Playstation',
	},
	{
		type: 'transfer',
		time: '10days ago',
		amount: '$90',
		title: 'william',
	},
];

type TransactionType = 'subscription' | 'service' | 'transfer' | 'apple';

const transactionTypeIcons: Record<TransactionType, string> = {
	subscription: '/icons/subscription.png',
	service: '/icons/service.png',
	transfer: '/icons/transfer.png',
	apple: '/icons/apple.png',
};

const Accounts = () => {
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
									<h3 className="text-secondary-500 text-[25px] font-semibold">
										{accountDetail.amount}
									</h3>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
			<section className="mt-7">
				<div className="grid grid-cols-3 gap-12">
					<div className="col-span-2">
						<h2 className="header">Last Transactions</h2>
						<div className="wrapper">
							<ul className="flex flex-col gap-5 text-secondary-400">
								{transactions.map((transaction, index) => {
									return (
										<li key={index} className="grid grid-cols-7 items-center gap-8">
											<div className="flex items-center gap-6 col-span-3">
												<Image
													src={transactionTypeIcons[transaction.type]}
													alt={transaction.type}
													height={70}
													width={70}
												/>
												<div>
													<h3 className="font-medium text-secondary-500 capitalize">
														{transaction.title}
													</h3>
													<span className="text-[15px]">{transaction.date}</span>
												</div>
											</div>
											<div>{transaction.info}</div>
											<div>{transaction.card}</div>
											<div>{transaction.status}</div>
											<div>{transaction.amount}</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="">
						<div className="flex items-center justify-between">
							<h2 className="header">My Card</h2>
							<h3 className="header text-[17px]">See All</h3>
						</div>
						<div className="mt-4">
							<AtmCard type="default" />
						</div>
					</div>
				</div>
			</section>
			<section className="mt-5">
				<div className="grid grid-cols-3 gap-12">
					<div className="col-span-2">
						<h2 className="header">Debit and Credit Overview</h2>
						<div className="wrapper">
							<div className="flex items-center justify-between">
								<div className="text-secondary-400 [&_span]:text-[#333B69]">
									<span>$7,560</span> Debited & <span>$5,420</span> Credited in this Week
								</div>
								<div className="flex items-center gap-10">
									<div className="flex items-center gap-3">
										<span className="w-[15px] h-[15px] bg-[#4C78FF] rounded-sm"></span>
										<div>Debit</div>
									</div>
									<div className="flex items-center gap-3">
										<span className="w-[15px] h-[15px] bg-[#FCAA0B] rounded-sm"></span>
										<div>Credit</div>
									</div>
								</div>
							</div>
							<div className="mt-10">
								<div className="grid grid-cols-7 items-end gap-9">
									<DebitCreditBar day="sat" hbar1="h-[140px]" hbar2="h-[250px]" />
									<DebitCreditBar day="sun" hbar1="h-[120px]" hbar2="h-[190px]" />
									<DebitCreditBar day="mon" hbar1="h-[110px]" hbar2="h-[160px]" />
									<DebitCreditBar day="tue" hbar1="h-[210px]" hbar2="h-[160px]" />
									<DebitCreditBar day="wen" hbar1="h-[150px]" hbar2="h-[190px]" />
									<DebitCreditBar day="thur" hbar1="h-[160px]" hbar2="h-[200px]" />
									<DebitCreditBar day="fri" hbar1="h-[180px]" hbar2="h-[220px]" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<h2 className="header">Invoices Sent</h2>
						<div className="wrapper">
							<ul className="flex flex-col gap-6">
								{invoices.map((invoice, index) => {
									return (
										<li
											key={index}
											className="flex items-center justify-between text-secondary-400"
										>
											<div className="flex items-center gap-6">
												<Image
													src={transactionTypeIcons[invoice.type]}
													alt={invoice.type}
													height={70}
													width={70}
												/>
												<div>
													<div className="text-secondary-100 font-medium">{invoice.title}</div>
													<div className="text-[15px]">{invoice.time}</div>
												</div>
											</div>
											<div>{invoice.amount}</div>
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

export default Accounts;
