import csv
import datetime
import json
import os
import student_matcher
import tts

# Get today's date to create a log file for the day
today_date = datetime.datetime.now().strftime("%Y-%m-%d")
log_file = f'student_log_{today_date}.csv'

# Initialize the CSV file with headers if it doesn't exist
if not os.path.exists(log_file):
    with open(log_file, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Custom Code', 'Action', 'Timestamp'])

# Dictionary to track the state of each student code (in or out)
student_states = {}
student_timeout = {}


def log_time(custom_code, action):
    now = datetime.datetime.now()
    with open(log_file, mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([custom_code, action, now])
    if action == "out":
        student_timeout[custom_code] = now


def main():
    print("Welcome to the Student Logging Program!")
    print("Enter custom numeric codes to log student actions.")
    print("Type 'q' or 'quit' to exit the program.")

    with open("people.json", "r") as fd:
        student_ids = json.load(fd)

    while True:
        custom_code = input("Enter code: ").strip()
        if custom_code in student_ids:
            student_name = student_ids[custom_code]
        else:
            student_name = "NEW STUDENT"

        if custom_code.lower() == 'quit' or custom_code.lower() == 'q':
            print("Exiting the program.")
            break

        # Determine the action based on the current state
        if custom_code in student_states and student_states[custom_code] == 'out':
            action = 'in'
        else:
            action = 'out'

        # Log the action and update the state
        log_time(custom_code, action)
        student_states[custom_code] = action

        if action == "out":
            print(f" >  {student_name} (ID={custom_code}) left at {datetime.datetime.now().strftime('%H:%M:%S')}")
        else:
            time_d = datetime.datetime.now() - student_timeout[custom_code]
            print(f" >  {student_name} (ID={custom_code}) returned at {datetime.datetime.now().strftime('%H:%M:%S')}.")
            print(f"    Time Elapsed:  {str(time_d).split('.')[0]}")
            timeout_message = tts.get_timeout_message(time_d, student_name)
            tts.get_tts(timeout_message, student_name)
            tts.play_tts(student_name)
    student_matcher.main()


if __name__ == "__main__":
    main()
