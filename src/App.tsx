import{ResetPage,HeaderFeature,FooterFeature,HomeFeature} from "./features"

function App() {
  return (
    <div className="App">
    <ResetPage>
      <HeaderFeature/>
      <HomeFeature/>
      <FooterFeature/>
    </ResetPage>
    </div>
  );
}

export default App;
