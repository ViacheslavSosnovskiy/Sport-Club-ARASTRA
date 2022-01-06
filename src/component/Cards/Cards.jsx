export default function Cards () {
    return (
        <div class="container">
        <h2 class="cards__title">Преимущества</h2>
        <div class="cards-container">
          <ul class="cards__list">
            <li class="cards__item">
              <span class="cards__icon">
                <svg class="cards__logo" width="40" height="40">
                  <use href="./img/sprite.svg#time"></use>
                </svg>
              </span>
              <div class="cards__wrapper">
                <p class="cards__text">Многолетний опыт</p>
              </div>
            </li>

            <li class="cards__item">
              <span class="cards__icon">
                <svg class="cards__logo" width="40" height="40">
                  <use href="./img/sprite.svg#clock"></use>
                </svg>
              </span>
              <div class="cards__wrapper">
                <p class="cards__text">Запись ведётся в любое удобное для вас время</p>
              </div>
            </li>

            <li class="cards__item">
              <span class="cards__icon">
                <svg class="cards__logo" width="40" height="40">
                  <use href="./img/sprite.svg#location"></use>
                </svg>
              </span>
              <div class="cards__wrapper">
                <p class="cards__text">Удобное расположение в городе</p>
              </div>
            </li>

            <li class="cards__item">
              <span class="cards__icon">
                <svg class="cards__logo" width="40" height="40">
                  <use href="./img/sprite.svg#price"></use>
                </svg>
              </span>
              <div class="cards__wrapper">
                <p class="cards__text">Низкие цены</p>
              </div>
            </li>

            <li class="cards__item">
              <span class="cards__icon">
                <svg class="cards__logo" width="40" height="40">
                  <use href="./img/sprite.svg#experience"></use>
                </svg>
              </span>
              <div class="cards__wrapper">
                <p class="cards__text">Качество</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
}