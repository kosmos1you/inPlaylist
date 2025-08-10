// DATA
export let playLists = [
    {
        id: 1,
        title: "Hip Hop Hits",
        coverImageUrl: "img/cardImage/image1.jpeg",
        tracks: [
            {
                artist: 'Eminem',
                title: ' Rap God',
                isHot: true,
                imageSource: '/img/cardImage/trackList/track1.jpeg',
                link: '/audio/Eminem - Rap God.mp3'
            },
            {
                artist: 'Eminem 2',
                title: ' Rap God 2',
                isHot: true,
                imageSource: '/img/cardImage/trackList/track1.jpeg',
                link: '/audio/Eminem - Rap God.mp3'
            },
            {
                artist: '50 cent ',
                title: ' In da Club',
                isHot: false,
                imageSource: '/img/cardImage/trackList/track2.jpeg',
                link: '/audio/50cent - In da club.mp3'
            },
            {
                artist: '50 cent 2 ',
                title: ' In da Club 2',
                isHot: false,
                imageSource: '/img/cardImage/trackList/track2.jpeg',
                link: '/audio/50cent - In da club.mp3'
            },
        ]
    },
    {
        id: 2,
        title: "Pop Hits 1990s",
        coverImageUrl: "img/cardImage/image2.jpeg",
        tracks: [
            {
                artist: 'Public Enemy',
                title: ' Fight the Power',
                isHot: true,
                imageSource: '/img/cardImage/trackList/track3.jpeg',
                link: '/audio/Public Enemy - Fight The Power.mp3'
            },
            {
                artist: 'Public Enemy 2',
                title: ' Fight the Power 2',
                isHot: true,
                imageSource: '/img/cardImage/trackList/track3.jpeg',
                link: '/audio/Public Enemy - Fight The Power.mp3'
            },
        ]
    }
];
const observers = [];

export const deletePlaylist = (id) => {
    playLists = playLists.filter(p => p.id !== id);
    observers.forEach((observer) => observer());
};



export const subscribe = (observer) => {
    observers.push(observer);
}


export const unsubscribe = (observer) => {
    observers = observers.filter(o => o !== observer);
}