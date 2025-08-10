import { liba } from "../Shared/liba.js";
export function AddPlayListPanel(){
    const element = liba.create('div', ['add-playlist-panel']);

    const PanelRow = liba.create('div');

    const Title = liba.create('h1', ['title']);
    Title.append('My playlists');

    const ButtonRename = liba.create('button', ['rename']);
    const ButtonRenameImg = liba.create('img', ['button-icons']);
    ButtonRenameImg.src='img/icons/edit.svg';
    ButtonRename.append(ButtonRenameImg);
    ButtonRename.onclick = () =>{
        let NewTitle = prompt('Ведите название плейлиста:');
        Title.textContent = NewTitle;
    }

    /*const ButtonAddPlaylist = liba.create('button', ['button']);
        ButtonAddPlaylist.append('Add Playlist');
    */
    PanelRow.append(Title,ButtonRename);
    element.append(PanelRow/*, ButtonAddPlaylist*/);
    return element;

}
export function AddEditPlaylistComponent() {
    const element = liba.create('div');

    element.innerHTML = `<p>Greetings, one and all!</p>  
    <form method="dialog">  
        <button >Ok</button>
    </form>`;
    element.open = true;
    return element;
};