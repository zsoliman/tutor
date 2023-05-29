from flask import jsonify

from app import app

@app.route("/courses")
def course():
    courses = [
        {
            "name": "course1",
            "references": [
                "https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project"
            ]
        },
        {
            "name": "course2",
            "references": [
                "https://www.buzzfeed.com/jobarrow/can-you-even-adult-good"
            ]
        }
    ]
    return jsonify(courses=courses)

@app.route("/login", method=["POST"])
def login():
    pass
