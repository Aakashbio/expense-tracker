# Expense Tracker App

## Project Overview

The **Expense Tracker** app allows users to track their expenses by category. It provides an easy-to-use interface for adding, viewing, and deleting expenses. The app also features an interactive **Donut Chart** to visualize expenses by category.

## Live Preview - https://expense-tracker-by-akash-tripathi.vercel.app

## Features

- **Add Expenses**: Users can add expenses with description, category, and amount, and the app automatically records the creation date and time.
- **View Expenses**: Displays all expenses in a responsive table with details like description, category, amount, and creation date.
- **Delete Expenses**: Easily remove any expense, and the table and charts update in real-time.
- **Expense Visualization**: Visualizes expenses by category using an interactive **Donut Chart**.
- **Responsive UI**: Fully responsive UI built with **Tailwind CSS**, optimized for mobile, tablet, and desktop views.
- **State Management**: Uses **Zustand** for efficient state management and local storage persistence, ensuring data survives page refreshes.

## Tech Stack

- **Frontend**: **Next.js 13** for building the app, **Tailwind CSS** for styling, and **ApexCharts** for data visualization.
- **State Management**: **Zustand** for local state management with persistence.

## Setup Instructions

1. Clone the repository:
   git clone
   cd expense-tracker

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

4. Open the app in your browser:
   http://localhost:3000

## Folder Structure

```
src/
├── app/                   # Main entry point of the app
├── components/            # UI components like forms, charts, and expense list
├── store/                 # Zustand store for managing app state
└── styles/                # Global styles for the app
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js) for more information.
