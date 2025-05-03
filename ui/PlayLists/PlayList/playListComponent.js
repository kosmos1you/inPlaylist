import { TracksComponent } from "./Tracks/TracksComponent.js";

// Создаем функцию playListComponent  ( отрисовка треков )
export function playListComponent(inputPlayList) {
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
