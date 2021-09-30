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
    Rating,
    Content,
    Meta,
    Entities,
    Item,
    Image,
    Like,
    LikeIconActive,
    LikeIconInactive
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({children, ...restProps}) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
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
    const {setShowFeature, setItemFeature} = useContext(FeatureContext);

    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restProps}
        >
            {children}
        </Item>
    );
};

Card.Image = function CardImage({...restProps}) {
    return <Image {...restProps} />;
};

Card.Like = function CardLike({setLikeActive, itemShow, itemShowId, setItemShow, setItemShowId, ...restProps}) {
    const [selfLikeActive, setSelfLikeActive] = useState(false);
    return (
        <Like {...restProps}
              onClick={() => {
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

Card.Feature = function CardFeature({children, category, ...restProps}) {
    const {showFeature, itemFeature, setShowFeature} = useContext(FeatureContext);

    return showFeature ? (
        <Feature {...restProps}>
            <Content>
                <FeatureTitle>{itemFeature.name}</FeatureTitle>
                <FeatureText>{itemFeature.summary.replace(/<p>/g, '')
                    .replace(/<\/p>/g, '')
                    .replace(/<b>/g, '')
                    .replace(/<\/b>/g, '')}
                </FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close"/>
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Rating rating={itemFeature.rating?.average}>{itemFeature.rating?.average}</Rating>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genres.join(' - ')}
                    </FeatureText>
                </Group>

                {children}
            </Content>
        </Feature>
    ) : null;
};

