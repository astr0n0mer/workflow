import Header from "./components/Header";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Board from "./containers/Board";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Nav />
        <Header />
        <Board />
      </div>
    </div>
  );
}
