import { liba } from "../Shared/liba.js";
import { playListComponent } from "./PlayList/playListComponent.js";


// Создаем функцию PlayListsComponent
export function PlayListsComponent(inputPlayLists) {
    const element = liba.create('div', ['playlists']);
    // Создаем цикл с плейлистами 
    for (let i = 0; i < inputPlayLists.length; i++) {
        const playList = inputPlayLists[i];
        //  добавляем ul в div, вызываем  playListComponent ( отрисовка треков )
        element.append(playListComponent(playList));
    }
    return element;
}
