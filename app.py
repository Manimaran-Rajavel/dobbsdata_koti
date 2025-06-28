from flask import Flask, render_template

app = Flask(__name__)

@app.route('/dobbsdata/')
def landingPage():
    return render_template('Cloud_Data_Analytics _ Dobbs_Data_Consultants.html')


if __name__ == '__main__':
    app.run(debug=True)