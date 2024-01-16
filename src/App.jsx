
import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';

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
    <>
      <h2>Загаловок</h2>
      <p>Text</p>
      <Button/>
      <JournalItem
        title = {data[0].title}
        text={data[0].text}
        date = {data[0].date}
      />
       <JournalItem
        title = {data[1].title}
        text={data[1].text}
        date = {data[1].date}
      />
    </>
  );
}

export default App;
