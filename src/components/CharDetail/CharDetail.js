import "./CharDetail.css";

const CharDetail = ({charDetail, clean}) => {


    return (
        <div onClick={clean} className="opacity">
            <div className="box">
                {charDetail?.name && <h2 className="box__name">{charDetail.name}</h2>}
                {charDetail?.imageUrl && <img className="box__img" src={charDetail.imageUrl}></img>}
                {(charDetail?.allies.length > 0) && <p className="box__text"><strong>Aliados:</strong> {charDetail.allies.join(", ")}</p>}
                {(charDetail?.enemies.length > 0) && <p className="box__text"><strong>Enemigos:</strong> {charDetail.enemies.join(", ")}</p>}
                {(charDetail?.films.length > 0) && <p className="box__text"><strong>Películas:</strong> {charDetail.films.join(", ")}</p>}
                {(charDetail?.parkAttractions.length > 0) && <p className="box__text"><strong>Atracciones:</strong> {charDetail.parkAttractions.join(", ")}</p>}
                {(charDetail?.shortFilms.length > 0) && <p className="box__text"><strong>Cortos:</strong> {charDetail.shortFilms.join(", ")}</p>}
                {(charDetail?.tvShows.length > 0) && <p className="box__text"><strong>Series:</strong> {charDetail.tvShows.join(", ")}</p>}
                {(charDetail?.videoGames.length > 0) && <p className="box__text"><strong>Videojuegos:</strong> {charDetail.videoGames.join(", ")}</p>}
            </div>
        </div>
    );
}

export default CharDetail;