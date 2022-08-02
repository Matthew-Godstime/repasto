import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="container-fluid">
                <div class="row mx-xxl-4">
            <div class="col-sm-12">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <div class="col-md-12 col-xxl-6 d-flex align-items-center">
                        <h2>Our monthly newsletter - signup to get updates on articles, interviews and events.</h2>
                    </div>
                    <div class="nav col-md-12 col-xxl-6 justify-content-end list-unstyled d-flex flex">
                        <form>
                            <label for="newsletter1" class="ctl pb-2">Email address</label>
                            <div class="d-flex flex-column flex-xxl-row w-100 gap-2">
                                <input id="newsletter1" type="email" name="email" id="email">
                                <button class="btn" type="button">Subscribe</button>
                            </div>
                            <span class="ctl d-block pt-2">powered by MailChimp!</span>
                        </form>
                    </div>

                    <div class="col-sm-12">
                        <div class="mt-5 mb-0">
                            <a class="img-link me-5" href=""><img class="img-fluid" src="../../assets/images/logo.png" alt=""></a>
                            <span class="ctl"><a href="">PROUDLY POWERED BY WORDPRESS | THEME: REPASTO BY THEMES KINGDOM.</a></span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

  </div>
`,
  styles: [`
  footer div h2 {
    font-weight: lighter;
}

input {
    /* border-radius: 0; */
    width: 30vw;
    border: none;
    outline: 1px solid lightgray;
}

.btn {
    border-radius: 0;
    outline: 1px solid;
    width: 45%;
}

.flex-column+.ctl {
    opacity: .6;
}
@media screen and (max-width: 1200px) {
    .flex {
        justify-content: center !important;
    }
    input {
        display: block !important;
        width: 95vw !important;
        margin: 0 auto !important;
        /* overflow: hidden !important; */
    }
    button {
        display: block !important;
        width: 95vw !important;
        margin: 0 auto !important;
        /* overflow: hidden !important; */
    }
}
/* @media screen and (max-width: 767px) {
    input {
        display: block !important;
        width: 100vw !important;
        margin: 0 auto !important;
        overflow: hidden !important;
    }
    button {
        display: block !important;
        width: 100vw !important;
        margin: 0 auto !important;
        overflow: hidden !important;
    }
} */
`
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
