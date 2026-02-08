import './App.css';

import Section from './components/Section';

//? Paintings
import PaintingList from './components/PaintingList';
import paintings from './json/paintings.json';


//? Planes
import PlanesList from './components/PlanesList';
import planes from './json/planes.json';
console.log("planes:", planes);

//!💚 Для відображення локальних зображень з http://localhost:5173/airplane-model-store/ та https://arslan3325528.github.io/airplane-model-store/
// for (let i = 0; i < planes.length; i++) {
//   console.log("planes[i].url.actual:", planes[i].url.actual)
//   planes[i].url.actual = new URL(`${planes[i].url.actual}`, import.meta.url).href;
//   console.log("planes[i].url.actual_ПОСЛЕ:", planes[i].url.actual)
//   // new URL("../images/symboldefs.svg#instagram", import.meta.url).href;
// };
// console.log("planes_ПОСЛЕ:", planes);


export default function App() {
  return (
    <>
      {/* //? Paintings */}
      <Section title="Колекція картин">
        <PaintingList items={paintings} />
      </Section >

      {/* //? Planes */}
      <Section title="Колекція моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};
