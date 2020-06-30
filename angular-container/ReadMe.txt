7 Steps to Dockerize Your Angular 9 App With Nginx

https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac


1. ng serve
   http://localhost:4200
2. docker build -t angular-9-app .
3. docker image list
4. docker run --name ng-app-container -d -p 8080:80 angular-9-app
   http://localhost:8080
