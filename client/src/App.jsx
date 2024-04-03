import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <div className=" flex h-screen w-screen justify-center bg-primary-dark pt-10 text-white">
        <div className="container flex w-5/6 max-w-[700px] flex-col space-y-12 md:w-3/5">
          <TodoApp />
        </div>
      </div>
    </>
  );
}

export default App;
