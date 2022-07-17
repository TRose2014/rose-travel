import './TopFive.css';
import ItemCard from '../Card/Card';
import data from '../../data/data.json';

export default function TopFive() {
  const getFaves = (name) => {
    const highDrinks = data[0].filter((el) => el.scores.some((person) => person[name] > 4));
    const highSnacks = data[1].filter((el) => el.scores.some((person) => person[name] > 4));
    const faves = [...highDrinks, ...highSnacks];

    return faves;
  };

  const topFiveGrid = (name) => {
    const personFaves = getFaves(name);
    console.log('personFaves', personFaves);
    console.log('personFaves2', typeof (personFaves));
    return (
      ItemCard(personFaves)
    );
  };
  return (
    <div>
      <h1>Daddy:</h1>
      {' '}
      {topFiveGrid('Daddy')}
      <h1>Mommy:</h1>
      {' '}
      {topFiveGrid('Mommy')}
      <h1>Ava:</h1>
      {' '}
      {topFiveGrid('Ava')}
    </div>

  );
}
