This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

create a new file `.env.local` and add the following

1. Create .env file in the root of the folder
1. Add the following
  1. NEXT_PUBLIC_SERVER_URL=http://localhost:4000
  1. SECRET=quizify
  1. NEXT_PUBLIC_BASE_URL=http://localhost:3000/quiz/

the NEXT_PUBLIC_SERVER_URL is the url of the backend make sure yuy=u start the server before running the app
the SECRET is used to decode the JWT
the NEXT_PUBLIC_BASE_URL is the url which is ussed prefiz the quiz id and make a absolute url, this url is then sent to the user and he can open the link and give the quiz
