import styled from "styled-components";

export const Container = styled.div`
    padding: 50px 129px;
    background-color: #fff;
`
export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
export const ListItem = styled.li`
    width: 274px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:not(:nth-child(4n+1)) {
        margin-left: 28px;
    }
`
export const ImageContainer = styled.div`
    position: relative;
`
export const CarImage = styled.img`
    width: 274px;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
    margin-bottom: 14px;
`
export const HeartImage = styled.div`
    position: absolute;
    top: 14px;
    right: 14px;
    width: 18px;
    height: 18px;
    cursor: pointer;
`
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 9px;
`
export const Title = styled.h2`
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
`
export const PriceText = styled.span`
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
`
export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 9px;
`
export const TagsItem = styled.p`
    color: #12141780;
    padding-right: 6px;
    padding-left: 6px;
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    &:not(:first-child){
        border-left: 1px solid #1214171A;
    }
    &:first-child{
        padding-left: 0;
    }
`
export const LearnMoreButton = styled.button`
    margin-top: 24px;
    width: 274px;
    height: 44px;
    border-radius: 12px;
    background-color: #3470FF;
    color: #fff;
    border: none;
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 14px;
    line-height: 1.428;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        background-color: #0B44CD;
    }
`
export const LoadMoreButton = styled.button`
    border: none;
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    background-color: transparent;
    width: 100px;
    height: 30px;
    color: #3470FF;
    margin-top: 50px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        color: #0B44CD; 
    }
`