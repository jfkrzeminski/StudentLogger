import datetime
from gtts import gTTS
from pygame import mixer


mixer.init()


def get_tts(message):
    speech_file = gTTS(message)
    filename = message[:20] if len(message) > 20 else message
    speech_file.save(f"tts_audio/{filename}.mp3")


def play_tts(message):
    filename = message[:20] if len(message) > 20 else message
    mixer.music.load(f"tts_audio/{filename}.mp3")
    mixer.music.play()


def get_timeout_message(td: datetime.timedelta, name: str):
    mins_gone = td.seconds // 60
    return f"{name} returned from the bathroom after {mins_gone} minute{'s' if mins_gone != 1 else ''} and {td.seconds % 60} seconds."
