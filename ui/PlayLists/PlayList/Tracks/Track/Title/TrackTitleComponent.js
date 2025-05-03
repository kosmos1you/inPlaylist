// Создаем функцию TrackTitleComponent 
export function TrackTitleComponent(inputTrack) {
    // получаем артиста и название трека (template string)
    return (inputTrack.isHot ? '🔥' : '') + `${inputTrack.artist} - ${inputTrack.title}`;
}
