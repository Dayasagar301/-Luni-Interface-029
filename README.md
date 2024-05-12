# StyleMate

## Introduction
Introducing StyleMate: an online fashion marketplace delivering personalized shopping experiences. Inspired by Myntra and Zalando, it offers curated selections of clothing, accessories, and footwear. Our goal is to enhance the shopping journey by merging convenience, variety, and personalization. Expect robust product listings, tailored recommendations, and social features fostering community engagement. Welcome to StyleMate, where every click brings you closer to your fashion desires.
## Project Type
Frontend | Backend | Fullstack

## Deplolyed App
Frontend: https://luni-interface-029.vercel.app/

Backend: https://luni-interface-029-1.onrender.com

## Directory Structure
```
-Luni-Interface-029
├── README.md
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── recipeController.js
│   │   └── user.js
│   ├── index.js
│   ├── middleware/
│   │   └── auth.js
│   ├── model/
│   │   ├── product.js
│   │   └── user.js
│   ├── package-lock.json
│   ├── package.json
│   └── routes/
│   │   ├── User.js
│   │   └── product.js
└── client/
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── index.html
│   │   └── stylemart .png
│   └── src/
│   │   ├── Context/
│   │   │   ├── CartItemsContext.js
│   │   │   ├── CartItemsProvider.js
│   │   │   ├── FeaturedCategoryContext.js
│   │   │   ├── SearchContext.js
│   │   │   ├── SearchProvider.js
│   │   │   ├── WishItemsContext.js
│   │   │   └── WishItemsProvider.js
│   │   ├── app/
│   │   │   ├── App.css
│   │   │   └── App.jsx
│   │   ├── asset/
│   │   │   ├── Products/
│   │   │   │   └── cloth/
│   │   │   │   │   ├── kids/
│   │   │   │   │   │   ├── bag/
│   │   │   │   │   │   │   ├── rodini-1.jpg
│   │   │   │   │   │   │   ├── rodini-2.jpg
│   │   │   │   │   │   │   ├── rodini-3.jpg
│   │   │   │   │   │   │   ├── rodini-4.jpg
│   │   │   │   │   │   │   └── rodini-5.jpg
│   │   │   │   │   │   ├── kids-1.jpg
│   │   │   │   │   │   ├── kids-2.jpeg
│   │   │   │   │   │   ├── kidsFashion.jpeg
│   │   │   │   │   │   ├── outfit/
│   │   │   │   │   │   │   ├── bobo-1.jpg
│   │   │   │   │   │   │   ├── bobo-2.jpg
│   │   │   │   │   │   │   ├── bobo-3.jpg
│   │   │   │   │   │   │   ├── molo-1.jpg
│   │   │   │   │   │   │   ├── molo-2.jpg
│   │   │   │   │   │   │   ├── molo-3.jpg
│   │   │   │   │   │   │   ├── stella-1.jpg
│   │   │   │   │   │   │   ├── stella-2.jpg
│   │   │   │   │   │   │   ├── stella-3.jpg
│   │   │   │   │   │   │   ├── stellaMc-1.jpg
│   │   │   │   │   │   │   ├── stellaMc-2.jpg
│   │   │   │   │   │   │   └── stellaMc-3.jpg
│   │   │   │   │   │   └── shoes/
│   │   │   │   │   │   │   ├── adidas-1.jpg
│   │   │   │   │   │   │   ├── adidas-3.jpg
│   │   │   │   │   │   │   ├── adidas-4.jpg
│   │   │   │   │   │   │   ├── adidas-5.jpg
│   │   │   │   │   │   │   ├── stellaMc1-1.jpg
│   │   │   │   │   │   │   ├── stellaMc1-2.jpg
│   │   │   │   │   │   │   ├── stellaMc1-3.jpg
│   │   │   │   │   │   │   ├── veja-1.jpg
│   │   │   │   │   │   │   ├── veja-2.jpg
│   │   │   │   │   │   │   ├── veja-3.jpg
│   │   │   │   │   │   │   └── veja-3_2.jpg
│   │   │   │   │   ├── men/
│   │   │   │   │   │   ├── jeans/
│   │   │   │   │   │   │   ├── dolce-1.jpg
│   │   │   │   │   │   │   ├── dolce-2.jpg
│   │   │   │   │   │   │   ├── versace 2.jpg
│   │   │   │   │   │   │   └── versace-1.jpg
│   │   │   │   │   │   ├── men-1.jpeg
│   │   │   │   │   │   ├── menFashion.jpg
│   │   │   │   │   │   ├── shoes/
│   │   │   │   │   │   │   ├── clarks-1.jpg
│   │   │   │   │   │   │   ├── clarks-2.jpg
│   │   │   │   │   │   │   ├── clarks-3.jpg
│   │   │   │   │   │   │   ├── clarks-4.jpg
│   │   │   │   │   │   │   ├── nike/
│   │   │   │   │   │   │   │   ├── airforce-1.jpg
│   │   │   │   │   │   │   │   ├── airforce-2.webp
│   │   │   │   │   │   │   │   ├── airforce-3.jpg
│   │   │   │   │   │   │   │   └── airforce-4.jpg
│   │   │   │   │   │   │   ├── versace-1.jpg
│   │   │   │   │   │   │   ├── versace-2.jpg
│   │   │   │   │   │   │   ├── versace-3.jpg
│   │   │   │   │   │   │   └── versace-4.jpg
│   │   │   │   │   │   ├── shorts/
│   │   │   │   │   │   │   ├── 18377801_40805544_1000.jpg
│   │   │   │   │   │   │   ├── 18377801_40807997_1000.jpg
│   │   │   │   │   │   │   ├── les-1.jpg
│   │   │   │   │   │   │   ├── les-2.jpg
│   │   │   │   │   │   │   ├── les-3.jpg
│   │   │   │   │   │   │   └── les-4.jpg
│   │   │   │   │   │   ├── suits/
│   │   │   │   │   │   │   ├── zegna-1.jpg
│   │   │   │   │   │   │   ├── zegna-2.jpg
│   │   │   │   │   │   │   └── zegna-3.jpg
│   │   │   │   │   │   ├── tops/
│   │   │   │   │   │   │   └── hoodie/
│   │   │   │   │   │   │   │   ├── kenzo-tiger-1.jpg
│   │   │   │   │   │   │   │   ├── kenzo-tiger-2.jpg
│   │   │   │   │   │   │   │   ├── kenzo-tiger-head-2.jpg.webp
│   │   │   │   │   │   │   │   └── kenzo-tiger-head-3.jpg
│   │   │   │   │   │   ├── tshirt/
│   │   │   │   │   │   │   ├── valentino-1.jpg
│   │   │   │   │   │   │   ├── valentino-2.jpg
│   │   │   │   │   │   │   └── valentino-3.jpg
│   │   │   │   │   │   └── watches/
│   │   │   │   │   │   │   ├── locman-1.jpg
│   │   │   │   │   │   │   └── locman-2.jpg
│   │   │   │   │   └── women/
│   │   │   │   │   │   ├── outfits/
│   │   │   │   │   │   ├── shoes/
│   │   │   │   │   │   ├── women-1.jpeg
│   │   │   │   │   │   ├── women.jpeg
│   │   │   │   │   │   ├── womenFashion.jpg
│   │   │   │   │   │   └── womwn.jpg
│   │   │   ├── brand/
│   │   │   ├── icons/
│   │   │   └── img/
│   │   ├── components/
│   │   ├── index.js
│   │   ├── routes/
│   │   └── utils/
```

