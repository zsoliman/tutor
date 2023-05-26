from flask import jsonify

from app import app

@app.route("/courses")
def course(name):
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