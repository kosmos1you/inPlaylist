const playlist = {
    playlistId: 1,
    title: "Hip Hop Hits",
    coverImageUrl: "img/cardImage/image1.jpeg",
    totalInfo:{
        totaltrackCout: 4,
        totaltracksDuratuonInSec:733,
    },
     tracks: [
        {
            trackId:"11",
            trackCoverImageUrl: "img/cardImage/trackList/track1.jpeg",
            artistName: "Eminem",
            trackTitle: "Rap God",
            trackFileUrl: "audio/Eminem - Rap God.mp3",
            trackDurationInSec: 1,
            isHot: false
        },
        {
            trackId:"12",
            trackCoverImageUrl: "img/cardImage/trackList/track2.jpeg",
            artistName: "50sent",
            trackTitle: "In da club",
            trackFileUrl: "audio/in da club.mp3",
            trackDurationInSec: 1,
            isHot: true
        },

     ]

}
const playlistTitleElement = document.createElement('h1');
playlistTitleElement.append(playlist.title);

