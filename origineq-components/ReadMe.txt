# Project
This project contains the code to test the components used by OriginEq:
- DLS
- ag-grid
- highchart

## Installation
1. Install [yarn package manager](https://yarnpkg.com)
2. Make sure you have access to Package Manager to install dls/wiq packages.
3. Get access tokens:
  - The below command generates credentials in the file C:/Users/YourName/.npmrc. Added the needed credentials on VSTS at Pipelines > Library for the library             component to be successfully authorized during the build pipeline.
  - For Windows users:
    Run the command to generate credentials on your local machine - `vsts-npm-auth -config .npmrc`. If auth helper is not installed, then install and run the auth helper:
    ```
    npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
    vsts-npm-auth -config .npmrc
    ```
  - For Linux/Mac users:
    Use this [instruction](https://docs.microsoft.com/en-us/vsts/package/get-started-npm?view=vsts#linux-or-mac) for feeds:
    - https://slb-swt.visualstudio.com/liftiq/_packaging?feed=slb-wiq&_a=feed
    - https://slb-swt.visualstudio.com/liftiq/_packaging?feed=slb-dls&_a=feed


