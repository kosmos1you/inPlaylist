// Создаем функцию TrackLinkComponent 
export function TrackLinkComponent(inputTrackLink) {
    // Cоздаем audio 
    const element = document.createElement('audio');
    // Добавляем атрибут controls к  audio  (без него audio будет скрыт)
    element.setAttribute('controls', '');
    // Присваиваем путь audio 
    element.src = inputTrackLink.link;
    //  Получение  const element = document.createElement('audio');
    return element;
}
