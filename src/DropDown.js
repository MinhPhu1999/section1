import { useState } from 'react';

import './DropDown.css';

export default function DropDown() {
	const dropdowns = [
		'One',
		'Two',
		'Three',
		'Four',
		'Five',
		'Six',
		'Seven',
		'Eight',
		'Nine',
		'Ten',
	];

	const [isActive, setIsActive] = useState(false);
	const [selected, setIsSelected] = useState('Choose one');

	const handleSetActive = () => {
		setIsActive(prev => !prev);
	};

	const handleChoose = e => {
		setIsSelected(e.target.textContent);
		handleSetActive();
	};

	return (
		<div className="dropdown">
			DropDown Component
			<div onClick={handleSetActive} className="dropdown-btn">
				{selected}
				<span className={`caret ${isActive ? 'up' : 'down'}`} />
			</div>
			<div
				className="dropdown-content"
				style={{ display: isActive ? 'block' : 'none' }}
			>
				{dropdowns.map(item => (
					<div onClick={handleChoose} key={item} className="item">
						{item}
					</div>
				))}
			</div>
		</div>
	);
}
