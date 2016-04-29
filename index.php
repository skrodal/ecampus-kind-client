<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>UNINETT eCampus KIND Testklient</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    
    <!-- JSO lib -->
    <script type="text/javascript" src="app/js/auth/jso.min.js"></script>
    <!-- JSO conf -->
    <script type="text/javascript" src="app/js/auth/dataporten_auth.js"></script>
    
    <!-- Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome Icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <!-- Ionicons -->
    <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css"/>
    <!-- Site style -->
    <link href="app/css/AdminLTE.min.css" rel="stylesheet" type="text/css"/>
    <!-- Site skin -->
    <link href="app/css/skins/skin-black.min.css" rel="stylesheet" type="text/css"/>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
	  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
  </head>

  <body class="skin-black fixed">
    <div class="wrapper">
      <!-- Main Header -->
	    <?php include_once('pages/index_header.php'); ?>
      <!-- Left side column. contains the logo and sidebar -->
      <?php include_once('pages/index_sidebar.php'); ?>
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Main content -->
        <?php
          include_once('pages/page_email_export.php');
          include_once('pages/page_kindlab.php');
        ?>
      </div><!-- /.content-wrapper -->

      <!-- Main Footer -->
		<?php include_once('pages/index_footer.php'); ?>

    </div><!-- ./wrapper -->
    
    <!-- RESULTS MODAL -->
    <div id="apiResponseModal" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-green">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Svar fra KIND API: </h4>
          </div>
          <div class="modal-body">
            <!-- JS -->
          </div>
          <div class="modal-footer bg-green">
            <button type="button" class="btn btn-default" data-dismiss="modal">Lukk</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    
    
    

    <!-- REQUIRED JS SCRIPTS -->
    
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <!-- AdminLTE App -->
    <script src="app/js/AdminLTE.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.6/jquery.slimscroll.min.js" type="text/javascript"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js" type="text/javascript"></script> -->
    <script src="app/js/consumers/dataporten.js" type="text/javascript"></script>
    <script src="app/js/consumers/kind.js" type="text/javascript"></script>
    <script src="app/js/app_menu.js" type="text/javascript"></script>
    <script src="app/js/app.js" type="text/javascript"></script>
  </body>
</html>