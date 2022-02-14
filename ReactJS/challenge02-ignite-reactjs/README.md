<div align="center">
    <img src="../../.github/docs/images/igniteReactJsBanner.png" alt="Ignite" width="1000">
</div>

<h3 align="center"> 
   Ignite ReactJS - Challenge 01: Componentizing an application
</h3>

---

# :rocket: Final Project

<div align="center">
    <img src="./.github/docs/images/filmdetail.png" alt="Ignite" width="500">
   <img src="./.github/docs/images/menuminimized.png" alt="Ignite" width="500">
   <img src="./.github/docs/images/menuexpanded.png" alt="Ignite" width="500">
</div>

# :pushpin: Table of Contents

- [Features](#rocket-Challenge-Features)
- [Api](#construction_worker-Fake-api-resources)
- [License](#closed_book-license)

# :rocket: Challenge Features

- [x] Film Listing.
- [x] In the sidebar it is possible to select which category of films should be listed.
- [x] The first category on the list (which is "Action") should start as marked.
- [x] The application header has only the name of the selected category that must change dynamically.

## Additional features (this features are not part of the challenge)

- [x] Sidebar can now be minimized and expanded.
- [x] Film card are now clickable and shows more details about the selected film.

## :construction_worker: Fake api resources

For this challenge, in addition to the concepts seen in class, we will use some new things to make our application even better. So, before going directly to the challenge code, we will explain a little bit about Fake API with JSON Server.

## Fake API with JSON Server

Just as we use MirageJS in module 2 to simulate an API with transaction data from the dt.money application, we will use JSON Server to simulate an API that has the information of genres and films.

Navigate to the created folder, open it in Visual Studio Code and execute the following commands in the terminal:

```bash
yarn
yarn server
```

Then you will see the message:

<img alt="server" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1abc3356-2936-4106-a4fe-a3fc8efd1373%2FUntitled.png?table=block&id=7fe88f6f-62c6-45c7-a898-d1672dbbe6bd&width=1420&userId=&cache=v2" />

Note that he started a fake API with the `/genres` and` /movies` resources in `localhost` on port` 3333` from the information in the server.json file located at the root of your project. Accessing these routes in your browser, you can see the return of the information already in JSON:

<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F12a3c689-264b-4bd4-8515-730dfe8dd407%2FUntitled.png?table=block&id=e27d872a-13a6-4c37-ba61-34b7fb2f74dd&width=850&userId=&cache=v2" />
<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F400b84d4-2de4-4cd3-aef2-139f3103e9f6%2FUntitled.png?table=block&id=c2e1b5cd-c028-45b6-9319-b88aab9b0ece&width=670&userId=&cache=v2" />

That way, you just need to consume these API routes normally with Axios.

# :closed_book: License

Released in 2021
This project is under a license [MIT](./LICENSE).

<p align="right">(<a href="#top">back to top</a>)</p>

Challenge proposed with 💜 by Rocketseat 👋 [Join this community!](https://discord.gg/KJVerdEynf)

Made with 💜 by [Rafael Barros](https://github.com/Rafaelb4rros) 🚀
