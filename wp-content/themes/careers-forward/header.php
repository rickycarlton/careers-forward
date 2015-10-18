<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" type="text/css" href="http://localhost:8888/careers-forward/wp-content/themes/careers-forward/css/application.css">
	<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<script>(function(){document.documentElement.className='js'})();</script>
	<?php wp_head(); ?>
	
</head>
<body>

<div class="navBar">
	<div class="navBar__cell">
		<div class="navBar__container">
			<div class="hamburger-menu">
				<div class="bar"></div>	
			</div>
			<a href="/careers-forward/">
				<div class="navBar__logo"></div>
			</a>
			<div class="navBar__rightLinks">
				<a href="<?php echo $_SERVER['SERVER_NAME']; ?>/contact/">Contact Us</a>
				<a href="<?php echo $_SERVER['SERVER_NAME']; ?>/about/">About Us</a>
				<a href="<?php echo $_SERVER['SERVER_NAME']; ?>/careers/">Careers</a>
			</div>
		</div>
	</div>
</div>
<div class="navBar__mobileNav">
	<div class="navBar__mobileLinks">
		<div class="navBar__mobileLinks--title">Navigation</div>
		<a href="<?php echo $_SERVER['SERVER_NAME']; ?>/">Home</a>
		<a href="<?php echo $_SERVER['SERVER_NAME']; ?>/careers/">Careers</a>
		<a href="<?php echo $_SERVER['SERVER_NAME']; ?>/about/">About Us</a>
		<a href="<?php echo $_SERVER['SERVER_NAME']; ?>/contact/">Contact Us</a>
	</div>
</div>