# JohnJohn

Web Application for JohnJud's website.
This project is a part of [johnjud_care](https://www.instagram.com/johnjud_care/).

## Prerequisites

Please install the following.
-   [Node.js](https://nodejs.org/en/)
-   [pnpm](https://pnpm.io/)
-   [Git](https://git-scm.com/)

This project use [React](https://react.dev/) as UI Library with [Vite](https://vitejs.dev/) as development environment, and [TailwindCSS](https://tailwindcss.com/) as CSS Framework.

For front-end design you can see in [JohnJud's Figma](https://www.figma.com/file/3XVvUcZ9DvTX6ZTzErm0zo/Untitled?type=design&node-id=0%3A1&mode=design&t=ToeeWyxtvaaucvok-1). You can download all resources in figma too.

For requirement Johnjud's Doc is [here](https://docs.google.com/document/d/1lADvCGDaIPoJEO7E5bx8asFcabMTtpvtFuBCv5hLIFk/edit?usp=sharing).

## Getting Started

1. Clone this repository


```bash
# Using SSH (recommended)
git clone git@github.com:isd-sgcu/johnjud-frontend.git

# Using Https (not recommended)
https://github.com/isd-sgcu/johnjud-frontend.git
```

2. Go to project folder
```bash
cd johnjud-frontend
```

3. Install all dependencies
```bash
pnpm install
```

4. Run
```bash
pnpm dev
```

5. Go to [http://localhost:3000](http://localhost:3000) in your fav browser.

## Contributing

We will seperate a branch for each features and each person then, create pull request for combine code together.

1. Go to `dev` branch and pull updated code
```bash
git checkout dev

git pull
```

2. Create branch and go to your branch
```bash
git branch {your_branch_name}

git checkout {your_branch_name}
```
> Note : exmaple of {your_branch_name} is boom/feat/pet-card, aungpao/refactor/main-page

3. Push your branch upstream
```bash
git push --set-upstream origin {your_branch_name}
```

4. Working with your code

5. Stage and commit your changes
```bash
git add .

git commit -m {commit_message}
```

6. Push your code in to your branch
```bash
git push
```

7. Create pull request to `dev` branch in github
8. Wait for the code to be reviewed and merged

### Conventional Commit Format

In short, the commit message should look like this:

```bash
git commit -m "feat: <what-you-did>"

# or

git commit -m "fix: <what-you-fixed>"

# or

git commit -m "refactor: <what-you-refactored>"
```

The commit message should start with one of the following types:

-   feat: A new feature
-   fix: A bug fix
-   refactor: A code change that neither fixes a bug nor adds a feature
-   style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

For more information, please read the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/) documentation.