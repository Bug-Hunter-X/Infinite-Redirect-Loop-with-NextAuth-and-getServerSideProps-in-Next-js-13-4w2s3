# Infinite Redirect Loop with NextAuth and getServerSideProps in Next.js 13

This repository demonstrates a bug where using NextAuth with `getServerSideProps` in Next.js 13 can lead to an infinite redirect loop.

## Problem

When accessing the `/about` page, which is protected by NextAuth, an infinite redirect occurs between the `/about` and `/login` pages, even though the user isn't logged in.

## Solution

The solution involves using `getStaticProps` instead of `getServerSideProps` for the initial page load to verify the authentication status on the client side first, and then redirect on the server side for subsequent requests. This approach avoids the infinite redirect loop.

## How to reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Access the `/about` page in your browser.

## Steps to solve

1. Modify the `getServerSideProps` function to check if the session is available and use the correct redirect if the authentication status isn't available.
2. Use the correct authentication check to ensure the user is redirected properly to the login page when the authentication status isn't available.
3. Test the solution to make sure that the redirect loop is resolved and it will redirect to the login page accordingly.