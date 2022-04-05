# About App

- We are going to implement clean architecture using react native and TypeScript on this app.
- In this app, we will have four different screens i.e login , users list, user detail and add new user screen.
- This app uses the fake api server i.e https://reqres.in/ for backend support.
- This app run on both the platform ios and android.

# Business Rules

- There should be login feature where only authenticated users can have access to the other feature of the app.
- Proper form validation should be done on all the screen where form is used.

# Who will use this API?

We have four screens where this API can be used:

- Login Screen ----> User will be redirected to login screen on the first launch of an app and user are expected to enter the correct credentials for access of the app. Note: use email:"eve.holt@reqres.in" and password:"cityslicka" for successful login. As, there is no signup feature on this app. API URl used in this screen: "https://reqres.in/api/login"

- User List screen----> After successful login, user will be redirected to this screen where list of users will be shown. Also there is a add button at the bottom right corner which can redirect user to add new user. API URl used in this screen: "https://reqres.in/api/users?delay=3". Delay here indicates delayed response to show shimmering effects.

- User detail ----> Whenever user touches the card of user on user list screen, user will be redirected to this screen, where the details of user like avatar, email, name etc will be shown. API URl used in this screen: "https://reqres.in/api/users/id".

- Add new user screen ----> As there will be add button on bottom right corner on users list screen which can redirect user to this screen. On this screen user are expected to enter the required credentials fullname and job to add the new user. As we are using fake api server, it only allows us to test out add user request but doesn't actually update the database on the server. So, user will not be able to see the new added users on the users list screen. API URl used in this screen: "https://reqres.in/api/users".

# Folder Structure

->data: This layer is all responsible for actual api implementation. In this layer, we implement the useCase defined in domain layer to make an actual api call. This layer is all about data used in app from the remote server.

---->protocols: In this subfolder, we have defined all the interface for cache and http request necessary for api call like local storage, http status code, http methods, http request , http response and others.

---->useCase: In this subfolder, we have implemented the useCase interface of domain layer and made and actual api call. We have handled the error and http response as per the status code receieved from server on the API call.

->domain: This layer explains overall app functionality ,feature and functionality implemented in an app. Overall app overview can be explained and understood on this layer.

---->errors: This subfolder contains all the known error that can occur during the API call like access denied error, invalid credentials, unexpectd error etc on separate file.

---->model: This subfolder contains all the model or entities used in an app. For example in an ecommerce app, we can entites or model like cart, product, user and so on. Similary, all the entities used in this app will be defined on this folder.

---->useCase: This subfolder contains all the usecase interface that an app has like making authentication request, showing user list and so on. Only overview is defined on this app and actual implementation will be done on the data layer.

->infra:This layers implements all the storage and axios http request configuration for an app
---->cache : In this folder, we have implemented the interface for local storage for app. 
---->http: We configure the axios request to make an API request.

->main: We can refer this folder as the core where we keep all the necessary files and folder to structure the app like navigators, factories, store and others
---->builders: Usually to folllow the builder pattern, we keep all the necessary files related to build in this sub folder. For example, we have validation builder on this folder.

---->constants: This subfolder contains all the contants value that can be used across app. Like BASE URl can be same while making different api request.

---->decorators: This subfolder contains all the modified class to be used in an app. For example we usally have two kind of request authenticated and unauthenticated where authenticated request requires to pass the authorization token while making API request but for unauthenticated request we don't have to include the authorization token like while making login request, sign up request, forgot password request, terms and conditions request etc.

---->factories: Here, we can make make object of
---->navigators: In this subfolder, we have configured all the navigation route for all the screen. Further, we have separated the authenticated and unauthenticated navigation for screens used in app.
---->store: In this subfolder, we have configured all the redux setup. We have imported all the necessary reducer and saga, and combined on root reducer and saga.

->presentation: Every things that's related to the UI of an app will belong on this layer. All the components(i.e Widgets) ,icons , images and others related to UI will contain on an app.

---->assets: This subfolder will contain UI related images,icons, animations, fonts and others necessary for an app.

---->components: This subfolder contains all the common components(i.e widgets) like Form Inputs, buttons, text, Loader and others which can be used across all the screens in an app.

---->protocols :This subfolder contains all the interface to be used in an app screens like validation interface for form inputs.

---->screens: This is where all the screens UI is made by importing necessary components and also building new components required for that particular screens. Also, we have separated screens based upon the feature of an app like for examaple authentication subfolder contains all the authentication related screens like login, sign up, forgot password and others. We also have implemented the redux inside the particular screen folder.

->Validation
---->errors
---->protocols
---->validators
