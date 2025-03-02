import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingHome from "../components/Loading";

function ListaAsteroides() {
  const [astros, setAstros] = useState([]);

  let dataAtual = new Date();
  let dia = dataAtual.getDate().toString().padStart(2, "0");
  let mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0");
  let ano = dataAtual.getFullYear();
  let dataAtualizada = `${ano}-${mes}-${dia}`;

  const searchData = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataAtualizada}&end_date=${dataAtualizada}&api_key=QWRE3ULoOtEeoaXwFMb1WDwWrY4Muv7NncJFWWsn`,
      );
      setAstros(response.data.near_earth_objects[dataAtualizada]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchData();
  }, []);

  return (
    <div className="mx-auto mt-10 mb-10 min-h-screen bg-white p-4">
      {astros.length === 0 ? (
        <LoadingHome />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {astros.map((astro) => (
            <Link
              key={astro.id}
              to={`/asteroides/${astro.id}`}
              className="rounded-lg p-4 text-white shadow-md transition hover:bg-gray-700"
            >
              <h5 className="text-center text-xl font-bold text-blue-500">
                {astro.name}
              </h5>
              <p className="mt-2 text-center text-blue-500">
                É potencialmente perigoso? <br />
                {astro.is_potentially_hazardous_asteroid ? (
                  <span className="text-red-500">Sim</span>
                ) : (
                  <span className="text-green-500">Não</span>
                )}
              </p>
              <p className="mt-2 text-center text-blue-500">
                Diâmetro Máximo (Km): <br />{" "}
                {astro.estimated_diameter.kilometers.estimated_diameter_max}
              </p>
              <p className="mt-2 text-center text-sm text-gray-400">
                Clique no card para saber mais
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaAsteroides;
