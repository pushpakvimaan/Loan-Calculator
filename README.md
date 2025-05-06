# Loan Calculator Web App

## 📅 Project Overview

Loan Calculator is a React-based web application that allows users to:

* Enter loan amount, interest rate, and duration (in years)
* Select currency (INR, USD, EUR, GBP)
* Calculate EMI (Equated Monthly Installment)
* View a detailed amortization schedule
* Navigate through multiple pages (Home, Exchange Rate, About, Error)
* Use an interactive Enable/Disable toggle button

---

## 🚀 Features

* ✅ Real-time EMI calculation
* 📆 Amortization schedule (month-wise breakdown)
* 💲 Currency selector with dynamic symbols
* 📊 Responsive and accessible layout
* 🔹 Simple and clear navigation bar with toggle button
* 🌟 Built with React and Tailwind CSS

---

## 🏐 Live Demo

*Coming Soon*

---

## 📊 Project Structure

```
loan-calculator/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── LoanCalculator.jsx
│   │   └── AmortizationTable.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
└── tailwind.config.js
```

---

## ⚙️ Setup Instructions

### Prerequisites

* Node.js and npm (or yarn)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/loan-calculator.git
cd loan-calculator
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 4. Start the application

```bash
npm run dev
# or
yarn start
```

Visit: `http://localhost:3000`

---

## 📚 How It Works

### Loan Calculator

* Inputs: Amount, Interest Rate, Years, Currency
* Calculates EMI:

$$
EMI = \frac{P \cdot R \cdot (1 + R)^N}{(1 + R)^N - 1}
$$

* Displays:

  * Monthly EMI
  * Amortization table

### Navbar

* Links: Home, Exchange Rate, About, Error Page
* Toggle button: Switch between Enabled/Disabled mode

---

## ✨ Customization Ideas

* Add routing with React Router
* Integrate live currency exchange API
* Download table as CSV
* Toggle dark/light mode
* Add unit tests with Jest
---

## 👤 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 📢 Acknowledgments

Thanks to the open-source community and tools like React and Tailwind CSS.
