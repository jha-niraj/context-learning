# Context API in React

## Overview
When developing large applications or when user tracking and server interactions are involved, it becomes necessary to pass props throughout the application. Relying solely on prop drilling can lead to complications. The Context API provides a solution by acting as a global storage system from which we can access the necessary props or data.

## Steps to Create a Context

1. **Create a Context Folder**:
   - Create a folder named `context` (preferably).
   - Inside this folder, create a file for the context you are establishing. For example, if you are tracking user information, name the file `UserContext.js` or `UserContext.ts`.

2. **Initialize and Export the Context**:
   - In your context file, initialize and export the context.

3. **Create a Context Provider**:
   - Create another file named `UserContextProvider.jsx`. This component will allow other components to access the context data when wrapped around your application with the `UserContext.Provider`.

4. **Define Context Values**:
   - Start by creating the context for the user and define the values you expect. You can also make database or API calls directly within the context file.
   - Alternatively, you can create data fields that will be populated from the server and initialize them as `null`. In your sign-in component, update these fields with real user data.

### Basic Code for UserContext

Here is a basic implementation of the UserContext:

```javascript
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
