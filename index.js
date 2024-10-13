
// DATE
const playlists = [
    {
        id: 1,
        title: 'Hip-Hop Hits',
        tracks: [
            {
                artist: 'Eminem',
                title: 'Rap Cod',
                isHot: true,
                 imageSource: '/img/cardImage/trackList/track1.jpeg'
            },
            {
                artist: '50 cent',
                title: 'In da Club',
                isHot: false,
                imageSource: '/img/cardImage/trackList/track2.jpeg'
            },
        ]
    },
    {
        id:2,
        title: 'Rap Hits 1990s',
        tracks:[
            {
                artist: 'Public Enemy',
                title: 'Fight the Power',
                isHot: true,
                imageSource: '/img/cardImage/trackList/track3.jpeg'
            },
        ]
    }
]

// RENDER
const root = document.getElementById('root');

for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];

    const playlistElement = document.createElement('div');

    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlist.title);

    playlistElement.append(playlistTitleElement);

    const tracksElement = document.createElement('ul');
        for (let j = 0; j < playlist.tracks.length; j++) {
            const track = playlist.tracks[j];
            const trackElement = document.createElement('li');
            const trackImageElement = document.createElement('img');
            trackImageElement.src = track.imageSource;

            trackElement.append(trackImageElement,track.title);
            tracksElement.append(trackElement);
        }
    playlistElement.append(tracksElement);
    
    root.append(playlistElement);
}