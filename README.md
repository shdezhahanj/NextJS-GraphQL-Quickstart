## 🚀 Next.js + GraphQL Quickstart

Welcome to the Next.js + GraphQL Quickstart! This boilerplate is your go-to solution for building scalable and modern web applications with ease. Combining the best tools in web development, it provides everything you need to get started quickly.

---

### 🎯 Features

- 🌐 Next.js 15 : Experience the power of the new App Router for advanced routing and rendering capabilities.
- 🔗 Apollo Client : A powerful GraphQL client for seamless API consumption and state management.
- 🛠️ GraphQL Yoga & Pothos : Simplify API creation with schema-first GraphQL server development.
- 📦 Prisma ORM : Effortlessly manage database schemas and migrations with Prisma.
- 🎨 Tailwind CSS with Sass : Build stunning, responsive UIs rapidly using Tailwind's utility-first approach, with the flexibility of Sass for advanced styling.
- 🖍️ Multi-Theme Support : Easily toggle between light, dark, or custom themes to enhance the user experience.
- 🈴 Multi-Language Support : Integrate internationalization with `next-intl for a global-ready application.
- 📝 React Hook Form : Simplify form validation and management with this lightweight library.
- 🔒 TypeScript : Ensure your codebase is reliable, scalable, and type-safe with TypeScript.
- 🐾 Husky & Commitlint : Maintain a clean Git history and enforce commit standards for better collaboration.
- ⚙️ Pre-configured Linting & Formatting : Maintain a clean and consistent codebase effortlessly with Biome, a unified toolchain for linting, formatting, and organizing imports.

---

### 🚀 Getting Started

1️⃣ Clone the repository

```bash
git clone https://github.com/shdezhahanj/nextjs-graphql-quickstart.git
cd nextjs-graphql-quickstart
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Set up Prisma

1. Configure your `.env` file with your database connection URL:

```bash
DATABASE_URL="your-database-connection-string"
```

2. Generate Prisma client:

```bash
npx prisma generate
```

3. Run migrations to set up your database:

```bash
npx prisma migrate dev
```

4️⃣ Seed the database (optional)

```bash
npx prisma db seed
```

5️⃣ Start the development server

```bash
npm run dev
```

Visit your app at http://localhost:3000! 🎉

---

### 🌐 Demo

You can check out a live demo of this project deployed on Vercel:
👉 [Live Demo](https://nextjs-graphql-quickstart.vercel.app/)

### 📜 Scripts

Here are some useful scripts to manage your project:

- `npm run dev` - Start the development server with TurboPack.
- `npm run build` - Build the application for production.
- `npm run start` - Start the production server.
- `npm run lint` - Run Biome for code linting.
- `npm run format` - Format your code using Biome.
- `npm run format:fix` - Auto-format your code.
- `npm run type-check` - Perform a TypeScript type check.
- `npm run prepare` - Set up Husky for Git hooks.

---

### 🌟 How to Contribute

We love contributions! Here's how you can help:

1. Star this repository ⭐ - It's a small gesture, but it means a lot!
2. Submit issues 🐛 - Found a bug? Let us know!
3. Open a pull request ✨ - Help us improve this project.

---

### 📢 Show Your Support

If you find this project helpful, please give it a star on GitHub ⭐. It motivates us to keep building and improving!

---

### 📬 Contact Information

Feel free to reach out if you have any questions or suggestions!

- ✉️ Email : `sh.dezhahanj@gmail.com`
- 👩🏻‍🎤 Linkedin : [Shekoofeh Dezhahanj](https://www.linkedin.com/in/shekoofeh-dezhahanj/)

---

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy coding! 💻✨
