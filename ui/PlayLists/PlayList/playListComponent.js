import { deletePlaylist } from "../../../date/playLists.js";
import { liba } from "../../Shared/liba.js";
import { TracksComponent } from "./Tracks/TracksComponent.js";

// Создаем функцию playListComponent  ( отрисовка треков )
export function playListComponent(inputPlayList) {
    // создаем article
    const element =  liba.create('article', ['playlist']);
    // создаем div
    const playListInfoElement = liba.create('div',['playlist-info']);
    // создаем img
    const playListCoverImageElement = liba.create('img');
    playListCoverImageElement.src = inputPlayList.coverImageUrl;
    // создаем div для title и кол-во треков
    const playListTTitleRow = liba.create('div');
    // создаем h2
    const playListTitleElement = liba.create('h2', ['title']);
    const playListTracksCount = liba.create('div', ['tracks-count']);
    playListTracksCount.append(`${inputPlayList.tracks.length} tracks`);
    //  берем название плейлистов и вставляем  в h2 
    playListTitleElement.append(inputPlayList.title);
    //  добавляем h2 с кол-вом треков  в div
    playListTTitleRow.append(playListTitleElement,playListTracksCount);

    const playListButton = liba.create('button',['button-rename']);
    const playListButtonIconRename = liba.create('img',['bbutton-icon']);

    const  playListButtonRow = liba.create('div',['buttons-container']);

    const deliteButtomElement = liba.create('buttom');
    const playListButtonIconDelite = liba.create('img',['bbutton-icon']);
    playListButtonIconDelite.src = 'img/icons/basket.svg';

    deliteButtomElement.append(playListButtonIconDelite)
    deliteButtomElement.addEventListener('click', () => {
        deletePlaylist(inputPlayList.id);
    });

    playListButtonRow.append(playListButton,deliteButtomElement);

    playListButtonIconRename.src = 'img/icons/edit.svg';
    playListButton.append(playListButtonIconRename);
    playListButtonIconRename.onclick = () =>{
        let NewTitle = prompt('Ведите название плейлиста:');
        playListTitleElement.textContent = NewTitle;
    }


    playListInfoElement.append(playListCoverImageElement,playListTTitleRow,playListButtonRow)
    element.append(playListInfoElement);


    element.append(playListInfoElement);
    element.append(TracksComponent(inputPlayList.tracks));
    return element;

}
