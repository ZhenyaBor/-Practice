import HeaderItemMenu from "./components/HeaderItemMenu";
import { HeaderMenu } from "./components/HeaderMenu";
import dataMenu from "./components/dataMenu.json";

export const HeaderFeature = () => (
  <>
    <HeaderMenu dataMenu={dataMenu}>
      {dataMenu.map((item) => (
        <HeaderItemMenu key={item.id} item={item} />
      ))}
    </HeaderMenu>
  </>
);
