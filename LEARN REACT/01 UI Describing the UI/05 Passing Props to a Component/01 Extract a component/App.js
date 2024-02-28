import Profile from './Profile.js';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        peopleName='Maria Skłodowska-Curie'
        imageUrl='szV5sdG'
        profileItems={{
          profession: 'physicist and chemist',
          awards: [
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal',
          ],
          discovered: 'polonium (element)',
        }}
      />
      <Profile
        peopleName='Katsuko Saruhashi'
        imageUrl='YfeOqp2'
        profileItems={{
          profession: 'geochemist',
          awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
          discovered: 'a method for measuring carbon dioxide in seawater',
        }}
      />
    </div>
  );
}
