// pages/menu.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';


const Menu: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="menu">
        <h1>Our Ice Cream Menu</h1>
        <div className="menuItems">
          {/* Ice Cream 1 */}
          <div className="menuItem">
            <img src="/icecreamc1.jpg" alt="Chocolate Delight" />
            <h2>Chocolate Delight</h2>
            <p>Rich chocolate ice cream with fudge swirls.</p>
          </div>

          {/* Ice Cream 2 */}
          <div className="menuItem">
            <img src="/icecreams.jpg" alt="Strawberry Bliss" />
            <h2>Strawberry Bliss</h2>
            <p>Creamy strawberry ice cream with fresh chunks of strawberry.</p>
          </div>

          {/* Ice Cream 3 */}
          <div className="menuItem">
            <img src="/icecreamv.jpg" alt="Vanilla Dream" />
            <h2>Vanilla Dream</h2>
            <p>Classic vanilla ice cream made with real vanilla beans.</p>
          </div>

          {/* Ice Cream 4 */}
          <div className="menuItem">
            <img src="/icecreamp.jpg" alt="Minty Fresh" />
            <h2>Minty Fresh</h2>
            <p>Cool and refreshing mint ice cream with chocolate chunks.</p>
          </div>

          {/* Ice Cream 5 */}
          <div className="menuItem">
            <img src="/icecreamc.jpg" alt="Cookie Crumble" />
            <h2>Cookie Crumble</h2>
            <p>Vanilla ice cream with crushed cookie bits and a caramel swirl.</p>
          </div>

          {/* Ice Cream 6 */}
          <div className="menuItem">
            <img src="/icecreamp1.jpg" alt="Pistachio Perfection" />
            <h2>Pistachio Perfection</h2>
            <p>Creamy pistachio ice cream with roasted pistachio pieces.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
