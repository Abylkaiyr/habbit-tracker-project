
import './App.css';
import Body from './Layouts/Body/Body';
import LeftPanel from './Layouts/LeftPanel/LeftPanel'; 
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';

function App() {
	const data = [
		{
			title:  'Lorem ipsum dolor sit amet.',
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.',
			date: new Date()
		},
		{
			title:  'Lorem ipsum dolor sit amet. vremeny data',
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo. hello world mello',
			date: new Date()
		}
	];
	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					<CardButton>
						<JournalItem
							title = {data[0].title}
							text={data[0].text}
							date = {data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title = {data[1].title}
							text={data[1].text}
							date = {data[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				Body
			</Body>
		</div>
	);
}

export default App;
