const Footer = () => {
  return (
    <footer>
      <div className="container d-flex flex-column align-items-center justify-content-center py-2">
        <p>Contactanos!</p>
        <p>Tel: 555-2222</p>
        <p>Direccion: Florida 456 - CABA</p>
      </div>
      <div className="container d-flex justify-content-center py-2">
        <a href="#root" className="px-4">
          <img src="../assets/icons/mail.svg" alt="facebook logo" />
        </a>
        <a href="#root" className="px-4">
          <img src="../assets/icons/twitter.svg" alt="facebook logo" />
        </a>
        <a href="#root" className="px-4">
          <img src="../assets/icons/instagram.svg" alt="facebook logo" />
        </a>
        <a href="#root" className="px-4">
          <img src="../assets/icons/facebook.svg" alt="facebook logo" />
        </a>
      </div>
      <p className="text-center">© 2022 Copyright</p>
    </footer>
  );
};

export default Footer;
