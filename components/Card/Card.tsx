import Image from 'next/image';
import classes from './Card.module.css';
import ModalDetail from './ModalDetail';

export interface ICard {
  id: string;
  title: string;
  cover: string;
  subtitles: string[];
  description: string;
}

export const DUMMY_PORTFOLIO_DATA: ICard[] = [
  {
    id: 'string-1',
    title: 'Halaman Personal',
    cover: '/img/portfolios/halaman-personal.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore id quasi explicabo, perferendis esse qui hic pariatur? In, vero.`,
    subtitles: ['as Front-end Developer', 'Web App'],
  },
  {
    id: 'string-1',
    title: 'Dua',
    cover: '/img/portfolios/halaman-personal.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore id quasi explicabo, perferendis esse qui hic pariatur? In, vero.`,
    subtitles: ['as Front-end Developer', ''],
  },
];

export default function Card(props: ICard) {
  const { id, title, cover, subtitles, description } = props;
  return (
    <div className="col sm-6">
      <div className="card" style={{ width: '100%', height: '100%' }}>
        <div className={classes.imgWrapper}>
          <Image
            objectFit="cover"
            width={`100%`}
            height={`40rem`}
            layout="responsive"
            src={cover}
            alt={title}
            quality={50}
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          {subtitles.map((subtitle) => (
            <h5 key={subtitle} className="card-subtitle">
              {subtitle}
            </h5>
          ))}
          <div
            className="card-text"
            dangerouslySetInnerHTML={{
              __html: `${description.substring(0, 50)}...`,
            }}
          />
          <label className="paper-btn" htmlFor={id}>
            Show more
          </label>
        </div>
      </div>
      <ModalDetail data={props} />
    </div>
  );
}
