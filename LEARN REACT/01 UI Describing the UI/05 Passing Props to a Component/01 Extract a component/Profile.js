import { getImageUrl } from './utils.js';

export default function Profile({ peopleName, imageUrl, profileItems }) {
  return (
    <section className='profile'>
      <h2>{peopleName}</h2>
      <img
        className='avatar'
        src={getImageUrl(imageUrl)}
        alt={peopleName}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profileItems.profession}
        </li>
        <li>
          <b>Awards: {profileItems.awards.length} </b>
          {'(' + profileItems.awards.join(', ') + ')'}
        </li>
        <li>
          <b>Discovered: </b>
          {profileItems.discovered}
        </li>
      </ul>
    </section>
  );
}
