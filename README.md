# serverless_offline_simplests_lambda

npm install OR yarn

npm start OR yarn start

serverless invoke local --function hello

https://www.youtube.com/watch?v=bPd7z_5NM-8&ab_channel=Codewithtkssharma

## Docker commands

docker build -t lambda_img .

use “docker images" command to see images in the local system

docker run -itd --rm --name lambda_container -p 3000:3000 lambda_img

to stop container:

docker container stop lambda_container