# How to pusblish a profile resume porject site for free on Github using Vite React  
  
  
## Step 1: Create a Vite React App

1. Create a new Vite React app using the following command:

   ```bash
   npm create vite@latest
   ```

2. When prompted, provide a name for your project. as this is going profile repository so project name should be username.github.io, other wise it won't work. For example:

   ```
   ? Project name: › zeeshanalikhan15.github.io
   ```

3. Next, select "React" from the list of available JavaScript frameworks. Use the arrow keys to navigate and press Enter to select:

   ```
   ? Select a framework: › - Use arrow-keys. Return to submit.
       Vanilla
       Vue
   ❯   React
       Preact
       Lit
       Svelte
       Solid
       Qwik
       Others
   ```

4. Choose "JavaScript" as the project variant. Use the arrow keys to navigate and press Enter to select:

   ```
   ? Select a variant: › - Use arrow-keys. Return to submit.
       TypeScript
       TypeScript + SWC
   ❯   JavaScript
       JavaScript + SWC
   ```

5. Navigate to your project folder:

   ```bash
   cd test-proj
   ```

6. Install project dependencies:

   ```bash
   npm install
   ```

Now, you have a Vite-powered React app with the selected project name, framework, and variant.  
  
## Step 2: Configure Deployment

1. Edit your `package.json` and add a `"homepage"` field with the format `"https://username.github.io"`. Replace `username` with your GitHub username. No repo name is needed as this is a profile project so Github Pages already know the correct path

   ```json
   "homepage": "https://username.github.io",
   ```

2. Add a `deploy.sh` script to your project directory. You can create this file with the following content:

   ```bash
   #!/bin/bash

    # Get the current script's filename (i.e., 'deploy.sh')
    SCRIPT_FILENAME=$(basename "$0")
    
    # Run the Vite build command
    npm run build
    
    # Create or checkout a production branch
    git checkout -B prod
    
    # Remove all files and folders from the root except the dist folder, .gitignore, node_modules, and the script file
    shopt -s extglob
    rm -rf !(.gitignore|dist|node_modules|"${SCRIPT_FILENAME}")
    
    # Copy the contents of the dist folder to the root
    cp -r dist/* .
    
    # Add all changes
    git add .
    
    # Commit the changes
    git commit -m "Deploy to GitHub Pages"
    
    # Force push to the production branch on GitHub
    git push --force origin prod
    
    # Switch back to the main branch
    git checkout main
    
    # Delete the local 'prod' branch
    git branch -D prod
   ```

3. In your `package.json`, add a `"deploy:prod"` script in the `"scripts"` section, pointing it to the `deploy.sh` file:

   ```json
   "scripts": {
     "start": "vite",
     "build": "vite build",
     "deploy:prod": "bash deploy.sh"
   }
   ```

4. Commit and push everything to the `main` branch on GitHub:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
5. Run the `deploy:prod` script to deploy your app to GitHub Pages:

   ```bash
   npm run deploy:prod
   ```

## Step 3: Configure GitHub Pages

1. On GitHub, you'll now have two branches: `main` and `prod`. Go to your project's repository on GitHub.

   ![image](https://github.com/zeeshanalikhan15/zeeshanalikhan15.github.io/assets/31096902/941418a4-d77d-47e6-bcff-6590716400ff)


2. In the repository settings, navigate to the "GitHub Pages" section.

   ![image](https://github.com/zeeshanalikhan15/zeeshanalikhan15.github.io/assets/31096902/a625d1dc-5bef-47ca-ae9f-051640144890)


3. Under "Source," select the `prod` branch and choose `/root` from the dropdown. Save the configuration.

   ![image](https://github.com/zeeshanalikhan15/zeeshanalikhan15.github.io/assets/31096902/96f57cc8-4f5c-409e-bf03-22a69e77ef89)


## Step 4: Publish Your Website

1. Make a small change in your React app (e.g., edit `App.jsx`).

   ![image](https://github.com/zeeshanalikhan15/zeeshanalikhan15.github.io/assets/31096902/7cab89d2-9322-4099-a5d0-343cd0d06c7f)

2. push changes to main

   ```bash
   git add .
   git commit -m "small change in App.jsx"
   git push origin main
   ```

3. Run the following command to deploy the changes to GitHub Pages:

   ```bash
   npm run deploy:prod
   ```

In a few minutes, your website will be up and running at the URL: `https://username.github.io`.

Now, your local setup is ready to publish, and any changes you make to your app can be quickly deployed to your GitHub Pages site by running the `npm run deploy:prod` command.
