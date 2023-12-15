# blog

## Table of contents

- [Summary](#summary)
- [Epics & Stories](#epics--stories)
    - [Basic blogging](#basic-blogging)
    - [Advanced blogging](#advanced-blogging)
    - [Legendary blogging](#legendary-blogging)
- [How to setup](#how-to-setup)


## Summary
Create a full-fledged blogging platform.

## Epics & Stories
### Basic blogging
    - CRUD users + session
        - user/author:
            - sign up
            - sign in
            - edit profile
        - admin
            - list users
            - delete users
            - edit users
            - disable users
    - CRUD posts
        - user:
            - read a post
            - list posts
        - author: 
            - create a post
            - edit a post
    - CRUD comments
        - user:
            - read comments list
            - add comment
    - basic stats on dashboard
        - my comments count
        - my posts count
        - visits per posts

### Advanced blogging
    - upload avatars for profiles
    - WYSIWYG editor for posts
    - quick search (search engine)
    - posts hashtags
    - advanced stats with charts on dashboard

### Legendary blogging
    - semi-automatic spam management
     - upload images for posts + WYSIWYG editor
    - create link automatically in posts by text analysis


## How to setup
At the root of your project run
```sh
npm i
npm run dev
```