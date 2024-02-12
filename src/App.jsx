
import './App.css';
import Body from './Layouts/Body/Body';
import LeftPanel from './Layouts/LeftPanel/LeftPanel'; 

import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';

import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { useEffect, useState } from 'react';

function App() {
	const [items, setItems] = useState([]); 

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(item => ({...item, date: new Date(item.date)})));
		}
	}, []);

	useEffect(()=> {
		if (items.length) {
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

	

	const addItem = (item) => {
		setItems(oldItems => [...oldItems, {
			title: item.title,
			text: item.text,
			date: new Date(item.date),
			id:oldItems.length > 0 ?  Math.max(...oldItems.map(el=>el.id))+1 : 1
		}]);
	};


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