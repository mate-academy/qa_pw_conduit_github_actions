# Run Conduit API testing in GitHub Actions

## Table of contents

- [Description](#description)
- [Preparation](#preparation)
- [Main Task](#main-task)
- [Task Reporting](#task-reporting)

## Description

In this task you will need to create a GitHub Actions workflow for Conduit API testing. 


## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`


## Main Task

1. Create new workflow file `conduit_api_testing.yml` under the `.github/workflows` folder. 
2. Define the workflow with two jobs `run-api-tests` and `generate-and-publish-report`. 
3. The first job `run-api-tests` should:
- Add steps to install the Playwright dependencies: Node.js, npm packages and browsers. 
- Trigger the API tests; 
- Upload the `allure_results` artifact. 

4. The second job `generate-and-publish-report` should: 

- Download the `allure_results` artifact;
- Install JAVA and Allure CLI;
- Generate allure report to the `_site` folder;
- Upload pages artifact;
- Deploy to GitHub Pages. (Remember to enable publishing from the GitHub Actions in the Settings > Pages). 

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
