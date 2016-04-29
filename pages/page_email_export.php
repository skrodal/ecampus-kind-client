<section id="pageEmailExport" class="content app_page hidden">
  <div class="jumbotron clearfix">
    <div class="container">
      <h1 class="text-nowrap text-blue"><i class="icon ion-paper-airplane"></i> <strong>KIND</strong>Eksport</h1>
      <p class="text-muted">- Hent epostliste (teknisk kontakter) for en gitt eCampus-tjeneste</p>
    </div>

    <div class="pull-right">
      <h2 class="text-muted"><span class="user-full-name"><!-- USERINFO--></span></h2>
      <div class="user-email"><!-- USERINFO --></div>
    </div>
  </div>

  <div class="row">
    <!-- Col 1 -->
    <div class="col-lg-6">
      <!-- Box -->
      <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="box-title text-muted text-green"><i class="icon ion-paper-airplane"></i> Velg tjeneste</h3>
            <div class="box-tools pull-right">
              <button class="btn btn-box-tool" data-widget="collapse"><i class="ion ion-minus"></i></button>
            </div>
        </div>
        <div class="box-body">
            <p>Skriv inn KIND tjeneste-id for tjenesten du ønsker å hente epostliste fra.</p>

            <div id="emailExportSettings">
              <p><input type="text" class="serviceId" placeholder="xxxxxxx"> - serviceId</p>
              <p><button id="xhrBtnGetEmailList" class="btn btn-sm btn-success"><strong>Hent liste</strong></button></p>
            </div>

            <div>
                <p>Forslag til relevante tjenester: </p>
<pre>
    'relay'         => '1780362',
    'connect'       => '99884',
    'support'       => '1780321',
    'mediasite'     => '123845',
    'matterhorn'    => '1753447',
    'filesender'    => '70316',
    'videoconf'     => '81811',
    'box'           => '1855554',
</pre>
            </div>
        </div>
        <!-- <div class="box-footer"></div> -->
      </div>
    </div> <!-- ./col -->

    <!-- Col 2 -->
    <div class="col-lg-6">
      <!-- Box -->
      <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="box-title text-muted text-aqua"><i class="ion ion-ios-information"></i> Lister</h3>
            <div class="box-tools pull-right">
              <button class="btn btn-box-tool" data-widget="collapse"><i class="ion ion-minus"></i></button>
            </div>
        </div>
        <div class="box-body">
            <p>Lister finner du nedenfor.</p>
            <div id="mailinglistBoxes">

            </div>
        </div>
        <!-- <div class="box-footer"></div> -->
      </div>
    </div> <!-- ./col -->
  </div> <!-- ./row -->
</section><!-- /.content -->