import { playLists } from "./date/playLists.js";
import { PlayListsComponent } from "./ui/PlayLists/PlayListsComponent.js";

// RENDER
const root = document.getElementById('root');
const PlayListsElement = PlayListsComponent(playLists);
root.append(PlayListsElement);
