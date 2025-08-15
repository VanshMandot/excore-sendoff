import Head from "./components/Head";
import CardLoader from "./components/CardLoader";

function App() {
  return (
    <div className="animated-bg flex flex-col items-center p-4 min-h-screen text-white">
      <Head />
      <CardLoader />
    </div>
  );
}

export default App;