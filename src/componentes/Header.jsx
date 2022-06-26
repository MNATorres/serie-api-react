import '../estilos/Header.css'

function Header({ logoMarvel }) {
  return (
  <div className='header-componente'>
    <img 
    className='header-componente-img'
    src={logoMarvel} />
  </div>
  );
}

export default Header;