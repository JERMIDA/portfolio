#my Portfolio

Live: [https://portfolio-lemi.vercel.app/](https://portfolio-lemi.vercel.app/)

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcases projects, skills, experience, and includes a downloadable/viewable resume.

## Features
- Responsive design for all devices
- Dark mode toggle
- Animated sections with Framer Motion
- Projects, Skills, Experience, and Contact sections
- Resume view/download button
- Deployed on Vercel

## Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/) (for contact form)

## Getting Started

1. **Clone the repository:**
    ```sh
    git clone https://github.com/JERMIDA/portfolio.git
    cd portfolio/Frontend
    ```
2. **Install dependencies:**
    ```sh
    npm install
    ```
3. **Run locally:**
    ```sh
    npm run dev
    ```
    The app will be available at `http://localhost:5173` by default.

4. **Build for production:**
    ```sh
    npm run build
    ```
    The production-ready files will be in the `dist` folder.

## Deployment
This project is automatically deployed on [Vercel](https://vercel.com/). To deploy your own version:
- Push changes to the `master` branch (or your main branch)
- Vercel will build and deploy from the `Frontend` directory
- Ensure your Vercel project root is set to `Frontend` and output directory is `dist`

## Environment Variables
If you use EmailJS or other APIs, create a `.env` file in the `Frontend` directory and add your variables (prefix with `VITE_`). Example:
```
VITE_EMAILJS_USER_ID=your_user_id
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

Feel free to fork and customize for your own portfolio!
