import { Stack } from "@twilio-paste/stack";
import MenuItem from "./MenuItem";

const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItem {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};

export default MenuItems;
