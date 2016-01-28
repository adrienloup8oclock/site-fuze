<!DOCTYPE html>
<html class="home-page">
  <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>fuze</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <link rel="icon" type="image/png" href="images/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="images/favicon-16x16.png" sizes="16x16">
    <link rel="stylesheet" href="css/style.css">

    <script src="js/vendors/modernizr.min.js"></script>

  </head>
  <body>  

    <!--[if lt IE 10]>
      <div id="browser-upgrade"><p>You are using an <strong>outdated</strong> browser.<br>
        Please <a href="http://browsehappy.com/" target="_blank">upgrade your browser</a> to improve your experience.</p></div>
    <![endif]-->

    <?php include('inc/loader.php'); ?>

    <main id="main" role="main">

      <section id="frame">

        <?php include('inc/header.php'); ?>

        <section id="banner" role="banner" style="background-image:url(medias/images/covers/01.jpg);"></section>

        <?php include('inc/menu.php'); ?>

        <section id="under">

          <section class="inside">
            <h1 class="title center shadow white ultra-light">Lorem ipsum</h1>
            <p class="text size center shadow white ultra-light">Move your voice, video, text and collaboration apps onto a single,<br>
              intelligent, mobile-ready cloud platform today.</p>
            <form action="" method="" class="form margin-top">
              <input type="text" value="" placeholder="" class="button width white size margin-right">
              <input type="button" value="Schedule Demo" class="button width purple size">
            </form>
          </section>
          
          <section class="in">
            <section class="out" style="background-image:url(medias/images/covers/01.jpg);"></section>
          </section>

        </section>

      </section>

    </main>

    <?php include('inc/scripts.php'); ?>

  </body>
</html>