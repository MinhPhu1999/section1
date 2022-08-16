import React, { useState } from 'react';

export const options = {
	firstList: [
		{
			id: '1',
			label: 'Red',
			value: 'Red',
		},
		{
			id: '2',
			label: 'Blue',
			value: 'Blue',
		},
		{
			id: '3',
			label: 'Green',
			value: 'Green',
		},
	],
	secondList: [
		{
			id: '4',
			label: 'Dog',
			value: 'Dog',
		},
		{
			id: '5',
			label: 'Cat',
			value: 'Cat',
		},
		{
			id: '6',
			label: 'Rabbit',
			value: 'Rabbit',
		},
	],
};

export default function ListBox() {
	const { firstList, secondList } = options;
	const [firstListValues, setFirstListValues] = useState(firstList);
	const [secondListValues, setSecondListValues] = useState(secondList);
	const [selectedListValues, setSelectedListValues] = useState([]);

	const moveAllRight = () => {
		setFirstListValues([]);
		setSecondListValues([...secondListValues, ...firstListValues]);
	};
	const moveAllLeft = () => {
		setSecondListValues([]);
		setFirstListValues([...firstListValues, ...secondListValues]);
	};
	const moveLeft = () => {
		if (selectedListValues !== null) {
			let optionsList = secondListValues;
			selectedListValues.map(
				item =>
					(optionsList = optionsList.filter(x => x.id !== item.id)),
			);
			setSecondListValues(optionsList);
			setFirstListValues([...firstListValues, ...selectedListValues]);
			setSelectedListValues(null);
		}
	};
	const moveRight = () => {
		if (selectedListValues !== null) {
			let rightList = firstListValues;
			selectedListValues.map(
				item => (rightList = rightList.filter(x => x.id !== item.id)),
			);
			setFirstListValues(rightList);
			setSecondListValues([...secondListValues, ...selectedListValues]);
			setSelectedListValues(null);
		}
	};

	const handleChange = e => {
		const temp = Array.from(e.target.selectedOptions);
		setSelectedListValues(temp);
	};

	return (
		<div className="listbox">
			<div>ListBox Component</div>
			<div className="row">
				<div className="col-2">
					<select
						multiple="multiple"
						size="6"
						id="First"
						onChange={e => {
							handleChange(e);
						}}
					>
						{firstListValues.map((item, i) => (
							<option
								value={item.value}
								key={item.id}
								id={item.id}
								label={item.label}
							/>
						))}
					</select>
				</div>
				<div className="col-1">
					<div>
						<button onClick={() => moveAllRight()}>{'>>'}</button>
					</div>
					<div>
						<button onClick={() => moveRight()}>{'>'}</button>
					</div>

					<div>
						<button onClick={() => moveAllLeft()}>{'<<'}</button>
					</div>
					<div>
						<button onClick={() => moveLeft()}>{'<'}</button>
					</div>
				</div>
				<div className="col-2">
					<select
						size="6"
						onChange={e => {
							handleChange(e);
						}}
						multiple
					>
						{secondListValues.map((item, i) => (
							<option
								value={item.value}
								key={item.id}
								id={item.id}
								label={item.label}
							/>
						))}
					</select>
				</div>
			</div>
		</div>
	);
}
