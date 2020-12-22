//imp
import { heroes } from "../data/heroes";
// console.log(heroes);

const getHeroeById = (id) => {
  return heroes.find((e) => {
    if (e.id === id) {
      return true;
    } else {
      return false;
    }
  });
};

// const getHeroeById2 = (id) => {
//   return heroes.find((e) => e.id === id);
// };

// const getHeroeById3 = (id) => heroes.find((e) => e.id === id);

// console.log(getHeroeById3(2));

export const getHeroesByOwner = (owner) =>
  heroes.filter((e) => e.owner === owner);

// console.log(getHeroesByOwner("DC"));

export default getHeroeById;
