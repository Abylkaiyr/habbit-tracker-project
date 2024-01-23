
import { useState } from 'react';
import './JournalForm.css';
function JournalForm() {
	const [inputData, setInputData] = useState('');
	const inputChange = () => {
		setInputData(event.target.value);
	};
	return (	
		<form className='journal-form'>
			<input type='date' />   
			<input type='text' value={inputData} onChange={inputChange} />  
			<textarea cols="30" rows="10"></textarea> 
		</form>	
	);
}

export default JournalForm;
