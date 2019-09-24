# plugins-core
This project provides core functionalities for plugins. It defines @Extension decorator and PluginManager.

1. Run `npm install`
2. Run `npm run build`
3. Run `npm link`

# plugins-example
The project provides two components: button and label as the examples of plugins.
1. Run `npm install`
2. Run `npm link plugins-core`
3. Run `npm run build`
4. Run `npm link`

# plugins
This project privodes the functionalities to load plugins.
1. Run `npm install`
2. Run `npm link plugins-core`
3. Run `npm link plugins-example`
4. Run `npm start`

# browser
open your browser on http://localhost:4200/