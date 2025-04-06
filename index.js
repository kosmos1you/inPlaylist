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
        coverImage:'img/cardImage/image1.jpeg',
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
        coverImage:'img/cardImage/image2.jpeg',
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
const root = document.getElementById('root');
root.append(PlaylistsWrapper());

// components
function PlaylistsWrapper(){
    const classes = ['App']
    const element = liba.create('div', classes);
   // PlaylistsWrapper.append(PlaylistsHeader());
    element.append(PlaylistsHeader(),PlaylistMain());
    return element;
};
function PlaylistsHeader(){
    const element = liba.create('header');
    element.append(PlaylistsHeaderContainer());
    return element;
}
function PlaylistsHeaderContainer(){
    const classes = ['header-container'];
    const element = liba.create('div',classes);

    const PlaylistsHeaderImage = document.createElement('img');
    PlaylistsHeaderImage.src = 'img/logo/logo.svg';
    PlaylistsHeaderImage.setAttribute('alt', 'logo');
    const headerName = liba.create('div',['logo-name']);
    headerName.innerText = 'InPlayer';

    
    element.append(PlaylistsHeaderImage,headerName);
    return element;
}
function PlaylistMain(){
    const element = liba.create('main');
    element.append(AddPlaylistPanel(),PlaylistsComponent(playlists));
    return element;

}
function AddPlaylistPanel() {
    const element = liba.create('div',['add-playlist-panel']);
    const PlaylistPanelH1 = liba.create('h1',['title']);
    PlaylistPanelH1.innerText = 'My playlists';
    
    const PlaylistPanelButton = liba.create('button',['button']);
    PlaylistPanelButton.innerText = 'Add Playlist';
    element.append(PlaylistPanelH1,PlaylistPanelButton);
    return element;
}
function PlaylistsComponent(inputPlaylists) {
   
    const element = liba.create('div',['playlists']);
    
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
    const playlistInfo = liba.create('div', ['playlist-info']);

    const playlistInfoImage = liba.create('img', ['playlist-cover-image']);
    playlistInfoImage.src = inputPlaylist.coverImage
    playlistInfoImage.setAttribute('alt', inputPlaylist.title);
    
    const playlistInfoContainer = liba.create('div')
    const playlistTitleElement = liba.create('h2', ['title']);
    //const playlistCountElement = liba.create('div', ['buttons-container']);

    const playlistbuttonElement = liba.create('div', ['buttons-container']);
    const playlistbuttonEditElement = liba.create('button');
    const playlistbuttonDeleteElement = liba.create('button');
    playlistTitleElement.append(inputPlaylist.title);

    const playlistbuttonEditIconElement = liba.create('img', ['button-icon']);
    playlistbuttonEditIconElement.src = 'img/icons/edit.svg';
    playlistbuttonEditIconElement.setAttribute('alt', 'edit');
    playlistbuttonEditElement.append(playlistbuttonEditIconElement);

    const playlistbuttonDeleteIconElement = liba.create('img', ['button-icon']);
    playlistbuttonDeleteIconElement.src = 'img/icons/basket.svg';
    playlistbuttonDeleteIconElement.setAttribute('alt', 'delete');
    playlistbuttonDeleteElement.append(playlistbuttonDeleteIconElement);

    playlistInfoContainer.append(playlistTitleElement);
    playlistbuttonElement.append(playlistbuttonEditElement,playlistbuttonDeleteElement);
    playlistInfo.append(playlistInfoImage,playlistInfoContainer,playlistbuttonElement);

    element.append(playlistInfo);
    element.append(TracksComponent(inputPlaylist.tracks));
   
    return element;
}
function AddTrackPanel(inputTrackPanel){
    const element = liba.create('div', ['add-track-panel']);
    element.append(inputTrackPanel)
}

function TracksComponent(inputTracks) {
    
    const element = liba.create('ul', ['list'])

    for (let j = 0; j < inputTracks.length; j++) {
        const track = inputTracks[j];

        const trackElement = TrackComponent(track);
        element.append(trackElement);
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






