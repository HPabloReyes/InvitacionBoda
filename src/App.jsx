import "./App.css";
import TopSide from "./components/topSide";
import Story from "./components/story";
import Dia from "./components/dia";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-50 via-white to-yellow-50">
        <TopSide />
        <div
          className="max-w-2xl w-full mx-10 p-10  shadow-2xl "
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1328454526/es/vector/fondo-abstracto-de-acuarela-tono-suave.jpg?s=612x612&w=0&k=20&c=fjYzzc4WcL5XkZQLXWOHhb-P2Vkqygmw8Ej4cRCoJes=)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Story />
          <Dia />
        </div>
      </div>
    </>
  );
}

export default App;
