import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    padding: 2rem;
    background: linear-gradient(135deg, #232526 0%, #414345 100%);
    color: #fff;

    h1 {
        text-align: center;
        margin: 4rem 0;
        font-size: 3rem;
        letter-spacing: 2px;
        color: #ffb347;
        text-shadow: 2px 2px 8px #000;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: rgba(30, 30, 30, 0.85);
    border-radius: 1.5rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.4);
    padding: 1.5rem 1rem;
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
        transform: translateY(-8px) scale(1.03);
        box-shadow: 0 8px 32px rgba(0,0,0,0.6);
    }
    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
        box-shadow: 0 2px 12px rgba(0,0,0,0.3);
    }
    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
        margin-bottom: 1rem;
        color: #ffb347;
    }
    a {
        transition: all 0.3s;
    }
    a:hover {
        transform: scale(1.1);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: #232526;
    background: linear-gradient(90deg, #ffb347 0%, #ffcc33 100%);
    font-weight: 1000;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    transition: all 250ms;
    &:hover {
        background: linear-gradient(90deg, #ffcc33 0%, #ffb347 100%);
        color: #232526;
        transform: scale(1.08);
    }
`;

export const GenreSelect = styled.select`
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    background: #232526;
    color: #ffb347;
    font-weight: bold;
    outline: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: box-shadow 0.2s, background 0.2s;
    &:hover, &:focus {
        background: #2c2f32;
        box-shadow: 0 4px 16px rgba(255,179,71,0.15);
    }
    option {
        background: #232526;
        color: #ffb347;
        cursor: pointer;
    }
`;

export const SearchInput = styled.input`
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    background: #232526;
    color: #ffb347;
    font-weight: bold;
    outline: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    width: 300px;
    margin-bottom: 2rem;
    transition: box-shadow 0.2s, background 0.2s;
    &:focus {
        background: #2c2f32;
        box-shadow: 0 4px 16px rgba(255,179,71,0.15);
    }
`;

export const Header = styled.header`
    text-align: center;
    margin: 2rem 0 2rem 0;
    h1 {
        font-size: 3rem;
        color: #ffb347;
        letter-spacing: 2px;
        text-shadow: 2px 2px 8px #232526;
        font-weight: bold;
        background: linear-gradient(90deg, #232526 0%, #ffb347 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;