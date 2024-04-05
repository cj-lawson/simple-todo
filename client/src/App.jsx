import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-[url('./public/grid.svg')]">
        <div className="mx-8 mt-4">
          <Navbar />
        </div>
        <div className="flex h-screen w-screen justify-center pt-10 text-primary-white">
          <div className="container flex w-5/6 max-w-[650px] flex-col space-y-12 md:w-3/5">
            <TodoApp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
