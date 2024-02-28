function Drink({ name }) {
  class DrinkInfo {
    constructor(partOfPlant, caffeineContent, age) {
      this.partOfPlant = partOfPlant;
      this.caffeineContent = caffeineContent;
      this.age = age;
    }
  }
  let drinkInfo = new DrinkInfo('bean', '80–185 mg/cup', '1,000+ years');

  if (name === 'tea') {
    drinkInfo = new DrinkInfo('leaf', '15–70 mg/cup', '4,000+ years');
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{drinkInfo.partOfPlant}</dd>

        <dt>Caffeine content</dt>
        <dd>{drinkInfo.caffeineContent}</dd>

        <dt>Age</dt>
        <dd>{drinkInfo.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name='tea' />
      <Drink name='coffee' />
    </div>
  );
}
