# Books app 

This is a simple full stack typescript application that allows users to view, add, update and delete books.

## Technologies used

- Frontend: React, Typescript, Tailwind CSS, Vite
- Backend: Node.js, Express, Typescript

## Installation

1. Clone the repository
2. Install dependencies for the frontend and backend by running `npm install` in the root directory
3. Start the server by running `npm run dev`
4. Start the frontend by running `npm run client`

This project includes basic functionality but has room for numerous improvements on both the server side and on the client side.
In our interview we will discuss various improvements that can be made to this code base.

This challenge provides a partially implemented book library API with several areas for improvement. 
Here are the tasks you can ask the candidate to work on during the interview:

Input Validation (15 mins)

Implement request validation using Zod
Add proper error handling for invalid inputs
Validate book ratings are between 0-5
Ensure required fields are present
Feature Implementation (20 mins)

Add filtering by genre
Implement sorting by rating
Add pagination support
Create an endpoint for book search
Performance Optimization (15 mins)

Implement caching for frequently accessed books
Add request rate limiting
Optimize the search functionality
Testing (10 mins)

Write unit tests for the validation logic
Add integration tests for the API endpoints
During the interview, you can:

Start by explaining the existing codebase
Ask them to identify potential issues
Let them choose which improvements to tackle first
Observe their problem-solving approach and code organization
Evaluate their TypeScript knowledge and API design skills
This challenge tests:

TypeScript proficiency
API design principles
Input validation
Error handling
Testing approaches
Performance optimization
Problem-solving skills
Code organization
The partially working state allows you to evaluate how they handle existing code while making improvements.



I've added a React frontend with several intentional inefficiencies that candidates can improve:

State Management Issues:

Using global variables for state
Multiple useState calls instead of a single object
No proper state management solution (Redux/Context)
Performance Problems:

Unnecessary re-renders
Fetching all books on every form submission
No request debouncing or caching
No pagination (loading all books at once)
Code Organization:

All code in a single component
No separation of concerns
Repetitive JSX
No reusable components
Form Handling:

Multiple individual state updates
No form validation
No proper error handling
No loading states
API Integration:

No API error handling
No retry mechanism
No request cancellation
Direct axios calls instead of a service layer
Candidates can improve this by:

Implementing proper state management
Creating reusable components
Adding proper error handling
Implementing form validation
Adding loading states
Implementing pagination
Adding proper TypeScript types
Creating a service layer for API calls
Adding proper error boundaries
Implementing caching