# Mockup E-commerce Project

This mockup e-commerce project is designed to cater to both Android and web platforms, offering a seamless and responsive user experience. Utilizing the robust **Angular framework (v14.0.0)**, the application ensures a dynamic and interactive frontend, suitable for modern retail needs.

The project leverages the latest **Ionic technologies (v6.3.3)** for mobile-first design, ensuring optimal performance and a native-like experience on Android devices. Enhanced by **Capacitor (v4.0.1)** plugins, the application integrates native functionalities like haptics, keyboard interactions, and efficient app preferences management.

At its core, the application connects to a reliable back-end service built with **Express and MySQL**. This backend integration ensures robust data handling, secure transactions, and dynamic content management, making the platform ideal for real-time e-commerce operations.

## Key Frontend Features:

- **Angular (v14.0.0)**: Offers a powerful and efficient framework for building scalable web applications.
- **Ionic Framework (v6.3.3)**: Provides a suite of UI components for developing high-quality cross-platform apps.
- **Capacitor Plugins**: Enhance the native capabilities on Android, including features like haptics feedback and keyboard interactions.
- **State Management with NgRx (v14.2.0)**: Ensures efficient state management in Angular applications, crucial for handling complex user interfaces and data interactions.

## Development Tools:

- **Angular CLI (v14.0.0)**: A command-line interface for Angular, facilitating project scaffolding, development, and testing.
- **ESLint and TypeScript ESLint**: Enforce coding standards and detect potential errors in TypeScript code.
- **Docker for MySQL**

![Alt Text](/src/assets/images/1.png);
![Alt Text](/src/assets/images/2.png);

# Check first
global packages:
`npm list -g --depth=0`
**OR**
`npm root -g | gci` in PowerShell

## Requirements
>@angular/cli@ ^14.0.0 `npm install -g @angular/cli`

> ionic/angular-toolkit ^6.0.0 `npm install -g @ionic/cli`

>ionic/angular ^6.1.9

> capacitor/cli" "4.0.1" `npm i @capacitor/core`
`npm i -D @capacitor/cli`

>node 14.17.4

> npm ^8.1.3



## Download and install
>git clone repo

> cd mobileInventory

>npm install

> ionic serve

>ionic build

> ionic capacitor add [options] //ios or android

after

> ionic capacitor open [options] //ios or android

`for android hard reset of emulator if you had previous app open`

after build 

>npx cap sync

### If error check this
> npm install -g @ionic/cli

If there was a previous installation of the Ionic CLI, **it will need to be uninstalled** due to a change in package name.

> npm uninstall -g ionic

> npm install -g @ionic/cli

## Sync your web code to your native project

`Once you've created your native projects, you can sync your web application to your native project by running the following command.`

> npx cap sync

`npx cap sync will copy your built web application, by default www, to your native project and install the native projects dependencies.`




### If Angular + Ionic = Love

> npm install @ionic/angular@latest --save

When using **Ionic Framework in an Angular project**, install the latest @ionic/angular package from npm. This comes with all the Ionic Framework components and Angular specific services and features.


# For adding Ionic to an already existing Angular project, use the Angular CLI's ng add feature.

>ng add @ionic/angular

---

## Installing Capacitor

---

## Creating a new Capacitor application

>npm init @capacitor/app


## Adding Capacitor to your existing web application

> **INFO**
>Your index.html file must have a <head> tag in order to properly inject Capacitor. If you do not have a <head> in your Html, Capacitor plugins will not work.

## Install Capacitor

>npm i @capacitor/core

>npm i -D @capacitor/cli


## Initialize your Capacitor config

> npx cap init

## Create your Android and iOS projects

> npm i @capacitor/android @capacitor/ios

`Once the platforms have been added to your package.json, you can run the following commands to create your Android and iOS projects for your native application.`


> npx cap add android

>npx cap add ios

## Sync your web code to your native project

`Once you've created your native projects, you can sync your web application to your native project by running the following command.`

> npx cap sync

`npx cap sync will copy your built web application, by default www, to your native project and install the native projects dependencies.`

https://www.youtube.com/watch?v=GSc1fHXVBGg
