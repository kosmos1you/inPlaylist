// Создаем функцию TrackImageComponent 
export function TrackImageComponent(inputImageSource) {
    // создаем img 
    const element = document.createElement('img');
    // присваиваем путь img 
    element.src = inputImageSource;
    // Получение  const element = document.createElement('img');
    return element;
}
