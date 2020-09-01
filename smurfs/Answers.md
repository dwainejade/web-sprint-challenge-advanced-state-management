1. What problem does the context API help solve?
    - not having to pass props down through components.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions functions that speak to the reducer.
    - reducers: takes in actions and changes state accordingly
    - the store contains the state. Its called single source of truth because its the only state in the app and can only be manipulated by the reducer.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - App state is the store. Component state is stored inside a component.
    - 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -   Its a middleware that allows an action-creator to return a function instead of an object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    - 
