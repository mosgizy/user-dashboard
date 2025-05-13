const Toggle = ({ name }: { name: string }) => {
	return (
		<label
			htmlFor={name}
			className="block relative group rounded-full w-[56px] h-[30px] bg-[#DFEAF2] has-checked:bg-secondary-1004 cursor-pointer"
		>
			<input type="checkbox" name="" id={name} className="opacity-0" />
			<span className="absolute w-[27px] h-[27px] rounded-full bg-white top-1/2 -translate-y-1/2 left-0.5 group-has-checked:left-7"></span>
		</label>
	);
};

export default Toggle;
