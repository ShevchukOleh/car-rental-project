import styled from "styled-components";

export const Container = styled.div`
    padding: 5px 20px;
    max-width: 1400px;

`
export const Title = styled.h1`
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 15px;
`
export const Form = styled.form`
    margin-bottom: 10px;
`
export const Movie = styled.p`
    font-size: 16px;
    line-height: 1.2;
    color: black;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:last-child {
        margin-bottom: 5px;
    }
    &:hover {
        color:orangered;
    }
`