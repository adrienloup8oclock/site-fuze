<!DOCTYPE html>
<html>
  <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>fuze - partner app integrations</title>
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

        <section id="banner" role="banner" style="background-image:url(medias/images/covers/02.jpg);"></section>

        <?php include('inc/menu.php'); ?>

        <section id="under">
          <section class="inside">
            <h1 class="title center shadow white ultra-light">Partner App Integrations</h1>
          </section>

          <section class="in">
            <section class="out" style="background-image:url(medias/images/covers/02.jpg);">
            </section>
          </section>
        </section>

      </section>

      <article id="article" class="partner-app-integrations-page grey">
        <section class="inside">

          <figure class="figure">
            <section class="wrap">
              <h2 class="title darkgrey">Dropbox</h2>
              <img src="medias/images/partners/dropbox.png" alt="">
            </section>
          </figure>

          <figure class="figure">
            <section class="wrap">
              <h2 class="title darkgrey">Box</h2>
              <img src="medias/images/partners/box.png" alt="">
            </section>
          </figure>

          <figure class="figure">
            <section class="wrap">
              <h2 class="title darkgrey">Okta</h2>
              <img src="medias/images/partners/okta.png" alt="">
            </section>
          </figure>

          <figure class="figure">
            <section class="wrap">
              <h2 class="title darkgrey">Google calendar</h2>
              <img src="medias/images/partners/google-calendar.png" alt="">
            </section>
          </figure>

          <figure class="figure">
            <section class="wrap">
              <h2 class="title darkgrey">Microsoft Outlook</h2>
              <img src="medias/images/partners/microsoft-outlook.png" alt="">
            </section>
          </figure>

          <figure class="figure">
            <section class="wrap">
              <h2 class="title darkgrey">Microsoft Lync</h2>
              <img src="medias/images/partners/microsoft-lync.png" alt="">
            </section>
          </figure>

        </section>
      </article>

      <?php include('inc/footer.php'); ?>

    </main>

    <?php include('inc/scripts.php'); ?>

  </body>
</html>