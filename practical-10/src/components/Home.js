import React from 'react';

function Home(props) {
    return (
        <div className="container">
            <h1 className="display-1">Home</h1>
            <p>As opposed to traditional multi-page applications, SPAs only maintain one HTML file, commonly index.html. Instead of serving a different HTML file for each path, SPAs depend on client-side routing. React Router is a popular client-side routing library.
                <br/>
                Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications (SPA).  React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                <br/>
                React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                <br/>
                React Router uses component structure to call components, which display the appropriate information. React router also allows the user to utilize browser functionality like the back button, and the refresh page, all while maintaining the correct view of the application.</p>
        </div>
    );
}

export default Home;