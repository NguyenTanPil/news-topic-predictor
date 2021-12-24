import { About, Container, Background, Content } from './FooterStyles';
import bg from './bg.png';

const Footer = () => {
  return (
    <Container>
      <Content>
        <About>
          <h2>News Topic Predictor</h2>
          <p>
            Building a text classification application to predict news of 10
            topics. Our website uses built-in machine learning models of the
            sklearn library such as Decision Tree, Logistic Regression, Naive
            Bayes and SVM models.
          </p>
        </About>
        <Background>
          <img src={bg} alt="" />
        </Background>
      </Content>
    </Container>
  );
};

export default Footer;
