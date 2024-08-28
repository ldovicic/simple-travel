import search from "../assets/search.png"

export default function Search() {
    return (
        <section className="search">
            <h1 className="search--title">Find your dream destination.</h1>
            <div className="search--area">
                <img src={search} className="search--icon"></img>
                <input type="text" placeholder="Start typing..." className="search--input"></input>
            </div>
        </section>
    )
}