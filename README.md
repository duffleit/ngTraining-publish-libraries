# Publish a library  

This exercise shows you how to generate a library and publish it to an artifact repository.

_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5._

## Boilerplate:

The project and the library, which is called the button is already created. In addition, an app, which has the purpose to test the button during development was added. This can be repeated with the following commands: 

```
ng new ngTraining-publish-libraries --create-application=false
cd ngTraining-publish-libraries
ng g lib button
# add a button and export it
ng g app button-test-app
# import and use the button
```

## Tasks: 

1. Build the button with `ng b button` and run the test-app with `ng serve button-test-app`.

2. Change the version of the button-library to `1.0.0` and rebuild it again. 

3. Start an artifact-repository. In our case, we will use _verdaccio_, which is a simple and fast node-based application which can be started by `npx verdaccio`. Next open `http://localhost:4873/` in your preferred browser.

4. Open your terminal and change directory to `./dist/button`. This is the location where your library files are dropped by `ng b button`. Run `npm pack` there, which will create a tarball-file of your files.  

5. Try to call `npm publish --registry http://localhost:4873`. This will end up with an error. Run `npm adduser --registry http://localhost:4873` and provide a username, a password and an email to register. No worries, _verdaccio_ is only running on your local machine. 

6. After this, you should be able to run `npm publish --registry http://localhost:4873`. 

7. Add a `.npmrc` to the project root and set the registry there: 

```
registry=http://localhost:4873
```

8. Run `npm publish dist/button` from your root after increasing the package-version to publish the library again in version `1.0.1`. 

9. Create a complete new angular-application with `ng new package-consumer`.

10. Install the published package by calling `npm i button --registry http://localhost:4873`.

11. Import the `ButtonModule` in the `AppModule` and use the `<lib-button></lib-button>` in your application. Test it with `ng serve`.
