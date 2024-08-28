import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card key={item.id} {...item} />
        );
    });

    return (
        <>
        <Navbar />
        <main>
            <Search />
            <section className="cards--list">
                {cards}
            </section>
        </main>
        </>
    )
}