#JWT Storage Tutorial#

---

##Run Instructions:##

Make sure you have Node.js version 10.22.0 or greater and npm version 6.14.6 or greater.

Clone the code repository:

```
$ git clone https://github.com/Ghorbanian/jwt-storage-tutorial.git
```

Use `npm` to install the modules for the front-end and back-end by running the following command in the root directory of each application:

```
$ npm install
```

You can use `node` to run the back-end app by running the following command in the root directory of the application:

```
$ node index.js
```

You can use `npm` to run the front-end app by running the following command in the root directory of the application:

```
$ npm start
```

Alternatively, you can use PM2 to run the two applications by setting the correct value for the `cwd` config parameter in the ecosystem.config.js file found in the root directory of each application and running the following command:

```
$ pm2 start /path/to/ecosystem.config.js/file
```

---

Author: Amir Ghorbanian
Twitter: @amir_ghorbanian
Medium: @aghorbanian
