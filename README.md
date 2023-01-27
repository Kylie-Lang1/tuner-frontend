[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Tuner Front-End

## Front-end repo: 
https://github.com/Kylie-Lang1/bookmarks2-frontend-starter

## Getting Started

- keep the backend running, open a new tab
- `cd` to the front-end directory
- `npm i`
- `touch .env`
- add the correct environmental variables
- `npm start`
- `npm test` to run cypress tests

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

Using the [Tuner API that you built](https://github.com/9-1-pursuit/lab-express-sql-seed-read), you are going to create a frontend-only app.

Don't forget to keep your back-end API running during this build/

#### Nav Bar

At the top of your app you should have a navigation bar.

- It displays a links to the route (`/songs`) at the top of the page.

Your app should also include the following routes:

<hr />

### `/songs`

- Displays a list of `song.title`, `song.is_favorite`, `song.artist` and `song.time` that are clickable to take the user to **`/songs/:id`** IMPORTANT - be sure it goes to the song's `id` **NOT** the array position. Since we are now using a database you should use the `id`.
- Has a button that takes users to the `/songs/new` view

<details><summary>Inspiration</summary>

![](./assets/index.png)

</details>

**IMPORTANT**

Your page should

### `/songs/:index`

- Displays the details of each song
  - name
  - artist
  - album
  - is_favorite
  - time
- Displays two buttons
  - <kbd>back</kbd>, takes the user back to the `/songs` view
  - <kbd>delete</kbd>, deletes the log and takes the user back to the `/songs` view


- button for `edit` - which takes the user to the edit form for this song

<details><summary>Inspiration</summary>

![](./assets/show.png)

</details>

### `/songs/new`

- Displays a form with the following inputs and appropriate labels:

  - name (text)
  - artist (text)
  - album (text)
  - is_favorite (boolean)
  - time (text)

<details><summary>Inspiration</summary>

![](./assets/new.png)

</details>

## Delete Functionality

Make this functionality available on the show page

## Edit Functionality

Make a link to the edit form on the show page

- Add an edit route `/songs/:id/edit`
- Add an edit form that is pre-filled with the log to edit

<details><summary>Inspiration</summary>

![](./assets/edit.png)

</details>


### Bonuses

- Style the app
  - Look into the [holy grail layout](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)
- It's annoying to have to use the edit form in order to update whether a song `is_favorite` or not. Make the star ⭐️ clickable from the Index page to toggle the value (both front and back end)
- Use react-bootstrap
- Use react-transition-group to transition between pages [Demo](https://reactrouter.com/web/example/animated-transitions)
- write your own tests addtional tests for any new features you implement
- add a 404 page
- add functionality that when a user presses the delete button a confirmation appears first
