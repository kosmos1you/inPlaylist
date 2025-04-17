
// DATA
const playLists = [
    {
        id: 1,
        title: "Hip Hop Hits",
        coverImageUrl: "img/cardImage/image1.jpeg",
        tracks: [
            {
                artist:'Eminem',
                title: ' Rap God',
                isHot: true,
                imageSource: '/img/cardImage/trackList/track1.jpeg',
                link: '/audio/Eminem - Rap God.mp3'
            },
            {
                artist:'50 cent ',
                title: ' In da Club',
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
                artist:'Public Enemy',
                title: ' Fight the Power',
                isHot: true,
                imageSource: '/img/cardImage/trackList/track3.jpeg',
                link: '/audio/Public Enemy - Fight The Power.mp3'
            },
        ]
    }
]

// RENDER
const root = document.getElementById('root');

// Создаем цикл с плейлистами 
for (let i = 0; i < playLists.length; i++) {
    const playList = playLists[i];
    // // создаем div 
    // const playListElement = document.createElement('div');
    // // создаем h2 
    // const playListTitleElement = document.createElement('h2');
    // //  берем название плейлистов и вставляем  в h2 
    // playListTitleElement.append(playList.title);
    // //  добавляем h2 с элементами в div 
    // playListElement.append(playListTitleElement);


    
    root.append(playListElement);
    //  добавляем ul в div 
    playListElement.append(PlayListComponent(playList));
}

function PlayListComponent(inputPlayList){
    // создаем div 
    const element = document.createElement('div');
    // создаем h2 
    const playListTitleElement = document.createElement('h2');
    //  берем название плейлистов и вставляем  в h2 
    playListTitleElement.append(inputPlayList.title);
    //  добавляем h2 с элементами в div 
    element.append(playListTitleElement);
    return element;
}
// Создаем функцию TrackElementComponent  
function  TrackElementComponent(inputTrack) {
    const element = document.createElement('li');
    // Получение названия превью, audio и название трека 
    element.append(
        TrackImageComponent(inputTrack.imageSource), // Добавляем img
        TrackTitleComponent(inputTrack),  // Добавляем название
        TrackLinkComponent (inputTrack) // Добавляем audio
    );
    // Получение  const element = document.createElement('li');
    return element;
}
// Создаем функцию TrackImageComponent 
function TrackImageComponent(inputImageSource){
    // создаем img 
    const element = document.createElement('img');
    // присваиваем путь img 
    element.src = inputImageSource;
    // Получение  const element = document.createElement('img');
    return element;
}
// Создаем функцию TrackTitleComponent 
function TrackTitleComponent(inputTrack){
    // получаем артиста и название трека 
    return inputTrack.artist + ' - ' + inputTrack.title;
}
// Создаем функцию TrackLinkComponent 
function TrackLinkComponent (inputTrackLink){
    // Cоздаем audio 
    const element = document.createElement('audio');
    // Добавляем атрибут controls к  audio  (без него audio будет скрыт)
    element.setAttribute('controls', '');
    // Присваиваем путь audio 
    element.src = inputTrackLink.link;
    //  Получение  const element = document.createElement('audio');
    return element;
}
// Создаем функцию TracksComponent 
function TracksComponent(inputTracks){
    // создаем ul 
    const element = document.createElement('ul');

    // Получение  треков каждого плейлиста 
    for (let j = 0; j < inputTracks.length; j++) {
        const track = inputTracks[j];
        // Cоздаем переменную trackElement и присваеваем ей функцию TrackElementComponent()  
        const trackElement = TrackElementComponent(track);
        //  добавляем li с элементами в ul 
        element.append(trackElement);

    }
    return element;
}
