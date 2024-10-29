# Lecture Notes

### Git branching and Deployment

Branching:
- Concepts of labeling and workflow  
- New terminal commands:
  - `git checkout -b <branch-name>`
    - always checkout new branches from `main`
  - `git checkout <branch-name>`
  - `git push origin <branch-name>`
  - `git pull origin main`
    - always keep local main branch current with main branch on GitHub
  - `git branch`  
- Pushing different branches  
- Isolating changes  
- Remind students of proper workflow and emphasize the importance of performing all of the steps in the correct order. They will confused at first, so encourage students to make a cheat sheet and be very mindful of when and why each command is used
- It can be helpful to show a network graph in GitHub as an illustration of proper branching and workflow

### Git Branching

Each student will be working on a separate branch for each problem. Work through the first problem together:
1. Walk through the process of forking and cloning the repository
1. Check out a new branch named `problem1`
1. Solve the problem
1. Add-Commit-Push to GitHub
1. Making a pull request from `problem1` to `main`. 
1. Point out that their pull request should be between branches within *THEIR OWN* forked repository, and NOT from their repository to the class repository. 
1. Switch back to main and demonstrate the purpose of the `git pull origin main` command.

### Deployment:

- Show students how to navigate in GitHub to Settings, then scroll down to find the url of their deployed page
  - The deployed site takes the format of: `https://<username>.github.io/<repo-name>/`
