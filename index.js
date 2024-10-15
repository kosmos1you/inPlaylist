// util
const liba = {
    create(tagName, classes = []) {
        const element = document.createElement(tagName)
        classes.forEach(c => {
            element.classList.add(c)
        })
        return element;
    }
}

// DATA
const playlists = [
    {
        id: 1,
        title: 'Hip-Hop Hits',
        tracks: [
            {
                artist: 'Eminem',
                title: 'Rap Cod',
                isHot: true,
                imageSource: '/img/cardImage/trackList/track1.jpeg',
                track: 'audio/Eminem - Rap God.mp3',
            },
            {
                artist: '50 cent',
                title: 'In da Club',
                isHot: false,
                imageSource: '/img/cardImage/trackList/track2.jpeg',
                track: 'audio/50cent - In da club.mp3',
            },
        ]
    },
    {
        id: 2,
        title: 'Rap Hits 1990s',
        tracks: [
            {
                artist: 'Public Enemy',
                title: 'Fight the Power',
                isHot: true,
                imageSource: '/img/cardImage/trackList/track3.jpeg',
                track: 'audio/50cent - In da club.mp3',
            },
        ]
    }
]

// RENDER
const root = document.getElementById('root')
const playlistsElement = PlaylistsComponent(playlists)
root.append(playlistsElement)


// components

function PlaylistsComponent(inputPlaylists) {
    const element = document.createElement('div');

    for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i];
        element.append(PlaylistComponent(playlist))
    }

    return element;
}

function PlaylistComponent(inputPlaylist) {
    const classes = ['playlist']
    
    if (inputPlaylist.isActive) {
        classes.push('active')
    }
    
    const element = liba.create('div', classes);

    // todo: split into PlaylistTitleComponent
    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(inputPlaylist.title)

    element.append(playlistTitleElement)

    element.append(TracksComponent(inputPlaylist.tracks))

    return element;
}

function TracksComponent(inputTracks) {
    const element = document.createElement('ul');

    for (let j = 0; j < inputTracks.length; j++) {
        const track = inputTracks[j];

        const trackElement = TrackComponent(track);

        element.append(trackElement)
    }

    return element
}

function TrackComponent(inputTrack) {
    // create
    const element = document.createElement('li');
       
    // add data
    element.append(
        TrackImageComponent(inputTrack.imageSource),
        TrackAudioComponent(inputTrack.track),
        TrackTitleComponent(inputTrack)
    )

    // return
    return element;
}

function TrackImageComponent(inputImageSource) {
    const element = document.createElement('img');
    element.src = inputImageSource;
    return element;
}
function TrackAudioComponent(inputAudioElement) {
    const element = document.createElement('audio');
    element.src = inputAudioElement;
    element.setAttribute('controls', ' ');
    return element;
}
function TrackTitleComponent(inputTrack) {
    return `${inputTrack.isHot ? "🔥" : ""}${inputTrack.artist} - ${inputTrack.title}`;
}



