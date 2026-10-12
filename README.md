# Lesotho Explore

## 1. Introduction

Lesotho Explore is a React web application that helps local and international visitors learn about places to visit in Lesotho. The website provides information about tourist attractions, mountains, waterfalls, cultural sites, and outdoor activities.

The aim of this project is to make it easier for people to discover interesting places in Lesotho and plan their visits. The website is designed to be simple to use and responsive on computers, tablets, and mobile phones.

## 2. Assignment Scope

This project was developed to demonstrate the React skills learned in the Diploma in Software Engineering and Multimedia, Year 3 Semester 1.

The main features of the website include:

- A Home page that introduces Lesotho and displays popular destinations and activities.
- An Attractions page that displays eight tourist destinations.
- A search feature that allows users to search for attractions by name.
- Category filters that help users find specific types of attractions.
- A details popup that displays more information about a selected destination.
- A visitor enquiry form with input validation and a success message.
- Separate pages for Home, Attractions, Culture, and Enquire.
- A responsive design that works on different screen sizes.
- Reusable React components to make the code easier to manage.

## 3. Technologies Used

The following technologies were used to develop the website:

- **React.js** – Used to build the website and its components.
- **JavaScript** – Used to add functionality and interactivity.
- **HTML5** – Used to structure the content.
- **CSS3** – Used to style the website and make it responsive.
- **React Hooks** – Used to manage state and other component features.
- **Git and GitHub** – Used for version control and project submission.

## 4. How to Run the Project

This project uses React with the `react-scripts` toolchain. It does not use Vite.

To run the project, first open the project folder in a terminal and install the required packages:

bash
npm install


After the installation is complete, start the application by running:

bash
npm start


The website should open in the browser at:

http://localhost:3000`

To create a production build, run:

bash
npm run build


The production version will be saved in the `build` folder.

## 5. Website Navigation

The website has four main pages:

- **Home (`#/`)** – Introduces Lesotho and highlights popular attractions.
- **Attractions (`#/attractions`)** – Displays the available tourist destinations with search and category filters.
- **Culture (`#/culture`)** – Provides information about Lesotho's culture, heritage, and activities.
- **Enquire (`#/enquire`)** – Allows visitors to complete an enquiry form.

The navigation uses simple client-side routing to display the selected page without reloading the whole website.



## 6. React Concepts Used

Several React concepts were used when developing this project.

**Components:** The website is divided into smaller components such as the header, hero section, attraction cards, modal, and enquiry form. This makes the code easier to organise and reuse.

**State management:** The `useState` hook is used to manage information such as the selected attraction and form values.

**Filtering data:** The attractions section allows users to search for destinations and filter them by category. The `useMemo` hook helps calculate the filtered results.

**Props:** Props are used to pass information from one component to another, such as the details of a selected attraction.

**Form validation:** The enquiry form checks the information entered by visitors and displays error messages when required fields are not completed correctly.

**Responsive design:** CSS media queries are used to adjust the layout for different screen sizes.

## 7. Tourist Attractions

The website includes the following eight destinations:

1. Maletsunyane Falls
2. Thaba Bosiu Cultural Village
3. Sehlabathebe National Park
4. Katse Dam
5. Bokong Nature Reserve
6. Afriski Mountain Resort
7. Ts'ehlanyane National Park
8. Morija Museum and Archives
9. Sebung River

The destination information is stored in `src/data/attractions.js`. This allows the website to display attraction cards dynamically instead of writing each card separately.

The prices shown on the website are estimated starting prices for demonstration purposes. Visitors should confirm actual prices with local operators before travelling.

