import img from '../assets/duvida.png' 

function NaoEncontrada() {

    return (
        <>
            <div style={{textAlign:'center', margin:'50px'}}>
                <img src={img} alt="" width={'10%'}/><h1>Page Não Encontrada</h1>
            </div>
        </>
    )
}

export default NaoEncontrada;
