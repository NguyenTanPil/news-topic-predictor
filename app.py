from flask import Flask, json, request, redirect
from flask.helpers import send_from_directory, url_for
from flask_cors import CORS, cross_origin

from preprocess import Preprocess
import load_model as Models

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)


@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
  # get data
  data = json.loads(request.data)
  input = data['input']
  model_choose = data['model']
  
  # preprocess input
  pre = Preprocess()
  input_pre = pre.fit(input)

  # load tfidf
  tfidf = Models.load_tfidf()
  input_tf = tfidf.transform([input_pre])

  # predict by model
  if model_choose == 'svm':
    model = Models.load_svm_model()
  elif model_choose == 'decision_tree':
    model = Models.load_decision_tree()
  elif model_choose == 'multinomiaNB':
    model = Models.load_multinomiaNB()
  else:
    model = Models.load_logistic_regression()
    
  # prediction
  prediction = model.predict(input_tf)
  output = ''.join(prediction)

  return {
    "result": output
  }

@cross_origin()
def serve():
  return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)