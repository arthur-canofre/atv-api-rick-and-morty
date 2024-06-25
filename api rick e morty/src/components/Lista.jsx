import { useEffect, useState } from "react";
import Item from "./Item";

export default function Lista() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [pesquisa, setPesquisa] = useState("");
    const [valorPesquisa, setValorPesquisa] = useState("");

    const handleInputChange = (event) => {
        setPesquisa(event.target.value);
    };

    const handleButtonClick = () => {
        setValorPesquisa(pesquisa);
    };

    const fetchCharacters = (name) => {
        if (!name) return; // Adiciona verificação para evitar chamadas desnecessárias
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results || []);
            })
            .catch((error) => {
                setError(error);
            });
    };

    useEffect(() => {
        fetchCharacters(valorPesquisa);
    }, [valorPesquisa]); // Adiciona valorPesquisa como dependência

    return (
        <section>
            <div>
                <input type="text" id="pesquisa" value={pesquisa} onChange={handleInputChange} />
                <button onClick={handleButtonClick}>Aperta</button>
            </div>
            <div>
                {error && <p>Error: {error.message}</p>}
                {characters.length > 0 ? (
                    characters.map((character) => (
                        <Item name={character.name} image={character.image}/>
                    ))
                ) : (
                    <h1>No characters found</h1>
                )}
            </div>
        </section>
    );
}