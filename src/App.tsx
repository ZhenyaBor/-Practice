import { AddRouter } from "./common/components";
import { HeaderFeature, FooterFeature } from "./features";

function App() {
  return (
    <div className="App">
      <HeaderFeature />
      <AddRouter />
      <FooterFeature />
    </div>
  );
}

export default App;
