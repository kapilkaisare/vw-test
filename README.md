## Problem statement

Create a single page Angular2 app with 3 views : Home page, Login page and dashboard page; using dummy json data as model data.

	1. Router in HTML5MODE and support customized navigation: for example, if user visits dashboard page without login, redirect to home page. If user login via Home-Login-Dashboard, at this point, back key will go back to Home, not Login page;
	2. Create a vrplayer component directive, <vrplayer></vrplayer>, which take options:{url:videoUrl} . to make it simple, define your own dummy player JS library, which may have play(), stop(), pause() functions.
	3. Provide a build system/script so the files are concatenate and minified with version #.
	4. Create a component directive, which allows a user to add the Cubenado(detail see Cubenado Assignment) using a customized HTML tag < cubenado ></ cubenado >. This tag will accept cube number and speed/ randomness as options.

## Candidate remarks

* Requirement 1 - completed.
* Requirement 2 - completed.
* Requirement 3 - completed.
*	Requirement 4 mentions a Cubenado Assignment which is not found in the folder titled 'Full_Stack'. I will exclude this from the solution.

The project was started using Angular CLI, which was then dropped in favor of Webpack, largely to satisfy requirement 3. In the process, the project is based off the [Angular Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter).

## Setup Instructions

Assuming you have [Node](https://nodejs.org/en/) installed on your machine, type the following commands at a shell prompt:

	$ git clone https://github.com/kapilkaisare/vw-test.git
	$ cd vw-test/assignment
	$ npm install
	$ npm run server:prod

You can see the app run at [http://localhost:8080/]().

## Build Instructions
	$ npm run build:prod