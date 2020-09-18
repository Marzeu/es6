class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'Marza',
            description: 'Muito gato',
            avatar_url: 'https://avatars0.githubusercontent.com/u/51306062?s=400&u=326999fd00b8f9f5329d69eb579580d080179818&v=4',
            html_url: 'https://github.com/Marzeu?tab=repositories',
        });

        console.log(this.repositories);
    }
}

new App();