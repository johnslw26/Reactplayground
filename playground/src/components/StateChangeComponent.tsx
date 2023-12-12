import { useState } from "react";
import SimpleButton from "./SimpleButton";
import { produce } from "immer";

function StateChangeComponent() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Pepperoni",
    toppings: ["Mushroom"],
  });

  return (
    <>
      <h3>
        {game.player.name}
        <br />
        <br />
        {pizza.name}
        <br />
      </h3>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={pizza.name}>{topping}</li>
        ))}
      </ul>
      <SimpleButton
        onClick={() => {
          setGame({
            ...game,
            player: {
              ...game.player,
              name: "Bob",
            },
          });
          /*  setPizza(
            produce((draft) => {
              draft.toppings.push("Sausage", "Jalapenos", "Pepperocini");
            })
          );*/
          setPizza({
            ...pizza,
            toppings: ["Sausage", "Jalapenos", "Pepperocini"],
          });
        }}
      >
        Change The Name and Pizza Order
      </SimpleButton>
    </>
  );
}

export default StateChangeComponent;
