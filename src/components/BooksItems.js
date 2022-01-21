import React from 'react';

export default function BooksItems(props) {
    const { url, name, authors, numberOfPages, publisher, country, mediaType } = props;
    return (
        <>
            <a href={url} target="_blank" rel="noopener noreferrer" >

                <div id="items" className="card shadow-lg p-2 m-2 bg-body rounded border-primary">

                    <div className="card-header">
                        <h5 className="card-title primary"><strong>{name.length >= 20 ? name.substring(0, 20) + "..." : name}({mediaType ? mediaType : "Unknown"})</strong></h5>

                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h5>Auther</h5>
                                <p>{authors ? authors : "Unknown"}</p>
                            </div>
                            <div className="col-4">
                                <h5>Pages</h5>
                                <p>{numberOfPages ? numberOfPages : "Unknown"}</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <h5>Publisher</h5>
                                <p>{publisher ? publisher : "Unknown"}</p>
                            </div>

                            <div className="col-4">
                                <h5>Country</h5>
                                <p>{country ? country : "Unknown"}</p>
                            </div>
                        </div>

                    </div>
                </div>

            </a>


        </>
    );
}
