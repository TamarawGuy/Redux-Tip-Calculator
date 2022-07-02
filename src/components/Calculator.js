import { Card } from "@twilio-paste/core";
import { TipSelectContainer } from "../containers/TipSelectContainer";

import { MenuItemsContainer } from "../containers/MenuItemsContainer";
import NewItemForm from "./NewItemForm";
import Summary from "./Summary";

const items = [
  { uuid: 1, name: "Chicken sandwich", price: 14, quantity: 1 },
  { uuid: 2, name: "Fries", price: 12, quantity: 1 },
];

const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      <MenuItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
