import Image from 'next/image';

const Staff = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-1 max-w-max">
			<Image src="/images/livia.png" alt="avatar" height={60} width={60} />
			<div className="mt-1 text-center">
				<h4 className="text-secondary-500">Livia Bator</h4>
				<span className="text-[15px]">CEO</span>
			</div>
		</div>
	);
};

export default Staff;
