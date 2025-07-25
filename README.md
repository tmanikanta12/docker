# docker

$ sudo apt-get update
$ sudo apt-get install docker.io
$ docker --version
📥 Clone the Repository
bash
Copy
Edit
$ git clone https://github.com/Adivishnu15/Docker.git
$ cd Docker
🔁 Note: For Java, Python, or Web projects, only the source code and image name change. Docker commands remain the same.

🛠️ General Docker Workflow
Create a new folder and add your Dockerfile and source code.

Build your Docker image:

bash
Copy
Edit
$ docker build -t <image-name> .
Run your Docker container:

bash
Copy
Edit
$ docker run -it <image-name>
(Optional) Login to DockerHub:

bash
Copy
Edit
$ docker login -u <your-username>
Tag and push image to DockerHub:

bash
Copy
Edit
$ docker tag <image> <username>/<image>
$ docker push <username>/<image>
Pull image from DockerHub:

bash
Copy
Edit
$ docker pull <username>/<image>
Run pulled image:

bash
Copy
Edit
$ docker run -it <username>/<image>
📚 Experiments
Java-based
🧪 Experiment 5: Sum and Average of First 10 Numbers
bash
Copy
Edit
$ docker build -t sumavgjava .
$ docker run sumavgjava
🧪 Experiment 6: Arithmetic Operations on Two Integers
bash
Copy
Edit
$ docker build -t arithjava .
$ docker run arithjava 10 20
🧪 Experiment 7: Display Student Details (Name, Roll No, Dept)
bash
Copy
Edit
$ docker build -t studentjava .
$ docker run studentjava
Python-based
🧪 Experiment 8: Sum and Average of First 10 Numbers
bash
Copy
Edit
$ docker build -t sumavgpy .
$ docker run sumavgpy
🧪 Experiment 9: Arithmetic Operations on Two Integers
bash
Copy
Edit
$ docker build -t arithpy .
$ docker run arithpy 10 20
🧪 Experiment 10: Display Student Details (Name, Roll No, Dept)
bash
Copy
Edit
$ docker build -t studentpy .
$ docker run studentpy
Web-based
🧪 Experiment 11: Change Background Color of Web Page
bash
Copy
Edit
$ docker build -t bgcolor-demo .
$ docker run -d -p 8080:80 bgcolor-demo
Visit http://localhost:8080 in your browser.

🧪 Experiment 12: Login Form Validation
bash
Copy
Edit
$ docker build -t loginform-demo .
$ docker run -d -p 8080:80 loginform-demo
Visit http://localhost:8080 in your browser.

💡 Tips
If the Docker container seems to pause/hang, use Ctrl + C to stop.

Make sure to change the image names to avoid conflicts.

Ensure the correct file permissions are set if files aren’t running.

📦 Contributing
Pull requests are welcome! If you’d like to add more Docker experiments or improve existing ones, feel free to contribute.

📄 License
This project is licensed under the MIT License.
