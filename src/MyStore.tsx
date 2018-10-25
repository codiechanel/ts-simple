import { observable, runInAction } from "mobx"
import axios from "axios" // 3.4.1

class Store {
  repos = observable.map(new Map(), { deep: false })
  contributors = observable.map(new Map(), { deep: false })
  selectedRepo = observable.box(null)

  getContributors(fullname) {
    const url = `https://api.github.com/repos/${fullname}/contributors`
    axios
      .get(url)
      .then(response => {
        runInAction(() => {
          this.contributors.clear()

          for (let x of response.data) {
            this.contributors.set(x.login, x)
          }
        })
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .then(function() {
        // always executed
      })
  }

  async makeRquest() {
      let payload = { "queryInput":{ "text":{ "text": "how popular is microsoft", "languageCode":"en-US" }}}
      let access_token= "ya29.c.ElkTBtjihNEaCdHFztYhdbzeMvotHlq5csa21e-GGy-x_iaMqpO_0Ju_TM4TdeGNqiVKxreF9-2nHLwg1VpKUhtvK6LyYq5OFJCcZRi4gi-6cOkuvB3SY72YhA"
      let url = "https://dialogflow.googleapis.com/v2beta1/projects/tech-milestones/agent/sessions/quicly:detectIntent"
      let config = {
          method: "post",
          url,
          data: payload,
          headers: { Authorization: `Bearer ${access_token}` }
      };
      let {data }= await axios.request(config)
      console.log('resp', data)
  }

  selectRepo(id) {
    runInAction(() => {
      this.contributors.clear()
      this.selectedRepo.set(id)
    })
    let val = this.repos.get(id)
    this.getContributors(val.full_name)
  }

  searchRepo(language, query = null) {
    let url = `https://api.github.com/search/repositories?q=stars%3A%3E1+language:${language}&sort=stars&order=desc`
    if (query) {
      url = `https://api.github.com/search/repositories?q=${query}+language:${language}&sort=stars&order=desc`
    }

    axios
      .get(url)
      .then(response => {
        // handle success
        runInAction(() => {
          this.contributors.clear()
          this.repos.clear()
          this.selectedRepo.set(null)

          for (let x of response.data.items) {
            this.repos.set(x.id, x)
          }
        })
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .then(function() {
        // always executed
      })
  }
}

const store = new Store()
export default store
