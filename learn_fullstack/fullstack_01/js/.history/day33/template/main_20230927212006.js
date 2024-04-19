// const html = ` <h2>Khoa hoc fullstack</h2>
//   <p>hello F8</p>
// `;

const html = (strings, personExp, ageExp, addressExp) => {
  console.log(strings);
  console.log(personExp);
  console.log(ageExp);
  console.log(addressExp);
};

const person = "tuan anh";
const age = 31;
const address = "bac giang";
const output = html`toi ten la ${person}, toi ${age} tuoi oer ${address}`;
