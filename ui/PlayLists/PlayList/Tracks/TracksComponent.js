import { TrackElementComponent } from "./Track/TrackElementComponent.js";

// Создаем функцию TracksComponent 
export function TracksComponent(inputTracks) {
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
