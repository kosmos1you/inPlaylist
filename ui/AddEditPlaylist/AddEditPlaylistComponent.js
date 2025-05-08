import { liba } from "../Shared/liba.js";
export function AddEditPlaylistComponent() {
    const element = liba.create('div');

    element.innerHTML = `<p>Greetings, one and all!</p>  
    <form method="dialog">  
        <button >Ok</button>
    </form>`;
    element.open = true;
    return element;
};