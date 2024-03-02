import { people } from './data.js';
import { getImageUrl } from './utils.js';

function ListSection(people) {
  return (
    <li key={people.id}>
      <img src={getImageUrl(people)} alt={people.name} />
      <p>
        <b>{people.name}:</b>
        {' ' + people.profession + ' '}
        known for {people.accomplishment}
      </p>
    </li>
  );
}

export default function List() {
  const chemists = people.filter((people) => people.profession === 'chemist');
  const etc = people.filter((people) => people.profession !== 'chemist');

  const chemistList = chemists.map(ListSection);
  const everyoneElse = etc.map(ListSection);

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>{chemistList}</ul>
      <h2>Everyone Else</h2>
      <ul>{everyoneElse}</ul>
    </article>
  );
}
