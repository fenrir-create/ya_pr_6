/** Отрисовщик элементов страницы */
export class Section {

  /** Конструктор элемента
   * @param items - массив данных, добавляемых на страницу при инициализации класса
   * @param renderer
   * @param containerSelector 
   */
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  /** Добавляет элемент в конец контейнера
   * @param element - добавляемый DOM-элемент */
  addItem(element){
    this._container.append(element);
  }

  /** Добавляет созданный элемент в начало контейнера
   * @param element - добавляемый DOM-элемент */
  addNewItem(element){
    this._container.prepend(element);
  }

  renderElements(items){
    this._container.innerHTML = '';
    items.forEach((element) => {
      this._renderer(element);
    });
  }

}
