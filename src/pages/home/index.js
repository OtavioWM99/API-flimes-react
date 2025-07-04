import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn, GenreSelect, SearchInput, Header } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [searchTerm, setSearchTerm] = useState(""); // novo estado
    const KEY = process.env.REACT_APP_KEY;

    // Buscar filmes
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [KEY]);

    // Buscar gêneros
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setGenres(data.genres);
            });
    }, [KEY]);

    // Filtrar filmes pelo gênero selecionado
    const filteredMovies = selectedGenre
        ? movies.filter((movie) => movie.genre_ids.includes(Number(selectedGenre)))
        : movies;

    // Filtrar filmes pelo termo de busca
    const searchedMovies = searchTerm
        ? filteredMovies.filter((movie) =>
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : filteredMovies;

    return (
        <Container>
    <Header>
        <h1>🎬 Movies</h1>
    </Header>
     <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "2rem"
    }}>
        <label htmlFor="genre-select" style={{ fontWeight: "bold" }}>
            Filtrar por categoria:
        </label>
        <GenreSelect
            id="genre-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            style={{ marginBottom: 0 }} // <-- Adicione isso
        >
            <option value="">Todos</option>
            {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>
            ))}
        </GenreSelect>
        <SearchInput
            type="text"
            placeholder="Buscar filme pelo nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: 0 }} // <-- Adicione isso
        />
    </div>
            <MovieList>
                {searchedMovies.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <span>{movie.title}</span>
                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default Home;