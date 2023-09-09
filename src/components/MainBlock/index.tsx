import EarthImg from 'assets/png/earth.png';

const MainBlock = () => {
  return (
    <section className={'container main-block'}>
      <div className={'title'}>
        <h1>
          Discover the vast expanses of <span className={'space'}>space</span>
        </h1>
        <h2>
          Where the possibilities are <span className={'endless'}>endless!</span>
        </h2>
        <button type="button" className={'btn-primary'}>
          Learn more
        </button>
      </div>
      <div className={'main-block__earth'}>
        <img src={EarthImg} className={'main-block__earth-img'} alt={'earth'} />
      </div>
    </section>
  );
};

export default MainBlock;
