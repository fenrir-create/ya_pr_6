/** Отображает информацию о пользователе на странице */
export class UserInfo {

  /** Конструктор
   * @param profileTitle 
   * @param avatar 
   * @param profileAbout */
  constructor({profileTitle, profileAbout, profileAvatar}) {
    this._title = document.querySelector(profileTitle);
    this._about = document.querySelector(profileAbout);
    this._avatar = document.querySelector(profileAvatar);
  }

  /** Получает информацию о пользователе из разметки
   * @returns {*|{about: *, title: *, avatar: *}} */
  getUserInfo() {
    this._info = {
      title: this._title.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src
    };
    return this._info;
  }

  /** Добавляет новые данные пользователя на страницу
   * @param info - объект с именем и подписью {*|{title: *, about: *, avatar: *}} */
  setUserInfo(info) {
    this._title.textContent = info.name;
    this._about.textContent = info.about;
    this._avatar.src = info.avatar;
  }
}
