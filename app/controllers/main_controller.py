from flask import Blueprint, render_template
from app.models.user_model import UserModel

main_controller = Blueprint("main_controller", __name__, template_folder="../views/templates") 
weather_controller = Blueprint("weather_controller", __name__)

#Weather Segment
API_KEY = "704bf997547d0f7ed616723a4499158b"  # Replace with your API key
CITY = "Singapore"
#

#User data retrieval
@main_controller.route("/")
def home():
    user = UserModel.get_user()
    return render_template("main.html", user=user)

#Weather data retrieval
@weather_controller.route("/weather")
def get_weather():
    weather_url = f"https://api.openweathermap.org/data/2.5/weather?q={CITY}&units=metric&appid={API_KEY}"
    response = requests.get(weather_url)
    data = response.json()
    
    weather_data = {
        "city": data["name"],
        "temperature": data["main"]["temp"],
        "description": data["weather"][0]["description"],
        "icon": f"https://openweathermap.org/img/wn/{data['weather'][0]['icon']}.png"
    }
    
    return jsonify(weather_data)