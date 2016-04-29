<section id="pageKindLab" class="content app_page hidden">
  <div class="jumbotron clearfix">
    <div class="container">
      <h1 class="text-nowrap text-green"><i class="ion ion-erlenmeyer-flask"></i> <strong>KIND</strong>Lab</h1>
      <p class="text-muted">- Testklient for KIND API</p>
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
      <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title text-muted text-green"><i class="icon ion-erlenmeyer-flask"></i> API Testområde</h3>
            <div class="box-tools pull-right">
              <button class="btn btn-box-tool" data-widget="collapse"><i class="ion ion-minus"></i></button>
            </div>
        </div>
        <div class="box-body">
            <p>Listing nedenfor er bygd med data fra KIND API. Org og tjeneste_id er satt av klienten for testing.</p>

            <div id="routeSettings">
              <p>
                <input type="text" class="serviceId" placeholder="xxxxxxx"> - serviceId
              </p>

              <p>
                <input type="text" class="serviceOrg" placeholder="org.no"> - orgId
              </p>

            </div>

            <div id="xhrButtons"><!-- JS --></div>
        </div>
        <!-- <div class="box-footer"></div> -->
      </div>
    </div> <!-- ./col -->

    <!-- Col 2 -->
    <div class="col-lg-6">
      <!-- Box -->
      <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="box-title text-muted text-aqua"><i class="ion ion-ios-information"></i> Informasjon</h3>
            <div class="box-tools pull-right">
              <button class="btn btn-box-tool" data-widget="collapse"><i class="ion ion-minus"></i></button>
            </div>
        </div>
        <div class="box-body">
            <p>Denne klienten lister og kan kjøre alle endepunkter tilgjengelig i uninett-kind API.</p>

            <p>Interaksjon med API krever at klient registreres i UNINETT Connect tjenesteplattform.</p>

            <p><strong>Eksterne lenker</strong></p>

            <ul>
              <li><i class="ion ion-social-github"></i> KIND API: <a href="https://github.com/skrodal/ecampus-kind-api">https://github.com/skrodal/ecampus-kind-api</a></li>
              <li><i class="ion ion-social-github"></i> KIND Klient: <a href="https://github.com/skrodal/ecampus-kind-client">https://github.com/skrodal/ecampus-kind-client</a></li>
            </ul>

            <p><strong>Hvordan</strong></p>

            <p>
              KIND API henter rådata fra endepunkt <code>http://drift.uninett.no/tjenester/</code>. Dette endepunktet er satt opp for UNINETT eCampus av Vegard Vesterheim.
              Tilgang til punktet er IP/DNS-styrt, og etter avtale med Vegard har service.ecampus.no har fått eksplisitt tilgang til dette.
            </p>
            <div id="xhrButtons"><!-- JS --></div>
        </div>
        <!-- <div class="box-footer"></div> -->
      </div>
    </div> <!-- ./col -->
  </div> <!-- ./row -->
</section><!-- /.content -->