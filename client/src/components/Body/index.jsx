import {
  Container,
  Card,
  Textarea,
  ModelsContainer,
  Models,
  Model,
} from './BodyStyles';
import TextareaAutosize from 'react-textarea-autosize';
import RadioBox from '../RadioBox';
import { useState } from 'react';

const Body = () => {
  const [model, setModel] = useState('svm');

  return (
    <Container>
      <Card>
        <Textarea>
          <label htmlFor="news">Post</label>
          <TextareaAutosize id="news" name="news" autoFocus></TextareaAutosize>
        </Textarea>
      </Card>
      <Card>
        <ModelsContainer>
          <label>Choose a model</label>
        </ModelsContainer>
        <Models>
          <Model>
            <RadioBox
              label="SVM"
              name="svm"
              value="svm"
              current={model}
              handleChange={setModel}
            />
          </Model>
          <Model>
            <RadioBox
              label="Decision Tree"
              name="decision_tree"
              value="decision_tree"
              current={model}
              handleChange={setModel}
            />
          </Model>
          <Model>
            <RadioBox
              label="Naive Bayes"
              name="naive_bayes"
              value="naive_bayes"
              current={model}
              handleChange={setModel}
            />
          </Model>
          <Model>
            <RadioBox
              label="Logistic Regression"
              name="logistic_regression"
              value="logistic_regression"
              current={model}
              handleChange={setModel}
            />
          </Model>
        </Models>
      </Card>
    </Container>
  );
};

export default Body;
