import { observable, runInAction } from "mobx"
import axios from "axios" // 3.4.1

class Store {
  // repos = observable.shallow(new Map());
  repos = observable.map(new Map(), { deep: false })
  selectedRepo = observable.box(null)
  selectedQuery = observable.box(null)

  selectQuery(query) {
    runInAction(() => {
      this.selectedQuery.set(query)
    })
  }

  selectRepo(id) {
    runInAction(() => {
      this.selectedRepo.set(id)
    })
  }

  searchRepo(query) {
      console.log(query)
    // const url = `https://api.github.com/search/repositories?language=${query}&q=stars%3A%3E1&s=stars&type=Repositories`
      const url = `https://api.github.com/search/repositories?q=stars%3A%3E1+language:${query}&sort=stars&order=desc`
    axios
      .get(url)
      .then(response => {
        // handle success
        runInAction(() => {
          this.repos.clear()
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

  loadRepos() {
    const url =
      "https://api.github.com/search/repositories?l=javascript&q=stars%3A%3E1&s=stars&type=Repositories"
    axios
      .get(url)
      .then(response => {
        // handle success
        runInAction(() => {
          this.repos.clear()
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
