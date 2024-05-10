# Jobster 💼

Organize your job search with ease and efficiency. Whether you’re looking for a new job or a career change, this app helps you stay on top of your opportunities. Track your job applications, follow up with employers, and interviews.

> PROD [Live] : https://react-jobster-v2-prod.netlify.app/

#### Jobster consists of a straightforward user interface where there is a

- **Home** is the landing page which consists of sections i.e., **Logo** and **Hero**.
  - **Hero** has `Login / Register` which on click takes the user to the **Login** page with a link to the **Register page**.
- **Login** page is where the user can log in or test the application with the Demo App.
  - When the user is logged in, the user gets navigated to **Dashboard**.
- **Dashboard** consists of following sections i.e., **Navbar**, **Sidebar** along with the changeable content i.e., set to **Stats** as default.
- **Navbar** consists of **Toggle**, **Username** along with **`Logout`** optpion
  - **Toggle** for opening and closing the sidebar.
- **Sidebar** is used to navigate between pages i.e., **Stats**, **All Jobs**, **Add Job**, **Profile** along with _Logo_.
- **Stats** displays the overview of job application data using a numerical and graphical representation.
- **All Jobs** shows the list of all jobs, different filters to search for specific jobs along with _Edit_, _Delete_ actions on each job card.
- **Add Job** is the place where the user can add a new job by adding the required details.
- **Profile** contains information about the user.
- Data is handled by **`API`**, and styles are handled by **`Styled Components`**.
- For each page render the **Loading** has been implemented and unknown route URLs are handled by the **Error** page.
- Routing is implemented using **React Router**, **Redux Toolkit** is used for state management, **Recharts** for charts.
- To run the project locally, clone the repo, `npm install` to install the dependencies, and `npm run dev` to start up the development server on default port 5173.

#### Languages / Technologies

HTML, CSS, JavaScript, ECMAScript, React

#### API

https://redux-toolkit-jobster-api-server.onrender.com/api/v1

#### Deployment / Hosting

Netlify

---

_Note: I have developed this project ~ [24] as part of the React 18 Tutorial and Projects Course (2023) taught by John Smilga._
