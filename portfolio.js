Vue.component('ls-portfolio-showcase', {
  template: `
            <div>
                <div class="row">
                    <div class="col-12 col-lg-6 justify-content-center text-left my-3" v-for="(portfolio, index) in portfolioList">
                        <div class="box" style="width:100%">
                            <div class="card">                                
                                <div class="card-body">
                                    <h4 class="card-title">{{portfolio.projectName}}</h4>                                    
                                    <div class="row no-gutters justify-content-center">
                                        <div class="col d-flex">
                                            <img v-for="(icon, index) in portfolio.projectStack" :src="icon" class="portfolio-svg"><img>
                                        </div>                                        
                                    </div>
                                    <p class="card-text mt-3" id="github">{{portfolio.projectDesc}}</p>
                                    <p v-show="showImprovement">What can be improved?</p>
                                    <div v-show="showImprovement" class="bottom-line"></div>
                                    <p v-show="showImprovement" class="card-text">{{portfolio.projectImprovement}}</p>
                                    <div class="d-flex justify-content-end">
                                        <a :href="portfolio.projectUrl" target="_blank" class="btn btn-outline-dark shadow-none">View code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,

  data() {
    return {
      portfolioList: [
        {
          projectName: 'Todo list',
          projectDesc:
            'First app with the framework Angular.',
          projectUrl: 'https://github.com/popodevv/todo-list',
          projectStack: [
            'img/tech/html5.svg',
            'img/tech/css3.svg',
            'img/tech/bootstrap.svg',
            'img/tech/angular.svg',
          ],
          projectImprovement: '',
        },
        {
          projectName: 'Stopwatch',
          projectDesc:
            'Stopwatch with angular.',
          projectUrl: 'https://github.com/popodevv/chronometre',
          projectStack: [
            'img/tech/html5.svg',
            'img/tech/css3.svg',
            'img/tech/bootstrap.svg',
            'img/tech/angular.svg',
          ],
          projectImprovement: '',
        },
        {
          projectName: 'App Back-office',
          projectDesc:
            'A dashbord for an application during my training',
          projectUrl: 'https://github.com/popodevv/BusinessCase-BackOffice',
          projectStack: [
            'img/tech/html5.svg',
            'img/tech/css3.svg',
            'img/tech/bootstrap.svg',
            'img/tech/angular.svg',
          ],
          projectImprovement: '',
        },
        {
          projectName: 'Blog php',
          projectDesc:
            'Blog app in php with MYSQL.',
          projectUrl: 'https://github.com/popodevv/blog-php',
          projectStack: [
            'img/tech/php.svg'
          ],
          projectImprovement: '',
        },
      ],
      showImprovement: false,
    }
  },
})

const app = new Vue({
  el: '#ls-portfolio-component',
  data: {},
})
