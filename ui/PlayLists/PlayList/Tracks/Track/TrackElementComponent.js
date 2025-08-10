import { TrackLinkComponent } from "./Link/TrackLinkComponent.js";
import { TrackTitleComponent } from "./Title/TrackTitleComponent.js";
import { TrackImageComponent } from "./Image/TrackImageComponent.js";
import {liba} from "../../../../Shared/liba.js";

// Создаем функцию TrackElementComponent  
export function TrackElementComponent(inputTrack) {
    const element = document.createElement('li');
    // Получение названия превью, audio и название трека
    const TrackTitleRow = liba.create('div',['track-info']);
    const TrackTitle = liba.create('div',['track-name']);
    TrackTitle.append( TrackTitleComponent(inputTrack),TrackLinkComponent(inputTrack));
    TrackTitleRow.append(
        TrackTitle // Добавляем название и аудио
    );

    element.append(TrackImageComponent(inputTrack.imageSource),TrackTitleRow);

    // Получение  const element = document.createElement('li');
    return element;
}
