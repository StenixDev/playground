import "./App.css";

const products = [
  {
    name: "Traditional Baechu Kimchi",
    description:
      "Classic fermented napa cabbage with spicy chili paste, garlic, and ginger for an authentic bold flavor.",
    price: "₱ 120",
    image:
      "https://www.seriouseats.com/thmb/m16sray_HxYpJebVbXMxv906bhk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210527-baechu-kimchi-vicky-wasik-seriouseats-seriouseats-3-18a2d6d7d1d74a7a82cb13ed350218be.jpg",
  },
  {
    name: "Kkakdugi Radish Kimchi",
    description:
      "Crunchy cubed Korean radish fermented with red chili flakes, offering a tangy and refreshing bite.",
    price: "₱ 120",
    image:
      "https://www.seriouseats.com/thmb/IOqbjFT8FbnnqWqxqASB9p5Rm1w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210520-kkakdugi-radish-kimchi-Beauty-tim-chin-seriouseats-v2-f1f1ad5d4bb94470b80c79057504a5b1.jpg",
  },
  {
    name: "Oi Sobagi Cucumber Kimchi",
    description:
      "Stuffed cucumbers with a mix of vegetables and spices, providing a crisp, juicy, and mildly spicy taste.",
    price: "₱ 120",
    image: "https://i.ytimg.com/vi/ApQUENQbgiY/maxresdefault.jpg",
  },
  {
    name: "Nabak Kimchi Watery Kimchi",
    description:
      "Mild, soup-like kimchi with sliced radish and cabbage in a light brine, perfect for a subtle flavor.",
    price: "₱ 120",
    image: "https://i.ytimg.com/vi/LBJMJZdZEOQ/maxresdefault.jpg",
  },
  {
    name: "Yeolmu Kimchi Young Radish Kimchi",
    description:
      "Fermented young radish greens with stems, delivering a fresh, earthy, and slightly bitter profile.",
    price: "₱ 120",
    image: "https://www.maangchi.com/wp-content/uploads/2008/05/yeolmu.jpg",
  },
  {
    name: "Gat Kimchi Mustard Leaf Kimchi",
    description:
      "Bold mustard greens fermented with chili and seasonings, offering a peppery and robust kick.",
    price: "₱ 120",
    image: "https://i.ytimg.com/vi/j3xlC-VHjis/maxresdefault.jpg",
  },
  {
    name: "Pa Kimchi Green Onion Kimchi",
    description:
      "Aromatic green onions in a savory chili paste, ideal for adding depth to meals.",
    price: "₱ 120",
    image:
      "https://futuredish.com/wp-content/uploads/2018/04/GreenOnionKimchi3.jpg",
  },
  {
    name: "Chonggak Kimchi Pony Tail Radish Kimchi",
    description:
      "Whole ponytail radishes with greens, fermented for a crunchy texture and balanced spice.",
    price: "₱ 120",
    image:
      "https://crazykoreancooking.com/wp-content/uploads/2024/05/Ghongkak-Kimchi_Ponytail-Radish.jpg",
  },
  {
    name: "Dongchimi Radish Water Kimchi",
    description:
      "Clear, refreshing radish broth kimchi with a cool, tangy brine and minimal spice.",
    price: "₱ 120",
    image: "https://i.ytimg.com/vi/PEAlevkvuTI/maxresdefault.jpg",
  },
  {
    name: "Bossam Kimchi Wrapped Kimchi",
    description:
      "Cabbage wraps filled with seasoned ingredients, evoking traditional Korean royal cuisine.",
    price: "₱ 120",
    image: "https://gastrotourseoul.com/wp-content/uploads/2015/11/hyMaOm.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">김치 KimChiBiz</div>
        <nav>
          <div className="nav-container">
            <div className="hamburger" id="hamburger">
              &#9776;
            </div>
            <ul className="nav-links" id="nav-links">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://thumbs.dreamstime.com/b/close-up-shot-white-bowl-filled-mound-fresh-spicy-korean-kimchi-featuring-blend-vibrant-red-chili-peppers-crisp-336063440.jpg"
            alt="Fresh vibrant Korean kimchi"
          />
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">Handcrafted in Korea</div>
          <h1 className="hero-title">Authentic Kimchi</h1>
          <p className="hero-subtitle">
            Bold flavors, perfect fermentation, timeless tradition made with
            love and the finest ingredients.
          </p>
          <a href="#products" className="hero-cta">
            Discover Our Varieties
          </a>
        </div>
      </section>

      <section className="products">
        <h2>Elevate Your Meals with Our Signature Kimchi</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2>Contact Us for Orders & Inquiries</h2>
          <p className="intro">
            Interested in placing an order, wholesale, custom batches, or just
            have questions? Reach out to us!
          </p>

          <div className="contact-info-grid">
            <div className="contact-card email">
              <div className="icon">✉️</div>
              <h3>Email</h3>
              <a href="mailto:connect@stenix.dev">email@domain.com</a>
            </div>

            <div className="contact-card phone">
              <div className="icon">📱</div>
              <h3>Phone / Viber / WhatsApp</h3>
              <a href="tel:+639171234567">+63 9206203633</a>
            </div>

            <div className="contact-card location">
              <div className="icon">📍</div>
              <h3>Location</h3>
              <p>San Pedro St. Davao City, Philippines</p>
            </div>
          </div>

          <div className="contact-bg-decor"></div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Kimchi Biz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
