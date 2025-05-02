import { playLists } from "./data.js";

// util
// создание обьекта с методом create , create - функция с параметрами  tagName, classes , далее создаем  element с tagName 
// classes = [] - пустой массив в котором будут классы 
// classes forEach - добавляем  классы из массива 
const liba = {
    create(tagName, classes = []){
        const element = document.createElement(tagName);
        classes.forEach(classAdd => {
            element.classList.add(classAdd);
        });
        return element;
    }
};



// RENDER
const root = document.getElementById('root');
const PlayListsElement = PlayListsComponent(playLists);
root.append(PlayListsElement);
// Создаем функцию PlayListsComponent
function PlayListsComponent(inputPlayLists){
    const element = liba.create('div', ['playlists']);
    // Создаем цикл с плейлистами 
    for (let i = 0; i < inputPlayLists.length; i++) {
        const playList = inputPlayLists[i];
        //  добавляем ul в div, вызываем  playListComponent ( отрисовка треков )
        element.append(playListComponent(playList));
    }
return element;
}
// Создаем функцию playListComponent  ( отрисовка треков )
function playListComponent(inputPlayList){
    // создаем div 
    const element = document.createElement('div');
    // создаем h2 
    const playListTitleElement = document.createElement('h2');
    //  берем название плейлистов и вставляем  в h2 
    playListTitleElement.append(inputPlayList.title);
    //  добавляем h2 с элементами в div 
    element.append(playListTitleElement);
    element.append(TracksComponent(inputPlayList.tracks));
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
    // получаем артиста и название трека (template string)
    return (inputTrack.isHot ? '🔥' : '' )+ `${inputTrack.artist} - ${inputTrack.title}`;
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