import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';
function JournalAddButton() {
	return (
		<CardButton className="journal-add">
			<img className='add-icon' src="/add.svg" alt="Logotype"/>
			Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;
