

import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm({onSubmit}) {
	const addJournalItem = (e) => {	
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
	};

	return (	
		
		<form className='journal-form' onSubmit={addJournalItem}   >
			<input type='text' name='title'/>
			<input type='date' name='date'/>   
			<input type='text' name='tag' />  
			<textarea cols="30" rows="10" name='text'></textarea> 
			<Button text='Сохранить' onClick={()=>{console.log('меня нажали');}}/>
		</form>	
	);
}

export default JournalForm;
