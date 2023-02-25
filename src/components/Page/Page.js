import "./Page.css";

const Page = ({setPage, next, previous}) => {
    
    const numberPage = () => {
        return next ?
         parseInt(next.replace("https://api.disneyapi.dev/characters?page=", "")) - 1
        : parseInt(previous.replace("https://api.disneyapi.dev/characters?page=", "")) + 1;
    }

    return(
        <div className="page">
            <button onClick={() => previous && setPage(previous)} className={previous ? "page__previous" : "page__previous page__previous--none"}>ANTERIOR</button>
            <p className="page__number">{numberPage()}</p>
            <button onClick={() => next && setPage(next)} className={next ? "page__next" : "page__next page__next--none"}>SIGUIENTE</button>
        </div>
    );
}

export default Page;