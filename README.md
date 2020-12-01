## Installation

**Prerequisites:**
- Make sure PHP is installed on your system
- Make sure [Node/NPM](https://nodejs.org/en/download/) (and optionally [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)) is installed on your system
- Make sure PHP [Composer](https://getcomposer.org/doc/00-intro.md#globally) is installed and available globally

**Installation**
1. Clone repository to a directory of your choice
2. In Terminal run `composer install` to install needed composer packages
3. Run `npm install` or `yarn install` to install the needed javascript packages
4. Create a copy of the `.env.example` file and rename it to  `.env`
5. Run `php artisan key:generate` to generate a random project key
6. Create an empty MySQL database
7. In the `.env` file fill in the `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` options to match the credentials of the database you just created
8. Run `php artisan migrate` to automatically create all tables used in the project to your database

## Usage ##
Use `npm run watch-poll` or `yarn run watch-poll` to run live reloading of changed files. 
Run `npm run dev`or `yarn run dev` for compiling assets for development.
Run `npm run prod` or `yarn run dev` for compiling assets for production.