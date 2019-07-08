import React, { Component } from "react";
import { SearchInput } from "../components/SearchInput";
import { SearchResult } from "../components/SearchResult";
import {
  searchMovies,
  getAccountDetails,
  addToWatchList
} from "../helpers/utils";

class Home extends Component {
  state = {
    linksList: null,
    noResults: null,
    isLoading: false,
    resultsError: null
  };

  keyPress = event => {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    let search = this.genSearchFn(event.target.value);
    this.timer =
      this.term.length > 2
        ? setTimeout(search, 300)
        : this.setState({
            linksList: null
          });
  };

  addToWatchList = () => {
    addToWatchList(this.state.requestToken).then(x => console.log(x));
  };

  genSearchFn = value => {
    let term = encodeURI(value);
    this.term = value;

    this.setState({ isLoading: true });
    return () => {
      searchMovies({ page: 1, term })
        .then(result => {
          this.clearSearch();

          if (result.results) {
            this.setState({
              linksList: result.results,
              noResults: false
            });
          }

          if (result.results && result.results.length < 1) {
            this.setState({ noResults: true });
          }
        })
        .catch(() => {
          this.setState({
            resultsError: {
              img: this.props.errorImg,
              title: this.props.errorTitle,
              subTitle: this.props.errorMsg
            },
            isLoading: false
          });
        });
    };
  };

  clearSearch() {
    this.setState({
      linksList: null,
      noResults: null,
      isLoading: false
    });
  }

  render() {
    return (
              <div>
                <section className="container">
                  <div className="row">
                    <div className="col-12 pt-4">
                      {!this.props.requestKey && (
                        <button
                          onClick={() =>
														getAccountDetails().then(r =>
															this.props.setRequestKey(r)
                            )
                          }
                          className="btn btn-primary"> Please login </button>
                      )}
                    </div>
                  </div>
                  {this.props.requestKey && (
                    <>
                      <div className="row">
                        {
                          /* STR : Search Bar Input */
                          <SearchInput
                            {...this.props}
                            data={this.props.data}
                            keyPress={event => this.keyPress(event)}
                            isLoading={this.state.isLoading}
                            cancel={() => this.clearSearch()}
                          />
                          /* END : Search Bar Input */
                        }
                      </div>
                      <div className="row">
                        {/* STR : Search Results */
                        this.state.linksList && (
                          <SearchResult
                            term={this.term}
                            linksList={this.state.linksList}
                            addToWatchList={this.addToWatchList}
                            noResults={this.state.noResults}
                          />
                        )
                        /* END : Search Results */
                        }
                      </div>
                    </>
                  )}
                </section>
              </div>
    );
  }
}

export default Home;
