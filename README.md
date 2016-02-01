# kokoa - A koa-react-webpack starter project

assumes the following is pre-installed:

node version 5.4.0

npm version 3.5.3


#instructions to run the project:

git clone git@github.com:aregsar/kokoa.git

cd kokoa

npm install

mv ./app/assets/html/index.html ./public/index.html

npm run webpack:watch

open a new terminal tab in same directory

npm start

navigate to: http://localhost:3000

make changes, save and refresh the browser

#live reloading webpack modules

stop webpack server

mv ./app/assets/html/index.hot.html ./public/index.html

npm run webpack:serve

make changes to client side script files and see browser automatically refresh with changes


#command to re-install local packages from package.json file

cd kokoa

rm -rf node_modules && npm install 


#Optional:

commands for manually (re)installing local packages.

note: xxx-loader modules depend on a previously installed webpack module


cd kokoa

npm install --save koa

npm install --save koa-static

npm install --save koa-logger

npm install --save react@0.14.6

npm install --save react-dom@0.14.6

npm install --save-dev babel@6

npm install --save-dev babel-core@6

npm install --save-dev babel-cli@6

npm install --save-dev webpack

npm install --save-dev webpack-dev-server

npm install --save-dev babel-loader@6

npm install --save-dev react-hot-loader

npm install --save-dev babel-preset-react

npm install --save-dev babel-preset-es2015

npm install --save-dev babel-preset-stage-0

npm install --save-dev nodemon 











