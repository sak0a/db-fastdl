# 🚀 FastDL - Fast Download Server

A modern, high-performance file hosting service built with Nuxt 3, designed specifically for gaming content and web development resources. FastDL provides lightning-fast downloads for Team Fortress 2 server assets and web development files.

## ✨ Features

- **🎮 Gaming Content**: Specialized hosting for Team Fortress 2 maps, models, and materials
- **💻 Web Development Resources**: Fast delivery of JavaScript, TypeScript, images, and fonts
- **⚡ High Performance**: Optimized for speed with Nuxt 3's server-side rendering
- **🎨 Modern UI**: Beautiful gradient-based design with smooth animations
- **📱 Responsive**: Mobile-first design that works on all devices
- **🔗 Direct Integration**: Steam protocol links for seamless game server connections

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) - The Intuitive Vue Framework
- **Language**: TypeScript for type safety
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
  - [Sass](https://sass-lang.com/) for custom styles and animations
- **Icons**: Font Awesome for iconography
- **Fonts**: Custom NexaBold font family
- **Package Manager**: Bun (with npm/pnpm/yarn support)

## 📁 Project Structure

```
fastdl-nuxt/
├── assets/
│   ├── fonts/          # Custom font files
│   ├── img/            # Images and logos
│   └── main.sass       # Global styles and animations
├── pages/
│   ├── index.vue       # Homepage with navigation
│   ├── tf2.vue         # Team Fortress 2 downloads
│   └── web.vue         # Web development resources
├── public/             # Static assets
├── server/             # Server-side code
├── app.vue             # Root application component
├── error.vue           # Custom error page
├── nuxt.config.ts      # Nuxt configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun runtime
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lxnx-fr/fastdl-l03.git
   cd fastdl-l03
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install

   # Or using pnpm
   pnpm install

   # Or using yarn
   yarn install
   ```

## 💻 Development

Start the development server on `http://localhost:3000`:

```bash
# Using Bun (recommended)
bun run dev

# Or using npm
npm run dev

# Or using pnpm
pnpm run dev

# Or using yarn
yarn dev
```

The development server includes:
- Hot module replacement
- TypeScript support
- Tailwind CSS with JIT compilation
- Sass preprocessing

## 🏗️ Production

### Build for Production

```bash
# Using Bun
bun run build

# Or using npm
npm run build

# Or using pnpm
pnpm run build

# Or using yarn
yarn build
```

### Preview Production Build

```bash
# Using Bun
bun run preview

# Or using npm
npm run preview

# Or using pnpm
pnpm run preview

# Or using yarn
yarn preview
```

### Generate Static Site

```bash
# Using Bun
bun run generate

# Or using npm
npm run generate
```

## 📄 Pages Overview

### 🏠 Homepage (`/`)
- Clean, modern landing page
- Navigation to TF2 and Web development sections
- Animated gradient background with spotlight effect

### 🎮 Team Fortress 2 (`/tf2`)
- sᴀᴋᴀ's ᴅᴏᴅɢᴇʙᴀʟʟ sᴇʀᴠᴇʀ information
- Direct Steam connection link (`steam://connect/45.81.234.145:27015`)
- Access to TF2 file directory (`/tf`)
- Fast downloads for maps, models, and materials

### 💻 Web Development (`/web`)
- JavaScript and TypeScript resources
- Images, fonts, and other web assets
- Access to web files directory (`/js`)
- Optimized for web development workflows

## 🎨 Styling & Design

The application features a modern dark theme with:

- **Gradient Borders**: Animated gradient borders on interactive elements
- **Backdrop Blur**: Glass-morphism effects for modern UI
- **Custom Animations**: Smooth fade-scale animations on page load
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom Typography**: NexaBold font for headings

### Key Design Elements

- **Spotlight Effect**: Dynamic gradient background
- **Glass Cards**: Semi-transparent containers with backdrop blur
- **Hover Effects**: Smooth transitions on interactive elements
- **Color Scheme**: Orange to blue gradient theme

## 🔧 Configuration

### Nuxt Configuration

Key configurations in `nuxt.config.ts`:
- Tailwind CSS module integration
- Route rules for specific pages
- Font Awesome script loading
- Development tools disabled in production

### Tailwind Configuration

Custom animations and keyframes defined in `tailwind.config.js`:
- `fadescale` animation for smooth page transitions

## 🚀 Deployment

This application can be deployed on various platforms:

- **Vercel**: Zero-config deployment
- **Netlify**: Static site generation support
- **Cloudflare Pages**: Edge deployment
- **Traditional Hosting**: Static files or Node.js server

For detailed deployment instructions, check the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary. All rights reserved.

## 🔗 Links

- [Live Site](https://fastdl.l03.dev)
- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Built with ❤️ using Nuxt 3 and modern web technologies.
