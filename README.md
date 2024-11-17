<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Fun Website</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
    <style>
        /* Basic styles for different greetings */
        .morning {
            background-color: lightyellow;
            color: darkblue;
        }
        .afternoon {
            background-color: lightblue;
            color: darkgreen;
        }
        .evening {
            background-color: darkblue;
            color: white;
        }
    </style>
</head>
<body>

<!-- Tab Menu -->
<nav class="tab-menu">
    <a href="#home" class="tablink">Home</a>
    <a href="#about" class="tablink">About Me</a>
    <a href="#favorites" class="tablink">My Favorite Things</a>
    <a href="#projects" class="tablink">Fun Projects</a>
    <a href="#contact" class="tablink">Contact</a>
</nav>

<!-- Home Section -->
<section id="home" class="section-content">
    <h1>Welcome to My Fun Website!</h1>
    <img src="my_home.jpg" alt="Home Image" class="section-image">
    <p>This is a fun website where you can learn all about me, my favorite things, and the fun projects I do!</p>
    <div id="greeting"></div> <!-- Greeting will be displayed here -->
</section>

<!-- About Me Section -->
<section id="about" class="section-content">
    <h2>About Me</h2>
    <img src="about_image.jpg" alt="About Me Image" class="section-image">
    <p>Hi! My name is Heli Patel. I am 21 years old and I love to watch movies and do different circular activities. I enjoy spending time with my family and friends.</p>
</section>

<!-- My Favorite Things Section -->
<section id="favorites" class="section-content">
    <h2>My Favorite Things</h2>
    <img src="favorites_image.jpg" alt="Favorite Things Image" class="section-image">
    <ul>
        <li><strong>Favorite Toy:</strong> Lego Blocks</li>
        <li><strong>Favorite Color:</strong> Black</li>
        <li><strong>Favorite Game:</strong> Video games</li>
    </ul>
</section>

<!-- Fun Projects Section -->
<section id="projects" class="section-content">
    <h2>Fun Projects</h2>
    <img src="projects_image.jpg" alt="Fun Projects Image" class="section-image">
    <ul>
        <li><strong>Drawing and Coloring:</strong> I love drawing animals and nature.</li>
        <li><strong>Building with Blocks:</strong> I enjoy creating tall towers with my Lego blocks.</li>
        <li><strong>Making Crafts:</strong> I make fun crafts with paper, glue, and glitter.</li>
    </ul>
    <h3>Click the button below:</h3>
    <button id="btn-alert">Click me!</button>
    <h3>Numbers List:</h3>
    <ol id="numbers"></ol> <!-- Ordered list will be populated here -->
</section>

<!-- Contact Section -->
<section id="contact" class="section-content">
    <h2>Contact</h2>
    <p>If you want to send me a message, <a href="mailto:your-email@example.com" class="email-link">please reach out via email</a>!</p>
</section>

<!-- Footer will be populated by JavaScript -->
<footer></footer>

</body>
</html>
