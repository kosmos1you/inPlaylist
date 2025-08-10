
import { playLists , subscribe} from "./date/playLists.js";
import {AddEditPlaylistComponent, AddPlayListPanel} from "./ui/AddEditPlaylist/AddEditPlaylistComponent.js";
import { PlayListsComponent } from "./ui/PlayLists/PlayListsComponent.js";
import {liba} from "./ui/Shared/liba.js";


// RENDER
const root = document.getElementById('root');

function AppComponent() {
    const element = liba.create('div', ['App']);
    const HeaderElement = header();
    const MainElement = AddMainComponent();
    element.append(HeaderElement,MainElement);
    return element;
}
function  header(){
    const element = liba.create('header')
    element.append(headerContainer());
    return  element;
}
function  headerContainer(){
    const element = liba.create('div', ['header-container'])
    const logo = liba.create('img');
    logo.src = '/img/logo/logo.svg';
    logo.alt = 'logo';
    const logoName = liba.create('div', ['logo-name']);
    logoName.append('InPlayer');
    element.append(logo,logoName);
    return  element;
}
function  AddMainComponent(){
    const element = liba.create('main');
    const PlayListPanelElement = AddPlayListPanel();

    const PlayListsElement = PlayListsComponent(playLists);
    /*const AddEditPlaylistElement= AddEditPlaylistComponent();*/
    element.append(PlayListPanelElement,PlayListsElement/*,AddEditPlaylistElement*/);
    return element;
}



function refrahe() {
    const AddAppComponent = AppComponent();
    root.innerHTML = '';
    root.append(AddAppComponent);
    AppComponent();
};


// setInterval(refrahe, 5000);

subscribe(refrahe);

refrahe();
