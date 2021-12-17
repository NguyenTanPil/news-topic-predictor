import pickle

def load_svm_model():
    with open("./models/svm_model.pkl",  "rb") as f:
        model = pickle.load(f, encoding='utf8')
    return model

def load_decision_tree():
    with open("./models/decision_tree.pkl", "rb") as f:
        model = pickle.load(f, encoding='utf8')
    return model

def load_logistic_regression():
    with open("./models/logistic_regression.pkl", "rb") as f:
        model = pickle.load(f, encoding='utf8')
    return model

def load_multinomiaNB():
    with open("./models/multinomiaNB.pkl", "rb") as f:
        model = pickle.load(f, encoding='utf8')
    return model

def load_tfidf():
    with open("./models/tfidf.pkl", "rb") as f:
        model  = pickle.load(f, encoding='utf8')
    return model