<?php
// This is the main entry point for the tutorial website.
// You can add server-side logic here, such as handling form submissions or integrating with a database.

// Example of a simple routing mechanism
$page = isset($_GET['page']) ? $_GET['page'] : 'index';

switch ($page) {
    case 'about':
        include 'about.html';
        break;
    case 'contact':
        include 'contact.html';
        break;
    case 'git':
        include '../tutorials/git.html';
        break;
    case 'github':
        include '../tutorials/github.html';
        break;
    case 'github-desktop':
        include '../tutorials/github-desktop.html';
        break;
    case 'vscode':
        include '../tutorials/vscode.html';
        break;
    case 'install-apps':
        include '../tutorials/install-apps.html';
        break;
    case 'basic-commands':
        include '../tutorials/basic-commands.html';
        break;
    case 'usage':
        include '../tutorials/usage.html';
        break;
    default:
        include '../index.html';
        break;
}
?>