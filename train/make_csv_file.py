from os import listdir
import re
import pandas as pd

train_dir = './Train_Full'
test_dir = './Test_Full'

LABELS = ['Chinh tri Xa hoi', 'Doi song', 'Khoa hoc', 'Kinh doanh', 'Phap luat', 'Suc khoe', 'The gioi', 'The thao',
          'Van hoa', 'Vi tinh']


def create_dataset(file_name_output, directory):
    labels = []
    text = []
    for label in LABELS:
        dir_folder = '%s/%s' % (directory, label)
        for filename in listdir(dir_folder):
            full_filename = '%s/%s' % (dir_folder, filename)
            with open(full_filename, "r", encoding='utf-16') as f:
                get_text = f.read().replace('\n', ' ')
                text.append(get_text)
                labels.append(label)

    df = pd.DataFrame([text, labels], ['text', 'label']).T
    df.to_csv(file_name_output, encoding='utf-8', index=False)


# # Train dataset
# create_dataset('train_data.csv', train_dir)
# # Test dataset
# create_dataset('test_data.csv', test_dir)


