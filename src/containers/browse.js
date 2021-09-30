import React, {useState, useEffect, useContext} from 'react';
import {Card, Header} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import {FirebaseContext} from '../context/firebase';
import FooterContainer from './footer';

export default function BrowseContainer({user, slides}) {
    const [category, setCategory] = useState('shows');
    const [slideRows, setSlideRows] = useState([]);
    const [likeActive, setLikeActive] = useState(false);
    const [itemShow, setItemShow] = useState({});
    const [itemShowId, setItemShowId] = useState(null);

    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .collection("favoriteShows")
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));

                slides = allContent
            })

        console.log(slides['favourite'],
            slides['shows'])
    }, [likeActive]);

    const addFavouriteShow = (item, id) => {
        firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .collection("favoriteShows")
            .doc(id)
            .set(item)
            .then(() => {
                // setLikeActive(false)
                console.log("Favourite show successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });


        console.log(item)
        // const setWithMerge = favouriteRef.set({
        //     capital: true
        // }, {merge: true});
    };
    const deleteFavouriteShow = (item, id) => {
        let favouriteShowsRef = firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .collection("favoriteShows")

        let deleteFavouriteShow = favouriteShowsRef.where('id', '==', `${id}`).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    firebase.firestore()
                        .collection('users')
                        .doc(user.uid)
                        .collection("favoriteShows")
                        .doc(doc.id)
                        .delete();
                });
                // setLikeActive(true)
                console.log('Favourite show successfully deleted!')
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }


    useEffect(() => {
        likeActive ?
            addFavouriteShow(itemShow, itemShowId) :
            deleteFavouriteShow(itemShow, itemShowId)

    }, [likeActive, itemShow, itemShowId])
    return <>

        <Header src="house-of-cards" dontShowOnSmallViewPort>
            <Header.Frame>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                    <Header.TextLink active={category === 'shows' ? 'true' : 'false'}
                                     onClick={() => setCategory('shows')}>
                        Shows
                    </Header.TextLink>
                    <Header.TextLink active={category === 'favourite' ? 'true' : 'false'}
                                     onClick={() => setCategory('favourite')}>
                        Favourite
                    </Header.TextLink>
                </Header.Group>
                <Header.Group>
                    <Header.Profile>
                        <Header.Picture src={user.photoURL}/>
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.Picture src={user.photoURL}/>
                                <Header.TextLink>{user.displayName}</Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                            </Header.Group>
                        </Header.Dropdown>
                    </Header.Profile>
                </Header.Group>
            </Header.Frame>

            <Header.Feature>
                <Header.FeatureCallOut>Watch House Of Card Now</Header.FeatureCallOut>
                <Header.Text>
                    Based on the BBC miniseries of the same name, House of Cards follows Francis Underwood, the
                    politician`s politician – masterful, beguiling, charismatic and ruthless. He and his equally
                    ambitious wife Claire will stop at nothing to ensure their ascendancy. This wicked political drama
                    slithers beneath the curtain and through the back halls of greed, sex, love and corruption in modern
                    Washington D.C.
                </Header.Text>
                <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
        </Header>

        <Card.Group>
            {slideRows.map((slideItem) => (
                <Card key={slideItem.title?.toLowerCase()}>
                    <Card.Title>{slideItem.title}</Card.Title>
                    <Card.Entities>
                        {slideItem.data.map((item) => (
                            <Card.Item key={item.id} item={item}>
                                <Card.Image src={item.image?.medium}/>
                                <Card.Meta>
                                    <Card.SubTitle>{item.name}</Card.SubTitle>
                                    {/*<Card.Like />*/}
                                    <Card.Like setLikeActive={setLikeActive}
                                               itemShow={item}
                                               itemShowId={item.id.toString()}
                                               setItemShow={setItemShow}
                                               setItemShowId={setItemShowId}
                                    />
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>
                    <Card.Feature category={category}/>
                </Card>
            ))}
        </Card.Group>
        <FooterContainer/>
    </>

}
