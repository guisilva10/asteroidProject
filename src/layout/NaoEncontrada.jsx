import img from "../assets/duvida.png";
import { Link } from "react-router-dom";

const NaoEncontrada = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <img src={img} alt="Página não encontrada" className="mb-4 w-24" />
      <h1 className="text-3xl font-semibold text-gray-800">
        Página Não Encontrada
      </h1>
      <p className="mt-2 text-gray-600">
        Oops! Parece que essa página não existe.
      </p>
      <Link
        to="/"
        className="mt-4 rounded-md bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600"
      >
        Voltar para Home
      </Link>
    </div>
  );
};

export default NaoEncontrada;
