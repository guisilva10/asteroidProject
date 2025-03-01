import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ListaAsteroides() {
    const [astros, setAstros] = useState([]);


    let dataAtual = new Date();
    let dia = (dataAtual.getDate()).toString().padStart(2, "0");
    let mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0");
    let ano = dataAtual.getFullYear();

    let dataAtualizada = `${ano}-${mes}-${dia}`;
    const searchData = async () => {

        try {
            const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataAtualizada}&end_date=${dataAtualizada}&api_key=QWRE3ULoOtEeoaXwFMb1WDwWrY4Muv7NncJFWWsn`);
            const data = response.data;
            setAstros(data.near_earth_objects[`${dataAtualizada}`]);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        searchData();
    }, [])


    return (
        <>
            <div style={{ width: '50%', margin: '10px auto', display:'ruby-text'}}>
                {astros.length === 0 ? <p>Carregando...</p> : (astros.map((astro) => (
                    <div className="card" key={astro.id} style={{ width: '18rem', margin: '10px' }}>
                        <Link to={`/asteroides/${astro.id}`} style={{ textDecoration: 'none', width: '18rem' }} >
                            <div className="card-body" >
                                <div ><h5 className="card-title text-center">{astro.name}</h5></div>

                                <div ><p className="card-text text-center">É potencialmente perigoso? <br />{astro.is_potentially_hazardous_asteroid === false ? <span> Não</span> : <span> Sim</span>}</p></div>

                                <div ><p className="card-text text-center">Diâmetro MÁXIMO (Quilômetros) <br /> {astro.estimated_diameter.kilometers.estimated_diameter_max}</p></div>
                                
                                <div ><p className="card-text text-center">Clique no Card Para Saber Mais</p></div>
                            </div>
                        </Link>
                    </div>
                )))}
            </div>
        </>)
}

export default ListaAsteroides;