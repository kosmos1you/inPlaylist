// util
// создание обьекта с методом create , create - функция с параметрами  tagName, classes , далее создаем  element с tagName
// classes = [] - пустой массив в котором будут классы
// classes forEach - добавляем  классы из массива
export const liba = {
    create(tagName, classes = []) {
        const element = document.createElement(tagName);
        classes.forEach(classAdd => {
            element.classList.add(classAdd);
        });
        return element;
    }
};