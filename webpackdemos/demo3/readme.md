## demo3 webpack and es6 using babel-loader

```

In this example, we’re going to tell webpack to run our source files through Babel so we can use ES2015 features.

Install Babel and the presets:

 npm install --save-dev babel-core babel-preset-es2015
Install babel-loader:

 npm install --save-dev babel-loader
Configure Babel to use these presets by adding .babelrc

 { "presets": [ "es2015" ] }
Modify webpack.config.js to process all .js files using babel-loader.

 module.exports = {
     entry: './src/app.js',
     output: {
         path: './bin',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
         }]
     }
 }
We are excluding node_modules here because otherwise all external libraries will also go through Babel, slowing down compilation.

Install the libraries you want to use (in this example, jQuery):

 npm install --save jquery babel-polyfill
We are using --save instead of --save-dev this time, as these libraries will be used in runtime. We also use babel-polyfill so that ES2015 APIs are available in older browsers.

Edit src/app.js:

 import 'babel-polyfill';
 import cats from './cats';
 import $ from 'jquery';

 $('<h1>Cats</h1>').appendTo('body');
 const ul = $('<ul></ul>').appendTo('body');
 for (const cat of cats) {
     $('<li></li>').text(cat).appendTo(ul);
 }
Bundle the modules using webpack:

 webpack
Add index.html so this app can be run:

 <!DOCTYPE html>
 <html>
     <head>
         <meta charset="utf-8">
     </head>
     <body>
         <script src="bin/app.bundle.js" charset="utf-8"></script>
     </body>
 </html>
When you open index.html, you should now see a list of cats!
```