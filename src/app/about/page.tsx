// pages/about.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';


const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="about">
        <h1>About Us</h1>
        <h4 className="text-2xl font-bold text-black">Delightful Ice Cream Experience 🍦✨</h4>
            <p className="mt-4 text-black">We create the best ice creams with love and passion! <br/> Indulge in the sweetest experience with our handcrafted ice cream, made to perfection with premium ingredients.<br/> Each scoop delivers creamy, velvety goodness that melts in your mouth, offering a blissful escape from the everyday. <br/> Choose from a variety of exciting flavors, from classic vanilla to exotic mango, chocolate fudge, and more!

<br/> Perfect for all occasions, our ice cream is not just a treat; {"it's"} a celebration of taste and joy. 🍨✨</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
