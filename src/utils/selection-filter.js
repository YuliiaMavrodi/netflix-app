export default function selectionFilter({ shows, favourite } = []) {
    return {
        shows: [
            {title: 'Drama', data: shows?.filter((item) => item?.genres?.includes('Drama'))},
            {title: 'Adventure', data: shows?.filter((item) => item?.genres?.includes('Adventure'))},
            {title: 'Fantasy', data: shows?.filter((item) => item?.genres?.includes('Fantasy'))},
            {title: 'Science-Fiction', data: shows?.filter((item) => item?.genres?.includes('Science-Fiction'))},
            {title: 'Thriller', data: shows?.filter((item) => item?.genres?.includes('Thriller'))},
            {title: 'Comedy', data: shows?.filter((item) => item?.genres?.includes('Comedy'))},
            {title: 'Action', data: shows?.filter((item) => item?.genres?.includes('Action'))},
            {title: 'Crime', data: shows?.filter((item) => item?.genres?.includes('Crime'))},
            {title: 'Horror', data: shows?.filter((item) => item?.genres?.includes('Horror'))},
            {title: 'Romance', data: shows?.filter((item) => item?.genres?.includes('Romance'))},
            // {title: 'Espionage', data: shows?.filter((item) => item?.genres?.includes('Espionage'))},
            // {title: 'Music', data: shows?.filter((item) => item?.genres?.includes('Music'))},
            {title: 'Mystery', data: shows?.filter((item) => item?.genres?.includes('Mystery'))},
            {title: 'Supernatural', data: shows?.filter((item) => item?.genres?.includes('Supernatural'))},
            {title: 'Family', data: shows?.filter((item) => item?.genres?.includes('Family'))},
        ],
        favourite: [{title: 'Favourite', data: favourite}]
    }

}
