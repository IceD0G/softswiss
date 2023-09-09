import './styles/App.scss';
import Header from 'components/Layout/header/header';
import MainBlock from 'components/MainBlock';
import Offers from 'components/Offers';
import Description from 'components/Description';
import Footer from 'components/Layout/footer';

function App() {
  return (
    <>
      <Header />
      <MainBlock />
      <Offers />
      <Description />
      <Footer />
    </>
  );
}

export default App;
