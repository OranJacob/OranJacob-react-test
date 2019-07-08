import React from 'react';
import PropTypes from 'prop-types';

export const SearchInput = (props) => {

		return (
            <>
				<div className="col-12 pb-4 pl-lg-0">
					<div className="d-flex lhp-72 animated faster fadeIn">
						<div className="border-bottom border-red boder-blue w-100 d-flex"
							style={{marginBottom: '6px', height: '66px'}} >
							<span className="position-relative mt-3 pr-05">
								<svg width="25px" height="25px" viewBox="0 0 25 25">
									<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
										<g transform="translate(-1080.000000, -61.000000)">
											<g transform="translate(750.000000, 51.000000)">
												<g transform="translate(327.000000, 7.000000)">
													<g fill="#2A2929">
														<path d="M5.04441966,11.1611514 C5.04441966,7.78709826 7.76953815,5.05194665 11.1312146,5.05194665 C14.492891,5.05194665 17.2180095,7.78709826 17.2180095,11.1611514 C17.2180095,14.5352046 14.492891,17.2703562 11.1312146,17.2703562 C7.76953815,17.2703562 5.04441966,14.5352046 5.04441966,11.1611514 L5.04441966,11.1611514 Z M22,20.5490872 L17.5872131,16.1199603 C18.6370226,14.7453426 19.2624291,13.0270238 19.2624291,11.1611514 C19.2624291,6.65386409 15.6219682,3 11.1312146,3 C6.64046092,3 3,6.65386409 3,11.1611514 C3,15.6684388 6.64046092,19.3223029 11.1312146,19.3223029 C13.025927,19.3223029 14.7681442,18.67053 16.1505436,17.5799204 L20.5544094,22 L22,20.5490872 Z" ></path>
													</g>
												</g>
											</g>
										</g>
									</g>
								</svg>
							</span>
							<form className="w-100">
								<input name="searchInput"
										aria-label="movie-search"
										autoComplete="off"
                                        type="text"
										onKeyUp={(e) => props.keyPress(e)}
										className="border-top-0 border-bottom-0 border-right-0 fsp-16 w-100 my-2 border-left-0"
										placeholder="Search movies (type in at least 3 charachtres)"
										style={{lineHeight: '2.5'}} />
							</form>
							{
								props.isLoading &&
								<div className="load-bar" style={{width: 'calc(100% - 32px)', top: '65px'}}>
									<div className="bar"></div>
									<div className="bar"></div>
								</div>
							}
						</div>
					</div>
				</div>
                </>
		);
}

SearchInput.propTypes = {
    keyPress: PropTypes.func,
    isLoading: PropTypes.bool,
}

