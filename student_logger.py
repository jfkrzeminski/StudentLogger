import csv
import datetime
import os

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


def log_time(custom_code, action):
    now = datetime.datetime.now()
    with open(log_file, mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([custom_code, action, now])


def main():
    print("Welcome to the Student Logging Program!")
    print("Enter custom numeric codes to log student actions.")
    print("Type 'quit' to exit the program.")

    while True:
        custom_code = input("Enter custom numeric code: ").strip()

        if custom_code.lower() == 'quit':
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

        print(f"Action '{action}' logged for custom code '{custom_code}'.")


if __name__ == "__main__":
    main()

