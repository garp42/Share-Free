<?php
require('config.php');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link href="css/styles.css" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="js/script.js" type="text/javascript"></script>
</head>
<body>
	<header>
		<a href="#"><h1 id="title">Share Free</h1></a>
		<input type="search" placeholder="Entrez votre recherche ici" id="search-bar">
		<a href="#"><img src="icons/search24.png" id="search-icon"></a>
		<a href="#"><img src="icons/message32-notification.png" id="message-icon"><label id="msg-ntf">1</label></a>
		<a href="#"><img src="icons/account32-notification.png" id="account-icon"><label id="account-ntf">1</label></a>
	</header>
    <div id="login">
        
    </div>
	<div id="main">
        <div id="main-img">
            <a href="#"><img id="" src="img/programmation.png"></a>
            <div id="main-img-description">
                <h2>Apprendre à programmer</h2>
                <p>Plongez dans ce grand monde qu'est la progammation ! Avec ce cours, vous deviendrez des programmeurs hors paire. Et ce, en seulement quelques semaines !</p>
            </div>
        </div>
        <div id="main-list">
            <h2>MEILLEURS SUJETS</h2>
            <ul>
                <a href="#"><li>Apprendre à programmer <label>Matheo1030</label></li></a>
                <a href="#"><li>Hacker un smartphone Android <label>Steve78</label></li></a>
                <a href="#"><li>Cracker Photoshop CS6 <label>JohnRpa</label></li></a>
            </ul>    
        </div>
    </div>
</body>
</html>