<div align="center">
    <img src="./public/images/ignite.png" alt="Ignite" width="1000">
</div>

<h3 align="center"> 
   Ignite ReactJS - Challenge 01: ReactJS Concepts
</h3>

---

- [Features](#rocket-features)
- [Testing Specification](#syringe-TestingSpecification)
- [License](#closed_book-license)

# :rocket: Challenge Features

- [x] Add a new task: It must be possible to add a new task in the task state, with the fields id which must be generated randomly, title which must be text and isComplete which must start as false.

- [x] Remove a task: You must receive an ID by parameter and remove the task that contains that ID from the state.

- [x] Mark and unmark a task as completed: You must change the status of isComplete for a task with a specific ID that is received by parameter.

## Additional features (this features are not part of the challenge)

- [x] Edit task: user can edit an task.
- [ ] Tests for edit task feature.

## :syringe: Testing

For this challenge, we have the following tests:

- **should be able to add a task**: In order for this test to pass, you must allow the task to be created and thus displayed on the screen. The created task must contain the attributes following the standard of the interface.

- **should not be able to add a task with an empty title**: For this test to pass, before creating a new task, you must validate that something was typed in the input and do not allow the creation of the task if the value be empty, if the value entered is empty, you must prevent the creation of the task.

- **should be able to remove the task**: In order for this test to pass, you must allow that when clicking on the button with a trash icon, the task related to that button is removed from the state of the application, consequently being removed from the screen.

- **should be able to check a task**: For this test to pass, you must allow that when clicking on the checkbox next to the task, it is marked as completed or not completed according to its current state, changing its value from `isComplete` to `false` to `true` or conversely, from `true` to `false`.


<!-- LICENSE -->

# :closed_book: License

Released in 2022
This project is under a license [MIT](./LICENSE).

<p align="right">(<a href="#top">back to top</a>)</p>

Challenge proposed with 💜 by Rocketseat 👋 [Join this great community!](https://discordapp.com/invite/gCRAFhc)

Made with 💜 by [Rafael Barros](https://github.com/Rafaelb4rros) 🚀
