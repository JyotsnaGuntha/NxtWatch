# 🎬 Nxt Watch React Project

A YouTube-like video streaming app built with **React**, **styled-components**, and **Context API**.  
This project is a **portfolio/demo** to showcase modern React skills, responsive design, and theme management (light/dark).  
It includes core features like video listing, trending sections, gaming videos, saved videos, video detail view, authentication, and error handling.


## ✨ Features

- 📱 **Responsive Design** – Mobile-first layouts with breakpoints for tablets & desktops  
- 🌗 **Light/Dark Theme** – Dynamic theme switching with Context API + styled-components  
- 🗂 **Multiple Categories** – Home, Trending, Gaming, Saved Videos  
- 🎥 **Video Player Page** – Video playback with metadata and channel info  
- 🧭 **Routing** – Smooth navigation with React Router (desktop sidebar + mobile bottom nav)  
- 🔐 **Authentication** – JWT token‑based login (demo mode available)  
- 🚫 **Error States** – Custom Not Found, No Videos, and No Saved Videos pages  
- 🎨 **Polished UI** – Transitions, hover states, consistent typography  
- ♿ **Accessible** – Semantic HTML with labels and keyboard support  


## 🛠 Tech Stack

- ⚛ **React** – Component‑based UI library  
- 💅 **styled-components** – CSS‑in‑JS styling with theme support  
- 🔀 **React Router DOM** – For navigation & routing  
- 🍪 **js-cookie** – To manage JWT token sessions  
- 🗃 **Context API** – For global theme & video state  
- 🌐 **Fetch API** – For backend data (mockable for testing)  


## 🚀 Installation & Setup

Copy‑paste these commands into your terminal:

1️⃣ Clone the repository
git clone https://github.com/yourusername/nxt-watch-react.git

2️⃣ Navigate to the project folder
cd nxt-watch-react

3️⃣ Install dependencies
npm install

4️⃣ Start development server
npm start


The app will run at **`http://localhost:3000`** 🎉


## 🔑 Demo Login Credentials

_For the default CCBP backend API:_
<br/>
Username: rahul
<br/>
Password: rahul@2021



## 🎨 Styling Approach

- Entirely styled via **`styled-components`** for scoped & theme‑aware CSS  
- Supports **light & dark mode** via `ThemeAndVideoContext`  
- Uses **media queries** for responsiveness (576px, 768px, 992px+)  
- Smooth **hover effects** and **shadows** for modern UI feel  
- Layouts built with **Flexbox/Grid** for perfect alignment  

## 🧩 Key Components

- **Header** – Fixed top navbar with logo, theme toggle, profile & logout  
- **NavigationBar** – Sidebar navigation (desktop) & bottom nav (mobile)  
- **Login** – Controlled inputs, show password toggle, prefilled/demo mode  
- **Home** – Dynamic video listing with search  
- **Trending, Gaming, Saved Videos** – Category‑wise listings  
- **VideoDetailView** – Video playback page with metadata  
- **Error/Empty Pages** – Not Found, No Videos, No Saved Videos with theme awareness  


## ⚙️ Customization

- Change theme palette in `ThemeAndVideoContext`  
- Swap API URLs or mock data in fetch calls for your backend  
- Modify breakpoints & component widths for a new layout  
- Add pages/categories by following the existing file/component structure  


## 🤝 Contributing

PRs are welcome! 🌟  
Ideas for contributions:  

- UI/UX tweaks & accessibility improvements  
- New features like playlists, likes/dislikes persistence, comments  
- Real backend integration  
- Code cleanup & performance optimization  

**To contribute:**
Fork the repo
Create your branch
git checkout -b feature-name

Commit changes
git commit -m "Add feature X"

Push branch
git push origin feature-name

Open Pull Request
