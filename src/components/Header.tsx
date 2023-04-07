import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-center bg-darkish" >
      <img src={logo} alt="Car rental" />
    </header>
  );
};

export default Header;
