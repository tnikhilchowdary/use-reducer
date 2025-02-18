React Counter using useReducer

This project demonstrates state management using the useReducer hook in React. It provides a simple counter application where users can increment, decrement, and reset the count.

🚀 How it Works

Initial state is set to 0.

Reducer function updates the state based on action type:

const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return state + 1;
        case "decrement": return state - 1;
        case "reset": return 0;
        default: return state;
    }
};

Dispatch function triggers state updates when buttons are clicked:

<button onClick={() => dispatch({ type: "increment" })}>+</button>
<button onClick={() => dispatch({ type: "decrement" })}>-</button>
<button onClick={() => dispatch({ type: "reset" })}>Reset</button>

📂 Project Setup

Clone the repository:

git clone https://github.com/tnikhilchowdary/use-reducer.git

Navigate to the project folder:

cd use-reducer

Install dependencies:

npm install

Run the project:

npm start

Open http://localhost:3000 in your browser.

🔧 Future Enhancements

Extend functionality (e.g., step-based increment)

Persist counter state using local storage


📜 License

This project is open-source and available under the MIT License.
