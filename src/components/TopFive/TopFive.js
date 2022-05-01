import './TopFive.css';
import data from '../../data/data.json'

export default function TopFive() {

  const getFaves = (name) => {
    const highDrinks = data[0].filter(el => el.scores.some(person => person[name] > 4));

    const highSnacks = data[1].filter(el => el.scores.some(person => person[name] > 4));

    const faves = [...highDrinks, ...highSnacks];

    return faves;
  }

  const topFiveGrid = (name) => {
    const personFaves = getFaves(name);
    console.log('personFaves', personFaves)
    return (
      <div id="topFiveGrid">
      <p>{name}:</p>
      {personFaves.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <img src={item.imageurl} alt={item.name} />
        </div>
      ))}
    </div>
    )
  }
  return (
    <div>      
      {topFiveGrid('Daddy')}
      {topFiveGrid('Mommy')}
      {topFiveGrid('Ava')}
    </div>

  )
}