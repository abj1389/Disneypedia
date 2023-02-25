import "./Char.css";
import React from "react";
import Page from "../Page/Page";
import CharDetail from "../CharDetail/CharDetail";
import Loading from "../Loading/Loading";

const Char = () => {
    const URL = "https://api.disneyapi.dev/characters?page=1";
    const URL_DETAIL = "https://api.disneyapi.dev/characters/";
    const [charsList, setCharsList] = React.useState([]);
    const [next, setNext] = React.useState("");
    const [previous, setPrevious] = React.useState("");
    const [page, setPage] = React.useState(URL);
    const [charId, setCharId] = React.useState();
    const [charDetail, setCharDetail] = React.useState();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        fetch(page)
            .then(response => response.json())
            .then(data => {
                setCharsList(data.data);
                setNext(data.nextPage);
                setPrevious(data.previousPage);
                setLoading(false);
            })
    }, [page])


    React.useEffect(() => {
        if (charId){
            setLoading(true);
            fetch(URL_DETAIL + charId)
            .then(response => response.json())
            .then(data => {
                setCharDetail(data);
                setLoading(false);
            })
        }
    }, [charId])

    const haveImg = (img) => {
        return img ? <img className="card__img" src={img} alt="Imagen del personaje"/> : <p className="card__text">Sin imagen</p>
    }

    return (
        <div>
            <div className="container">
                {charsList.map(char => {return(
                    <div onClick={() => setCharId(char._id)} key={char._id} className="card">
                        {haveImg(char.imageUrl)}
                        <p className="card__name">{char.name}</p>
                    </div>
                )})}
                {charDetail && <CharDetail charDetail={charDetail} clean={() => {setCharDetail(null); setCharId(null);}}></CharDetail>}
                {loading && <Loading></Loading>}
            </div>
            {(next || previous) && <Page setPage={setPage} next={next} previous={previous}></Page>}
        </div>
    );
}

export default Char;