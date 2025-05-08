
import { playLists , subscribe} from "./date/playLists.js";
import { AddEditPlaylistComponent } from "./ui/AddEditPlaylist/AddEditPlaylistComponent.js";
import { PlayListsComponent } from "./ui/PlayLists/PlayListsComponent.js";

// RENDER
const root = document.getElementById('root');

function refrahe() {
    root.innerHTML = '';
    const PlayListsElement = PlayListsComponent(playLists);
    const AddEditPlaylistElement= AddEditPlaylistComponent();

    root.append(PlayListsElement,AddEditPlaylistElement);
};

// setInterval(refrahe, 5000);

subscribe(refrahe);

refrahe();
