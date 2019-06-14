import React from 'react';
import Blog from './Blog';

function Nav(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="bootstrap.svg" width="30" height="30" alt=""/>
        </a>       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="Blog.js">Blog <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Vidéos</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">Podcast</a>
        </li>

        </ul>
    </div>
</nav>    )
}



export default Nav;
