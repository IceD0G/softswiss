import { clsx } from 'clsx';

interface Props {
  offer: {
    description: string;
    title: string;
    img: string;
  };
  number: number;
}

const OfferElement = ({ offer, number }: Props) => {
  const { description, img, title } = offer;
  return (
    <div className={clsx(`offer-${++number}`, 'offer')} style={{ backgroundImage: `url(${img})` }}>
      <p className={'offer__title'}>{title}</p>
      <span className={'offer__description'}>{description}</span>
      <button type="button" className={'btn-secondary'}>
        Learn more
      </button>
    </div>
  );
};

export default OfferElement;
