
import CartEmptyImg from '../../img/pizza-logo.svg'
import { Link } from 'react-router-dom';
const CartEmpty = () => {
  return (
    <div class="cart cart--empty">
            <h2>Корзина пуста <icon>😕</icon></h2>
            <p>
              Скоріше за все, ви ще не замовили піццу.<br />
              Для того щоб зробити замовлення перейдіть на головну сторінку.
            </p>
            <img src={CartEmptyImg} alt="Empty cart" />
            <Link to="/" class="button button--black">
              <span>Повернутись назад</span>
            </Link>
          </div>
  )
}

export default CartEmpty;
