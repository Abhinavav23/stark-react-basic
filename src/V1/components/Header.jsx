import { Icon } from "./Icon";
import { Logo } from "./Logo";
import SearchBar from "./SearchBar";

export const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <SearchBar />
      <Icon/>
    </div>
  );
};

// combines or wraps multiple components
// gives a specific functionality of header