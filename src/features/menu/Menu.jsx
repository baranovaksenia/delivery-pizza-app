import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// function fetch the data and then return it
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

// export async function getMenu() {
//   const res = await fetch(`${API_URL}/menu`);

//   if (!res.ok) throw Error("Failed getting menu");

//   const { data } = await res.json();
//   return data;
// }
