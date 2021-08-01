import "./styles.css";
import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

export function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="http://www.youtube.com/c/DevSuperior" target="_new">
          <YoutubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/lucas-santos-gon%C3%A7alves-195720168/" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/lucas_mna/" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}
