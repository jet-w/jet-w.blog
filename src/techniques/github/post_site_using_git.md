---
title: How to post you site on using Git
icon: /github.svg
date: 2022-01-09
category:
  - github
tag:
  - github
  - gitpage
---

## How to setup Secrets Key
Secret key is related to repository for CI/CD using.
![SSH Private KEY](/data/techniques/github/CI-CD/repository_secret.png)

### How to use the Key
The following code define to post all content in `src/.vuepress/dist` to git@github.com:seamice/
``` YML
      - uses: cpina/github-action-push-to-another-repository@main
        env:
          SSH_DEPLOY_KEY: ${{ secrets.TEST_SECRET_KEY }}
        with:
          source-directory: 'src/.vuepress/dist'
          destination-github-username: 'seamice'
          destination-repository-name: 'seamice.github.com'
          user-email: unisa.dady@gmail.com
          target-branch: gh-pages
          target-directory: /
```

## How to setup SSH key for github Account
![SSH Public KEY](/data/techniques/github/CI-CD/account_sshpub.png)




## Pre-requirement
You should know how to use git. And how to push your project on github.

## How to post your own website
Here is the content for how to use github to post your personal static website.

## Different deployment methods
Here is the content on different way to deploty your website.





## Github Action
### How to post to another repository
01. https://cpina.github.io/push-to-another-repository-docs/
02. https://github.com/cpina/push-to-another-repository-docs