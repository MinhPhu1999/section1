import { useState } from 'react';

export default function TextBox() {
	const [value, setValue] = useState('');

	const handleChange = e => {
		setValue(e.target.value);
	};

	return (
		<div>
			<div>TextBox Component</div>
			<input type="text" value={value} onChange={handleChange} />
			<div>Value: {value}</div>
		</div>
	);
}
