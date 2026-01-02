# vite-tailwind-supabase-vercel-starter
This project is meant to be used as a template to start building a web based application
with react and tailwind, it also includes auth flow supported by supabase and deployment via vercel.
Significantly decreasing time investment building auth flow boilerplate with pre-configured private
and public route tsx components. Plug and play with supabase database reads, writes, updates.
While offering easy deployability to vercel via github hook.

## Live Demo
### [vite-tailwind-supabase-vercel-start.vercel.app](https://vite-tailwind-supabase-vercel-start.vercel.app/)


## Frameworks
* React + Vite (typescript)
* Tailwindcss
* react-router-dom
* react-icons
* Supabase (Backend Auth + Database + Serverless Functions)
* Vercel (Frontend Deployment)

## Use This Template (Github Copy Template)
1. Click the 'Use this template' button on this repository in github
2. Select 'Create a new repository'
3. Follow the prompts

## Use This Template (Clone -> Detach -> Reinit)
1. Clone this repo (git clone {this repository ssh/https})
2. Remove the .git folder (rm -rf .git)
3. Initialize a new git repo (git init)
4. Create a new github remote repo
5. Connect local to remote repo (git remote add origin {new repository ssh/https})
6. Add all files in the project (git add .)
7. Commit the files in the project (git commit -m "initial commit")
8. Create a main branch (git branch -M main)
9. Push to the main branch in the new repo (git push -u origin main)

## Build & Startup
1. Update app title (index.html)
2. Update project name (package.json)
3. Update App Logo (AppLayout.tsx)
4. Update readme (README.md)
5. npm install
6. add .env file at the root of the project
7. create the parameters in the .env file VITE_SUPABASE_URL and VITE_SUPABASE_KEY set the values = to supabase values
8. npm run dev

## Deploy to Vercel
1. Permit vercel to access the github repo
2. Configure Supabase .env variables
3. Site is deployed
4. Update Supabase Authentication URL Configuration to point to your Vercel URL/dashboard

