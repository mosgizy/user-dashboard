'use client';

import EditProfile from '@/components/EditProfile';
import Preference from '@/components/Preference';
import Security from '@/components/Security';
import React, { useState } from 'react';

const navs = ['Edit Profile', 'Prefrences', 'Security'];

const Setting = () => {
	const [current, setCurrent] = useState('Edit Profile');

	const handleNav = (nav: string) => {
		setCurrent(nav);
	};
	return (
		<section>
			<div className="wrapper  p-9">
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
				<div className="mt-14">
					{current === 'Edit Profile' && <EditProfile />}
					{current === 'Prefrences' && <Preference />}
					{current === 'Security' && <Security />}
				</div>
			</div>
		</section>
	);
};

export default Setting;
