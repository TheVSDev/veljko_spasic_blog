# blog

## Table of contents

- [Summary](#summary)
- [How to setup](#how-to-setup)


## Summary
Full-fledged blogging platform.
Different account types (reader, creator, admin) have access to different tabs on the navbar.

## How to setup
At the **root of your project**:
1. Run `npm i` to install all dependencies
2. Create a `.env.local` file and add this:
```
DB__CONNECTION=<Connection link to your PostgreSQL DB>
NEXT_PUBLIC_API__BASE_URL=<Link to API folder inside pages directory>
SECURITY__JWT__SECRET=<Secret code>
SECURITY__PASSWORD__PEPPER=<Secret code>
```
3. Run `npx knex migrate:latest` to update database
4. Run `npx knex seed:run` to populate database
5. Run `npm run dev` to start the development server

After having started the development server, if you want to log in as an admin, use following credentials:
- E-mail: `admin@admin.com`
- Password: `Admin123456>`