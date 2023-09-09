import { clsx } from 'clsx';
import offer1 from 'assets/png/bg_2.png';
import offer2 from 'assets/png/bg_3.png';
import offer3 from 'assets/png/bg_4.png';
import offer4 from 'assets/png/bg_5.png';

const Offers = () => {
  return (
    <section className={'offers container'}>
      <p className={'offers__title'}>Offers</p>
      <div className={'offers__grid'}>
        <div className={clsx('offer offer-full')} style={{ backgroundImage: `url(${offer1})` }}>
          <p className={'offer__title'}>Move the borders of reality!</p>
          <span className={'offer__description'}>Go on a space adventure - it's possible with us!</span>
          <button type="button" className={'btn-secondary'}>
            Learn more
          </button>
        </div>
        <div className={clsx('offer offer-half')} style={{ backgroundImage: `url(${offer2})` }}>
          <p className={'offer__title'}>Space is not just stars and planets</p>
          <span className={'offer__description'}>Go on a space adventure</span>
          <button type="button" className={'btn-secondary'}>
            Learn more
          </button>
        </div>
        <div className={clsx('offer offer-half')} style={{ backgroundImage: `url(${offer3})` }}>
          <p className={'offer__title'}>For those who dream of stars</p>
          <span className={'offer__description'}>Our offer: make your dream come true</span>
          <button type="button" className={'btn-secondary'}>
            Learn more
          </button>
        </div>
        <div className={clsx('offer offer-full')} style={{ backgroundImage: `url(${offer4})` }}>
          <p className={'offer__title'}>Fulfill your fantastic dreams</p>
          <span className={'offer__description'}>Space has never been so close</span>
          <button type="button" className={'btn-secondary'}>
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
