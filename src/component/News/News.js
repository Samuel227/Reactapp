import React, { Component } from 'react';
import NewSingle from './NewSingle';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    //get data from the API 
    componentDidMount() {
        //request
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=49bd6282ef12419eab5e82cc8193649e`
        //fetch data then return json respnse the pass the data to news.
        fetch(url).then((response) => {
            return response.json();
        })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error));


    }
    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
    }
    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News;