import { observable, runInAction } from "mobx"
import axios from "axios" // 3.4.1

class Store {
  // repos = observable.shallow(new Map());
  repos = observable.map(new Map(), { deep: false })
    contributors = observable.map(new Map(), { deep: false })
  selectedRepo = observable.box(null)
  selectedQuery = observable.box(null)

  selectQuery(query) {
    runInAction(() => {
      this.selectedQuery.set(query)
    })
  }

  getContributors(fullname) {
      const url = `https://api.github.com/repos/${fullname}/contributors`
      axios
          .get(url)
          .then(response => {
              // handle success
              console.log(response.data)
              runInAction(() => {
                  // this.selectedRepo.set(null)
                  this.contributors.clear()

                  for (let x of response.data) {
                      console.log('hmm', x)
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

  selectRepo(id) {
    runInAction(() => {
      this.selectedRepo.set(id)
    })
      let val = this.repos.get(id)
      this.getContributors(val.full_name)
      console.log("yeah", val)
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
            this.selectedRepo.set(null)
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
