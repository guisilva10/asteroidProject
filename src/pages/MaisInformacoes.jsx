import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetalheAsteroide = () => {
  const { id } = useParams();
  const [asteroide, setAsteroide] = useState(null);

  useEffect(() => {
    const requisicao = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=QWRE3ULoOtEeoaXwFMb1WDwWrY4Muv7NncJFWWsn`,
        );
        setAsteroide(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do asteroide", error);
      }
    };
    requisicao();
  }, [id]);

  if (!asteroide) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="text-lg font-semibold text-gray-600">
          Carregando...
        </span>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 mb-10 h-full max-w-3xl rounded-lg bg-gray-900 p-6 text-white shadow-lg">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Detalhes do Asteroide
      </h1>
      <div className="rounded-lg border border-gray-700 p-6">
        <h2 className="mb-4 text-center text-2xl font-semibold">
          {asteroide.name}
        </h2>
        <p className="mb-2">
          <span className="font-bold">É potencialmente perigoso?</span>{" "}
          {asteroide.is_potentially_hazardous_asteroid ? "Sim" : "Não"}
        </p>
        <p className="mb-2">
          <span className="font-bold">Diâmetro Máximo:</span>{" "}
          {asteroide.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
            2,
          )}{" "}
          km
        </p>
        <p className="mb-2">
          <span className="font-bold">Velocidade Relativa (km/h):</span>{" "}
          {parseFloat(
            asteroide.close_approach_data?.[0]?.relative_velocity
              ?.kilometers_per_hour,
          ).toFixed(2)}
        </p>
        <p className="mb-4">
          <span className="font-bold">Magnitude Absoluta:</span>{" "}
          {asteroide.absolute_magnitude_h}
        </p>
        <a
          href={asteroide.nasa_jpl_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
        >
          Mais Detalhes
        </a>
      </div>
    </div>
  );
};

export default DetalheAsteroide;
