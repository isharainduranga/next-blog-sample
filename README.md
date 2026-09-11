
````md
# Next.js Blog

A simple blog application built with Next.js and TypeScript.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/isharainduranga/next-blog-sample.git
````

Go to the project directory:

```bash
cd <project-name>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Blog Posts

Blog posts use dynamic routes:

```text
/posts/[id]
```

For example:

```text
/posts/1
/posts/2
/posts/3
```

The dynamic blog page is located at:

```text
app/posts/[id]/page.tsx
```

## Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```


