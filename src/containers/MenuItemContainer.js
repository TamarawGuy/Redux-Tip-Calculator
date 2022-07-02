import { removeItem } from "../store/items/actions";
import { connect } from "react-redux";
import MenuItem from "../components/MenuItem";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: (uuid) => dispatch(removeItem(ownProps.uuid)),
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
