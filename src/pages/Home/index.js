import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import ConnectingPeople from '../../components/ConnectingPeople';
import WeWantToKnow from '../../components/WeWantToKnow';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <ConnectingPeople />
      <WeWantToKnow />
      <Footer />
    </>
  );
}
