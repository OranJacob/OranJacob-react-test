import React from "react";
import PropTypes from 'prop-types';

export const SearchResult = ({linksList, term, noResults, addToWatchList}) => {
		return (
			<div className="search-results bg-white w-100 mx--3 border-bottom px-4">
				<div className="row">
                    <div className="col-12 d-flex mb-3">
                        <div className="col-2 pl-0 font-weight-bold">
                            Cover
                        </div>
                        <div className="col-4 pl-0 font-weight-bold">
                            Title
                        </div>
                        <div className="col-2 pl-0 font-weight-bold">
                            Year
                        </div>
                        <div className="col-2 col-lg-1 pl-0 font-weight-bold">
                            Rate
                        </div>
                        <div className="col-2 pl-0 font-weight-bold">
                            Lang
                        </div>
                    </div>
					<div className="col-12 mt-4 pt-05 mb-6 fsp-16 pl-0">
						{
							linksList &&
                            linksList.map((item, index) =>
                            <div className="col-12 d-flex mb-3 pl-0 align-items-center" key={index}>
                                <div className={`col-2 p-0 movie-image ${!item.backdrop_path ? 'no-img bg-secondary' : ''}`}>
                                   { item.backdrop_path && <img className="w-100" src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`} alt={item.title}/>}
                                </div>
								<div key={index}
									className="col-4 d-block py-2">
                                    { item.title }
                                </div>
                                <div className="col-2">
                                    { item.release_date.substr(0,4) }
                                </div>
                                <div className="col-2 col-lg-1">
                                    { item.vote_average }%
                                </div>
                                <div className="col-2">
                                    { item.original_language }
                                </div>
                                <div className="col-1" onClick={() => addToWatchList()}>add</div>
                            </div>
							)
						}
						{
							noResults &&
							<span className="d-block pt-2 text-medium-grey-2 text-center">Sorry no results</span>
						}
					</div>
				</div>
			</div>
		);
}

SearchResult.propTypes = {
    term: PropTypes.string,
    linksList: PropTypes.array,
    noResults: PropTypes.bool,
    addToWatchList: PropTypes.func,
}

export default SearchResult;
