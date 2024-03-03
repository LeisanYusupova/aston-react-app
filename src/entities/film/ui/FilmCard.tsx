import { Link } from 'react-router-dom';
import s from './FilmCard.module.css';

type Props = {
  id: number;
  name: string;
  country: string;
  year: number;
  image: string;
};

export const FilmCard = (props: Props) => {
  return (
    <div className={s.card_wrapper}>
      <img src={`${props.image}`} alt="Превью изображение" />
      <div className={s.card_container}>
        <span>{props.name}</span>
        <span>{props.country}</span>
        <span>{props.year}</span>

        <div className={s.button_wrapper}>
          <Link to={`/${props.id}`}>
            <button className={s.card_button}>Подробнее</button>
          </Link>
          <button className={s.card_button}>Добавить в избранное</button>
        </div>
      </div>
    </div>
  );
};