## Video Walkthrough of the project
A detailed walkthrough of all the features of our project can be found here:

https://youtu.be/D8LiEdwBfK8?si=8gyXq0zW8w1bF4oh

## Features

1. User Registration and Authentication
2. Switching between login and signup
3. Categories section
4. Add to card and amount updation
5. Payment process


## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

```bash
-Luni-Interface-029
cd client
npm run start
cd backend
npm run server
```

## Usage

#### Landing Page
![Landing Page](https://github.com/Dayasagar301/-Luni-Interface-029/assets/132691000/f8b0a866-60c0-4cd4-beca-b97bee828fb5)



<hr>

#### Login Page
![login page](https://github.com/Dayasagar301/-Luni-Interface-029/assets/132691000/21918f8e-d664-4b6c-9670-89ad435df313)



<hr>

#### shop page
![Screenshot (84)](https://github.com/Dayasagar301/-Luni-Interface-029/assets/132691000/272b764d-6a11-4fe2-be0f-96464997ed15)



<hr>

#### Wishlist Page
![Screenshot (86)](https://github.com/Dayasagar301/-Luni-Interface-029/assets/132691000/6c920fc8-3743-493d-b20f-6438af111565)



<hr>

#### Cart page
![Screenshot (87)](https://github.com/Dayasagar301/-Luni-Interface-029/assets/132691000/2c406651-ac56-4044-89dd-d3283c534e8a)



## Technology Stack
List and provide a brief overview of the technologies used in the project.

- HTML5
- CSS
- Reactjs
- Bootstrap
- Nodejs
- MongoDB
- Chakra UI

### Team members :-


1. Dayasagar Dalai
2. Abhay Kawle

