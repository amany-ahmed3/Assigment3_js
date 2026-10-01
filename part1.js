/*

             1. What is the Node.js Event Loop?

The Event Loop is a mechanism that allows Node.js to handle asynchronous operations 
without blocking the main thread.
It checks the tasks and executes their callbacks when they are ready.

             2. What is Libuv ?

Libuv is a library used by Node.js to handle asynchronous operations.

          -What Role Does It Play in Node.js?

It provides the Event Loop and Thread Pool, 
which help Node.js handle I/O operations like file system and network operations.


            3. How Does Node.js Handle Asynchronous Operations Under the Hood?

  When Node.js starts an asynchronous operation, it does not wait for it to finish.
 The operation is handled by the system or the Libuv Thread Pool. When it finishes,
 its callback is added to the Event Queue, and the Event Loop executes it
 when the Call Stack is empty.

            4. What is the Difference Between ?
Call Stack: Executes JavaScript code and functions.

Event Queue: Stores callbacks that are ready to be executed.

Event Loop: Checks the Call Stack and moves callbacks from the Event Queue
 to the Call Stack when it is empty.


            5. What is the Node.js Thread Pool 
The Thread Pool is a group of threads provided by Libuv to handle some expensive asynchronous operations, such as file system operations.
The default size is 4 threads.
 

             6. How Does Node.js Handle Blocking and Non-Blocking Code Execution?

- Blocking code stops the execution of other code until it finishes.
- Non-blocking code allows Node.js to continue executing other code 
  while the operation is running.
- Node.js prefers non-blocking operations because they improve performance 
 and allow handling multiple requests.

*/