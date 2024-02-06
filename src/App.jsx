
import './App.css';
import Body from './Layouts/Body/Body';
import LeftPanel from './Layouts/LeftPanel/LeftPanel'; 

import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';

import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

function App() {
	const INITAL_DATA = [
		// {
		// 	id: 1,
		// 	title:  'Lorem ipsum dolor sit amet.',
		// 	text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.',
		// 	date: new Date()
		// },
		// {
		// 	id: 2,
		// 	title:  'Lorem ipsum dolor sit amet. vremeny data',
		// 	text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo. hello world mello',
		// 	date: new Date()
		// },
		{
			id: 3,
			title:  'Lorem ipsum dolor sit amet. vremeny data',
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo. hello world mello',
			date: new Date()
		}
	];

	const addItem = (item) => {
		setItems(oldItems => [...oldItems, {
			title: item.title,
			text: item.text,
			date: new Date(item.date),
			id:oldItems.length > 0 ?  Math.max(...oldItems.map(el=>el.id))+1 : 1
		}]);
	};

	
	const [items, setItems] = useState(INITAL_DATA); 

	
	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items={ items }/>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}  />
			</Body>
		</div>
	);
}

export default App;