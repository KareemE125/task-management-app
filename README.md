# Task Manager
Task Manager App by ReactJS, Typescript, Redux Toolkit and tailwindCSS

### Visit Here 👉 https://task-manager-kareem-ezzats-projects.vercel.app/
**Note:** you should run the backend server (mentioned in **_Run The Project_** section)

### Dev Features:
1. React.js
2. Typescript (Type, Models, Generics, etc...)
3. Tailwind CSS
4. Redux Toolkit
7. Axios Integration
8. Errors
9. Loading
10. Caching
12. Folder Structuring
13. etc...

# Run The Project
### Run Frontend Website
1. Run `npm i` to install all the project dependencies
2. Run `npm run dev` to run the project
3. You will find a link for the running website appears in the console, often it is: `http://localhost:5173/`

### Run Backend Server to Serve JSON Database
1. Open the Folder called `backend-json-server` OR use `cd` command to go to the directory
2. Run `npm run start`
3. You will find a link for the running server appears in the console, it is: `http://localhost:3001/`

## Screenshots
![screencapture-localhost-5173-2024-06-14-19_44_56](https://github.com/KareemE125/task-manager/assets/61433385/538fcb38-1982-420a-ba61-adb2fb45ce88)
![screencapture-localhost-5173-tasks-2024-06-14-19_45_07](https://github.com/KareemE125/task-manager/assets/61433385/cbc63da2-a947-41a3-97b5-871a41d77fae)
![screencapture-localhost-5173-about-us-2024-06-14-19_45_17](https://github.com/KareemE125/task-manager/assets/61433385/301078de-a90a-4282-97f3-99d3b515bd7f)
![screencapture-localhost-5173-contact-2024-06-14-19_45_22](https://github.com/KareemE125/task-manager/assets/61433385/797eb157-580f-4b5f-a728-685f53187c3f)


============================================================================================

### React + TypeScript + Vite (Extra Info)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
