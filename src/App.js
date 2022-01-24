// props
// +) dữ liệu truyền từ component cha xuôg cpm con
// +) khi nhận props thì ko sửa đc ở cpm con
// +) làm đa dạng cpn khi render

import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title={3} />
      <hr />
      <Body />
    </div>
  );
}

export default App;
