import {
  Container,
  Content,
  Brand,
  Items,
  Item,
  Dropdown,
} from './NavbarStyles';
import { Button } from '../Common';
import logo from './logo.png';

function Header() {
  return (
    <Container>
      <Content>
        <Brand>
          <img src={logo} alt="" />
          <span>P&T</span>
        </Brand>
        <Items>
          <Item>
            <span>Contact</span>
            <Dropdown>
              <ul>
                <li>
                  <a href="mailto:pilb1812295@student.ctu.edu.vn">Tan Pil</a>
                </li>
                <li>
                  <a href="mailto:tamb1812301@student.ctu.edu.vn">Thanh Tam</a>
                </li>
              </ul>
            </Dropdown>
          </Item>
          <Item>
            <Button>
              <a
                href="https://github.com/NguyenTanPil/pred-news-topic"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </Item>
        </Items>
      </Content>
    </Container>
  );
}

export default Header;
