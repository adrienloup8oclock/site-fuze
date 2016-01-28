<!DOCTYPE html>
<html>
  <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>fuze - resources</title>
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

        <section id="banner" role="banner" style="background-image:url(medias/images/covers/04.jpg);"></section>

        <?php include('inc/menu.php'); ?>

        <section id="under">
          <section class="inside">
            <h1 class="title center shadow white ultra-light">Resources</h1>
          </section>
          
          <section class="in">
            <section class="out" style="background-image:url(medias/images/covers/04.jpg);">
            </section>
          </section>
        </section>

      </section>

      <article id="article" class="resources-page resources-ebooks">
        
        <nav class="subnavigation">
          <section class="inside">

            <ul>
              <li><a href="resources.php#videos" class="tab">Videos</a></li>
              <li><a href="resources.php#ebooks" class="tab active">eBooks</a></li>
              <li><a href="resources.php#whitepapers" class="tab">WhitePapers</a></li>
              <li><a href="resources.php#analyst-report" class="tab">Analyst Report</a></li>
              <li><a href="resources.php#ucgs" class="tab">UCGs</a></li>
            </ul>

          </section>
        </nav>

        <section class="section color">
          <section class="inside">

            <section class="column left">
              <h2 class="subtitle">Unified Communications Buyer's Guide: Increasing Customer Satisfaction With a UC Contact Center</h2>
              <p class="text">When thinking of how to optimize communications, most think of mobile solutions, updated infrastructure, and a host of other things. And while those are certainly key factors to improving interactions, there's something that's arguably even more important—contact center capabilities.</p>
              <p class="text">To this end, unified communications is key. UC has the potential to vastly improve contact center operations and, consequently, customer satisfaction. To see such benefits, though, companies need to deploy UC solutions strategically and effectively. We highlight a few key points to consider.</p>
              <img src="medias/images/resources/04.jpg" alt="" class="image" />
            </section>

            <section class="column right"> formulaire </section>

          </section>
        </section>

      </article>

      <?php include('inc/footer.php'); ?>

    </main>

    <?php include('inc/scripts.php'); ?>

  </body>
</html>