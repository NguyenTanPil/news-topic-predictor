import { About, Container, Content, Info } from './FooterStyles';

const Footer = () => {
  return (
    <Container>
      <Content>
        <About>
          <h2>News Topic Predictor</h2>
          <p>
            Building a text classification application to predict news of 10
            topics with Decision Tree, Logistic Regression, Naive Bayes and SVM
            models. Go to my{' '}
            <a
              href="https://github.com/NguyenTanPil/pred-news-topic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project
            </a>{' '}
            in github repository.
          </p>
        </About>
        <Info>
          <h2>Information</h2>
          <p>Nguyễn Tấn Pil - B1812295</p>
          <p>Nguyễn Thanh Tâm - B1812301</p>
        </Info>
      </Content>
    </Container>
  );
};

export default Footer;
