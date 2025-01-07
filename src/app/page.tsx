// pages/index.tsx
import Header from './components/Header';
import Footer from './components/Footer';


const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="hero">
          <h1>Welcome to Ice Cream Paradise!</h1>
          <p>Your favorite ice cream flavors await you.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
