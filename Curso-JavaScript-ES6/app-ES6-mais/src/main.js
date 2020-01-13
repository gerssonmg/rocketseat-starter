class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form')

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.presentDefault();

        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua ideia',
            avatar_url: 'gerssonmg',
            html_url: 'github.com.br',
        });
        console.log(this.repositories);
    }
}

new App();