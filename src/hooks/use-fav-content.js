import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { auth } from "firebase/app";

export default function useContent(user) {
    const [content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

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

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            });

    }, []);

    return { ['favourite']: content };
}
