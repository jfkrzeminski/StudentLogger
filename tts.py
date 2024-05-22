import datetime
# import pyttsx3
from gtts import gTTS
from pygame import mixer


mixer.init()
# engine = pyttsx3.init()


def get_tts(message, name):
    speech_file = gTTS(message)
    speech_file.save(f"tts_audio/{name}.mp3")


def play_tts(name):
    mixer.music.load(f"tts_audio/{name}.mp3")
    mixer.music.play()


def get_and_play_tts(message):
    engine.say(message)
    engine.runAndWait()


def get_timeout_message(td: datetime.timedelta, name: str):
    mins_gone = td.seconds // 60
    return f"{name} returned after {mins_gone} minute{'s' if mins_gone != 1 else ''} and {td.seconds % 60} seconds."
