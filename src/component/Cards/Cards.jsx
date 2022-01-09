// import s from './Cards.module.css'
import { BsCashCoin, BsHourglassSplit, BsGeoAltFill, BsAwardFill, BsWatch } from "react-icons/bs";

export default function Cards () {
    return (
        <div class="container">
        <h2 class="cards__title">Преимущества</h2>
        <div class="cards-container">
          <ul class="cards__list">
            <li class="cards__item">
              <span class="cards__icon">
                <BsHourglassSplit class="cards__logo" width="40" height="40" />
              </span>
              <div class="cards__wrapper">
                <p class="cards__text">Многолетний опыт</p>
              </div>
            </li>

            <li class="cards__item">
              <span class="cards__icon">
                <BsWatch class="cards__logo" width="40" height="40" />
              </span>
              <div class="cards__wrapper">
                <p class="cards__text">Запись ведётся в любое удобное для вас время</p>
              </div>
            </li>

            <li class="cards__item">
              <span class="cards__icon">
                <BsGeoAltFill class="cards__logo" width="40" height="40" />
              </span>
              <div class="cards__wrapper">
                <p class="cards__text">Удобное расположение в городе</p>
              </div>
            </li>

            <li class="cards__item">
              <span class="cards__icon">
                <BsCashCoin class="cards__logo" width="40" height="40" />
              </span>
              <div class="cards__wrapper">
                <p class="cards__text">Низкие цены</p>
              </div>
            </li>

            <li class="cards__item">
              <span class="cards__icon">
                <BsAwardFill class="cards__logo" width="40" height="40" />
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