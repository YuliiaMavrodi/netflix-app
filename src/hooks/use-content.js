import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent() {


    const [content, setContent] = useState([]);
    useEffect(() => {
        fetch("https://api.tvmaze.com/shows?page=0")
            .then(res => res.json())
            .then(
                (result) => {
                    setContent(result);
                })
            .catch((error) => {
                console.log(error.message);
            });


    }, [])

    // const { firebase } = useContext(FirebaseContext);

    // useEffect(() => {
    //     firebase
    //         .firestore()
    //         .collection(target)
    //         .get()
    //         .then((snapshot) => {
    //             const allContent = snapshot.docs.map((contentObj) => ({
    //                 ...contentObj.data(),
    //                 docId: contentObj.id,
    //             }));
    //
    //             setContent(allContent);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         });
    // }, []);

    return content;
}
