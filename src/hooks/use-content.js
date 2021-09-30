import { useEffect, useState } from 'react';

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

    return content;
}
