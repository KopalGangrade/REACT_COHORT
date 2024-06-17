import './App.css'
import Counter from './Counter';
import Form from './Form';
import Menu from './Menu';
import TeaDisplay from './TeaDisplay';
import ToggleButton from './ToggleButton';


function App() {

let Teas = [
  {
    name: "Green Tea",
    origin: "China",
    description: "Good for health"
  },
  {
    name: "Black Tea",
    origin: "India",
    description: "Strong flavor"
  },
  {
    name: "Oolong Tea",
    origin: "Taiwan",
    description: "Smooth and fragrant"
  },
  {
    name: "White Tea",
    origin: "China",
    description: "Delicate and sweet"
  },
  {
    name: "Herbal Tea",
    origin: "Various",
    description: "Caffeine-free and flavorful"
  }
];


const foodMenu = [
  {
    name: "Paneer Tikka",
    price: 200,
    description: "Marinated paneer cubes grilled to perfection."
  },
  {
    name: "Masala Dosa",
    price: 150,
    description: "A South Indian fermented crepe filled with spiced potatoes."
  },
  {
    name: "Rogan Josh",
    price: 400,
    description: "A traditional Kashmiri lamb curry."
  }
]

  return (
      <>
      {Teas.map((tea, index)=>(
        <TeaDisplay
          key={index}
          name={tea.name}
          origin={tea.origin}
          description={tea.description}
          />
      ))}
      {/* <TeaDisplay name = "green tea" origin="china" description="It's good for health."/> */}

      {foodMenu.map((food, index)=>(
        <Menu
          key={index}
          name={food.name}
          origin={food.origin}
          description={food.description}
          />
      ))}

      {/* <Menu name = "idali" price="20" description="It's south indian dish."/> */}

      <ToggleButton/>
      <Counter/>
      <Form/>
    </>
  )
}

export default App
