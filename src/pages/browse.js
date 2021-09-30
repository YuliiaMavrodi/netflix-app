import React from "react";
import BrowseContainer from '../containers/browse';
import {useContent, useFavContent} from '../hooks';
import { selectionFilter } from '../utils';


export default function Browse({user}) {
    const shows = useContent();
    const { favourite } = useFavContent(user)
    console.log('favourite', favourite)
    const slides = selectionFilter( { shows, favourite });
    return <BrowseContainer user={user} slides={slides} />;
}
