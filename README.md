# 🚀 Fast Pizza Co. 🍕

Fast Pizza Co. is a web application that allows users to order pizzas 🍕 from a menu 📜 without creating an account or logging in. Users can add multiple pizzas to a cart 🛒, provide their name 📇, phone number 📱, and address 🏠, and place their order with a simple POST request. Users can also mark their order as "priority" 🔝 for an additional 20% of the 🛒 cart price, either before or after placing the order. Each order will get a unique ID 🆔 that can be used to look up the order status . Payments 💵 are made on delivery, so no payment processing is necessary in the app.

![fast-pizza-app-rwd-preview](https://github.com/RoierS/fast-pizza/assets/111195111/e616938f-9ab2-433a-afd2-b44220e9468e)



## 🛠️ Tech Stack

**⚛️ React**
**🛣️ React Router**
**🔧 Redux Toolkit**
**🎨 Tailwind CSS**
**📝 Typescript**
**🧹 ESlint**
**💅 Prettier**
**🚀 Vite**


## ✨ Features

**🔐 User Authentication:** No user accounts or login are required. Users simply input their names before using the app.

**📜 Dynamic Pizza Menu:** The pizza menu is loaded from an external API, allowing for changes in the menu over time.

**🛒 Shopping Cart:** Users can add multiple pizzas to a cart before placing an order.

**🛍️ Order Placement:** Orders require the user's name, phone number, and address.

**🌟 Priority Orders:** Users can mark their orders as "priority" for an additional 20% of the cart price.

**📤 Order Submission:** Orders are submitted by sending a POST request with the order data (user data + selected pizzas) to the API.

**🛰️ GPS location:** Feature that uses the browser's geolocation API to get the user's coordinates and send back the address.

**💰 Payment on Delivery:** Payments are made on delivery, so no payment processing is necessary in the app.

**✅ Confirmation page:** Displays the order ID, the estimated delivery time and other info

**📊 Order Tracking:** Allows the user to look up their order by the order ID and see the order details and status

**🔄 Post-Order Modification:** Users can mark their order as "priority" even after it has been placed.


## 📁 Project Structure

The project is organized into different folders and files, each serving a specific purpose. Here's an overview:

***src/App.tsx:*** The main application component that sets up the router and defines the main structure of the app.

***src/features/:*** This folder contains various features of the application, including cart, menu, order, and user-related functionality.

***src/ui/:*** UI reusable components and layouts used throughout the application, such as the AppLayout and Home components.

***src/services/:*** Functions for interacting with the external API, including fetching the menu, handling orders and obtaining user geolocation.

***src/store/:*** Redux store setup and configuration.

***src/utils/:*** Contains helpers functions.

***src/interfaces/:*** Includes TypeScript interfaces for: cart, geocoding data, order, pizza, newOrder etc.


## 📜 Scripts

***dev:*** Run the development server using Vite.
```bash
npm run dev
```

***build:*** Build the project using TypeScript (tsc) and Vite.
```bash
npm run build
```

***lint:*** Lint the project using ESLint, checking TypeScript and TypeScript React files.
```bash
npm run lint
```

***preview:*** Preview the production build using Vite.
```bash
npm run preview
```

***lint:fix:*** Fix linting issues automatically using ESLint.
```bash
npm run lint:fix
```

***format:*** Format the code using Prettier.

```bash
npm run format
```


## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/RoierS/fast-pizza.git
cd fast-pizza
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Or simply visit [Fast Pizza Co. 🍕](https://fastpizzza.netlify.app/)


## 🤝 Contributing
Feel free to contribute to the project by submitting issues, feature requests, or pull requests. Please follow the established coding conventions and guidelines.


## 👥 Contributors
👨‍💼 [RoierS](https://github.com/RoierS) - [iermoliuk.roman@gmail.com](mailto:iermoliuk.roman@gmail.com)


## 📄 License
This project is licensed under the MIT License.

