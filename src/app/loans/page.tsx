import Image from 'next/image';

const accountDetails = [
	{
		img: '/icons/profile.png',
		title: 'Personal Loans',
		amount: '$50,750',
	},
	{
		img: '/icons/corporate.png',
		title: 'Corporate Loans',
		amount: '$105,600',
	},
	{
		img: '/icons/business.png',
		title: 'Business Loans',
		amount: '$512,750',
	},
	{
		img: '/icons/custom.png',
		title: 'Custom Loans',
		amount: 'Choose Money',
	},
];

interface Loans {
	loanMoney: number;
	leftToPay: number;
	duration: string;
	intrestRate: string;
	installment: number;
}

const activeLoans: Loans[] = [
	{
		loanMoney: 100000,
		leftToPay: 40500,
		duration: '8 Months',
		intrestRate: '12%',
		installment: 2000,
	},
	{
		loanMoney: 50000,
		leftToPay: 25000,
		duration: '6 Months',
		intrestRate: '10%',
		installment: 4166,
	},
	{
		loanMoney: 75000,
		leftToPay: 50000,
		duration: '10 Months',
		intrestRate: '8%',
		installment: 5000,
	},
	{
		loanMoney: 120000,
		leftToPay: 60000,
		duration: '12 Months',
		intrestRate: '11%',
		installment: 5000,
	},
	{
		loanMoney: 90000,
		leftToPay: 30000,
		duration: '5 Months',
		intrestRate: '9%',
		installment: 6000,
	},
	{
		loanMoney: 100000,
		leftToPay: 50000,
		duration: '15 Months',
		intrestRate: '13%',
		installment: 3333,
	},
	{
		loanMoney: 60000,
		leftToPay: 20000,
		duration: '4 Months',
		intrestRate: '7%',
		installment: 5000,
	},
	{
		loanMoney: 85000,
		leftToPay: 35000,
		duration: '7 Months',
		intrestRate: '10.5%',
		installment: 4285,
	},
];

const page = () => {
	const totalLoan = activeLoans.reduce(
		(total: number, activeLoan) => total + activeLoan.loanMoney,
		0
	);

	const totalLeftToPay = activeLoans.reduce(
		(total: number, activeLoan) => total + activeLoan.leftToPay,
		0
	);

	const totalInstallment = activeLoans.reduce(
		(total: number, activeLoan) => total + activeLoan.installment,
		0
	);

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
									<h3 className="text-secondary-500 text-lg font-semibold">
										{accountDetail.amount}
									</h3>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
			<section className="mt-5">
				<h2 className="header">Last Transactions</h2>
				<div className="wrapper">
					<ul className="grid grid-cols-7 text-secondary-400 pb-3 gap-6 font-medium">
						<li>SL No</li>
						<li>Loan Money</li>
						<li>Left to pay</li>
						<li>Duration</li>
						<li>Intrest rate</li>
						<li>Installment</li>
						<li>Repay</li>
					</ul>
					<ul className="*:py-4 *:border-t *:border-[#EBEEF2]">
						{activeLoans.map((activeLoan, index) => {
							return (
								<li key={index} className="grid grid-cols-7 gap-6 items-center font-medium">
									<div>0{index + 1}.</div>
									<div>${activeLoan.loanMoney.toLocaleString()}</div>
									<div>${activeLoan.leftToPay.toLocaleString()}</div>
									<div>{activeLoan.duration}</div>
									<div>{activeLoan.intrestRate}</div>
									<div>${activeLoan.installment} / month</div>
									<button className="border border-[#123288] hover:border-secondary-1002 hover:-text-secondary-1002 rounded-full px-4 py-1 text-[15px] text-[#123288] cursor-pointer">
										Repay
									</button>
								</li>
							);
						})}
						<li className="grid grid-cols-7 gap-6 items-center font-medium text-[#FE5C73]">
							<div>Total</div>
							<div>${totalLoan.toLocaleString()}</div>
							<div className="col-span-3">${totalLeftToPay.toLocaleString()}</div>
							<div>${totalInstallment.toLocaleString()} / month</div>
						</li>
					</ul>
				</div>
			</section>
		</section>
	);
};

export default page;
