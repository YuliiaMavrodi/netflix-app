import React, {useState, useContext, createContext} from 'react';

import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image,
    Like,
    LikeIconActive,
    LikeIconInactive
} from './styles/card';
// import {addFavouriteShow} from "../../utils";

export default function Card({children, ...restProps}) {

    return (
        <Container {...restProps}>{children}</Container>
    );
}

Card.Group = function CardGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({children, ...restProps}) {
    return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({children, ...restProps}) {
    return <Meta {...restProps}>{children}</Meta>;
};


Card.Item = function CardItem({item, children, ...restProps}) {

    return (
        <Item

            {...restProps}
        >
            {children}
        </Item>
    );
};

Card.Image = function CardImage({...restProps}) {
    return <Image {...restProps} />;
};

Card.Like = function CardLike({setLikeActive, itemShow, itemShowId, setItemShow, setItemShowId}) {
    const [selfLikeActive, setSelfLikeActive] = useState(false);
    return (
        <Like onClick={() => {
            setSelfLikeActive((selfLikeActive) => !selfLikeActive)
            setLikeActive((selfLikeActive) => !selfLikeActive)
            setItemShow(itemShow)
            setItemShowId(itemShowId)
        }}

        >

            {selfLikeActive ? (
                <LikeIconActive>
                    <img src="/images/icons/like.png" alt="Like"/>
                </LikeIconActive>
            ) : (
                <LikeIconInactive>
                    <img src="/images/icons/like.png" alt="Like"/>
                </LikeIconInactive>
            )}
        </Like>
    );
};


