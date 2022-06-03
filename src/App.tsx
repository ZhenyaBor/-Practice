import{ResetPage,PostsList,HeaderFeature,FooterFeature} from "./features"

function App() {
  return (
    <div className="App">
    <ResetPage>
    <HeaderFeature/>
     <PostsList/>
     <FooterFeature/>
    </ResetPage>
    </div>
  );
}

export default App;
