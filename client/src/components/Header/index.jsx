import { Container, Content } from './HeaderStyles';
import { Button } from '../Common';

function Header() {
  return (
    <Container>
      <Content>
        <h1>Predict News Topics</h1>
        <Button>Reset</Button>
      </Content>
    </Container>
  );
}

export default Header;
