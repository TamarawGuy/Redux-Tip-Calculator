import { Stack } from "@twilio-paste/stack";
import { MenuItemContainer } from "../containers/MenuItemContainer";

const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItemContainer {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};

export default MenuItems;
