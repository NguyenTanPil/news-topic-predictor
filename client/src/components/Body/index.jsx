import {
  Container,
  Card,
  Textarea,
  ModelsContainer,
  Models,
  Model,
  LabelsContainer,
  Title,
  Labels,
  Label,
  ActionsContainer,
  Actions,
  Result,
  Predict,
} from './BodyStyles';
import TextareaAutosize from 'react-textarea-autosize';
import RadioBox from '../RadioBox';
import { Button } from '../Common';
import { useState } from 'react';
import loadingIcon from './loading-icon.gif';

const modelName = {
  decision_tree: 'Decision Tree',
  logistic_regression: 'Logistic Regression',
  naive_bayes: 'Naive Bayes',
  svm: 'SVM',
};

const Body = () => {
  const [model, setModel] = useState('decision_tree');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState('...');

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        body: JSON.stringify({
          input,
          model,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      const output = await response.json();
      setTopic(output.result);
    } catch (error) {
      setTopic('...');
    }

    setLoading(false);
  };

  const handleReset = () => {
    setModel('decision_tree');
    setInput('');
    setTopic('...');
  };

  return (
    <Container>
      <Card>
        <Textarea>
          <Title htmlFor="news">News</Title>
          <TextareaAutosize
            id="news"
            name="news"
            placeholder="Enter your news"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </Textarea>
      </Card>
      <Card hard={1}>
        <LabelsContainer>
          <Title>Labels</Title>
          <Labels>
            <Label>Chinh Tri Xa Hoi</Label>
            <Label>Doi song</Label>
            <Label>Khoa hoc</Label>
            <Label>kinh doanh</Label>
            <Label>Phap luat</Label>
            <Label>Suc khoe</Label>
            <Label>The Gioi</Label>
            <Label>The Thao</Label>
            <Label>Van hoa</Label>
            <Label>Vi tinh</Label>
          </Labels>
        </LabelsContainer>

        <Predict>
          <ModelsContainer>
            <Title>Choose a model</Title>
            <Models>
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
                  label="Logistic Regression"
                  name="logistic_regression"
                  value="logistic_regression"
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
                  label="SVM"
                  name="svm"
                  value="svm"
                  current={model}
                  handleChange={setModel}
                />
              </Model>
            </Models>
          </ModelsContainer>

          <ActionsContainer>
            <Title>Actions</Title>
            <Actions>
              <Button onClick={handleSubmit}>Predict</Button>
              <Button onClick={handleReset}>Clean</Button>
            </Actions>
          </ActionsContainer>
        </Predict>

        <Result>
          <Title>Result</Title>
          <div>
            <p>
              Model is <span>{modelName[model]}</span>{' '}
            </p>
            {loading ? (
              <img src={loadingIcon} alt="" />
            ) : (
              <p>
                This news is <span>{topic}</span> Topic
              </p>
            )}
          </div>
        </Result>
      </Card>
    </Container>
  );
};

export default Body;
