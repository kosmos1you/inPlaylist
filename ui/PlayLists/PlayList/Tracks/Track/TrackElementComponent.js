import { TrackLinkComponent } from "./Link/TrackLinkComponent.js";
import { TrackTitleComponent } from "./Title/TrackTitleComponent.js";
import { TrackImageComponent } from "./Image/TrackImageComponent.js";

// Создаем функцию TrackElementComponent  
export function TrackElementComponent(inputTrack) {
    const element = document.createElement('li');
    // Получение названия превью, audio и название трека 
    element.append(
        TrackImageComponent(inputTrack.imageSource), // Добавляем img
        TrackTitleComponent(inputTrack), // Добавляем название
        TrackLinkComponent(inputTrack) // Добавляем audio
    );
    // Получение  const element = document.createElement('li');
    return element;
}
