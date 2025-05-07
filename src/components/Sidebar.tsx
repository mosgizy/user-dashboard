'use client';

import Image from 'next/image';
import {
	accountIcon,
	creditCardIcon,
	homeIcon,
	investmentIcon,
	loanIcon,
	priviledgeIcon,
	serviceIcon,
	settingIcon,
	transactionIcon,
} from '@/utilities/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
	const pathname = usePathname();

	const navItems = [
		{
			title: 'dashboard',
			icon: homeIcon,
			link: '/',
		},
		{
			title: 'transaction',
			icon: transactionIcon,
			link: '/transaction',
		},
		{
			title: 'accounts',
			icon: accountIcon,
			link: '/accounts',
		},
		{
			title: 'investments',
			icon: investmentIcon,
			link: '/investments',
		},
		{
			title: 'cerdit card',
			icon: creditCardIcon,
			link: '/credit-card',
		},
		{
			title: 'loans',
			icon: loanIcon,
			link: '/loans',
		},
		{
			title: 'service',
			icon: serviceIcon,
			link: '/service',
		},
		{
			title: 'my priviledges',
			icon: priviledgeIcon,
			link: '/priviledge',
		},
		{
			title: 'setting',
			icon: settingIcon,
			link: '/setting',
		},
	];
	return (
		<aside className="fixed top-0 bottom-0 left-0  z-50 py-10 bg-white shadow-xl max-w-fit max-h-screen">
			<div className="px-8 pr-16">
				<Image src="/icons/logo.svg" alt="logo" width={183} height={36} />
			</div>
			<ul className="flex flex-col gap-2 mt-16 text-secondary-100 font-medium text-lg capitalize *:pl-8 *:py-4">
				{navItems.map((item, index) => (
					<li
						key={index}
						className={`${
							pathname === item.link &&
							'text-secondary-600 relative before:absolute before:top-0 before:left-0 before:h-full before:w-1.5 before:rounded-r-4xl before:bg-secondary-600'
						}`}
					>
						<Link
							href={item.link}
							className="flex items-center gap-6 hover:text-secondary-600 transition-all duration-300 ease-in-out cursor-pointer"
						>
							<>
								<div>{item.icon}</div>
								<span>{item.title}</span>
							</>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
