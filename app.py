from flask import Flask, render_template, url_for, request
from flask_material import Material
import pandas as pd

from preprocess import Preprocess
import load_model as Models

app = Flask(__name__)
Material(app)


@app.route('/analyze', methods=['POST'])
def analyze():
  if request.method == 'POST':
    # get value in form
    input_form = request.form['post-input']
    model_choose = request.form['model_choose']

    # preprocess input
    pre = Preprocess()
    input_pre = pre.fit(input_form)

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
    
    prediction = model.predict(input_tf)
    output = ''.join(prediction)
    return render_template('index.html', pred=output, input=input_form)
  else:
    return render_template('index.html')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)