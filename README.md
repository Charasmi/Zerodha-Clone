# 📈 Zerodha Clone - Full Stack Trading Platform

A full-stack trading platform inspired by [Zerodha](https://zerodha.com). This project simulates core stock trading functionalities such as user authentication, portfolio tracking, order placement, and visual data representation through charts.

![Dashboard Screenshot](./screenshots/dashboard.png)

---

## 🛠️ Tech Stack

### Frontend (React + Tailwind)
- React.js
- Tailwind CSS
- React Router
- Axios
- Chart.js

### Backend (Node + Express)
- Node.js
- Express.js
- JWT (for authentication)
- MongoDB + Mongoose

### Deployment
- Frontend: [Vercel](https://vercel.com/)
- Backend: [Render](https://render.com/)
- Database: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 📁 Folder Structure

```bash
Zerodha-Clone/
├── frontend/       # Landing page, login/signup
├── dashboard/      # Protected trading dashboard
├── backend/        # Express API server


✨ Features
✅ JWT-based user authentication
✅ Buy/Sell stock simulation
✅ Live/mocked stock price list
✅ Portfolio and holdings tracking
✅ Orders and Positions section
✅ Charts: Doughnut (portfolio), Bar (performance)
✅ Modular React components
✅ REST API with MongoDB
✅ Fully responsive UI

🔐 Authentication Flow
User signs up/logs in via frontend

JWT token is generated and stored in localStorage

All dashboard API requests use the token for verification

Protected routes are handled via middleware

Clone the repo

git clone https://github.com/Charasmi/Zerodha-Clone.git
cd Zerodha-Clone

🤝 Author
Dhanavath Charasmi
📍 Jaipur
💼 Passionate about full-stack development, trading systems, and fintech solutions
