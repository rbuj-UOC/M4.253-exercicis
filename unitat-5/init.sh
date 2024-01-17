npm init -y
npm i -D eslint babel-eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard standard
npm install eslint-plugin-html --save-dev
npm init @eslint/config

# After running the config, edit the file eslintrc.json and add the line below:
# "plugins": ["html"],

./node_modules/.bin/eslint --ext .html .
