# docker

$ sudo apt-get update
$ sudo apt-get install docker.io
$ docker --version

$ docker build -t <image-name> .
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

