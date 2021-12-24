import { Container, Content } from './CopyrightStyles';

const Copyright = () => {
  return (
    <Container>
      <Content>
        {' '}
        <p>
          &copy; Copyright 2021 by <span>P&T.</span> All Rights Reserved.
        </p>
      </Content>
    </Container>
  );
};

export default Copyright;
