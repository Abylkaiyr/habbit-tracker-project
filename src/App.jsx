
import './App.css';
import Body from './Layouts/Body/Body';
import LeftPanel from './Layouts/LeftPanel/LeftPanel'; 
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

function App() {
	const INITAL_DATA = [
		{
			title:  'Lorem ipsum dolor sit amet.',
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.',
			date: new Date()
		},
		{
			title:  'Lorem ipsum dolor sit amet. vremeny data',
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo. hello world mello',
			date: new Date()
		},
		{
			title:  'Lorem ipsum dolor sit amet. vremeny data',
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo. hello world mello',
			date: new Date()
		}
	];

	const addItem = (item) => {
		setItems(oldItems => [...oldItems, {
			title: item.title,
			text: item.text,
			date: new Date(item.date)
		}]);
	};

	const [items, setItems] = useState(INITAL_DATA); 
	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					{items.map(el=>(
						<CardButton>
							<JournalItem
								title={el.title}
								text={el.text}
								date={el.date}						
							/>
						</CardButton>
					))}					
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}  />
			</Body>
		</div>
	);
}

export default App;
