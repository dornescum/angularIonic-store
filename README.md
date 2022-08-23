
# angularIonic-store

# Check first
global packages:
`npm list -g --depth=0`
**OR**
`npm root -g | gci` in Power Shell

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

When using **Ionic Framework in an Angular project**, install the latest @ionic/angular package from npm. This comes with all of the Ionic Framework components and Angular specific services and features.


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
