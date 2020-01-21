import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import Header from '../../components/Header/Header';
import './Resources.css';
class Resources extends Component {
    state = {
        dummyData: [
            {
                id: 1,
                heading: 'Resource Heading',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/263X348.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/'
            },
            {
                id: 2,
                heading: 'Resource Heading2',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/video_1.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/'
            },
            {
                id: 3,
                heading: 'Resource Heading3',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/263X348.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/'
            },
            {
                id: 4,
                heading: 'Resource Heading4',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/263X348.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/'
            },
            {
                id: 5,
                heading: 'Resource Heading5',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/263X348.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/'
            },
            {
                id: 6,
                heading: 'Resource Heading6',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/263X348.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/'
            },
            {
                id: 7,
                heading: 'Resource Heading7',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/Book_1.svg',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/'
            }

        ],
        searchValue: ''
    };
    updateSearchHandler = (event) => {
        this.setState({ searchValue: event.target.value });
    }
    render() {
        let filteredDate = this.state.dummyData.filter((data) => {
            return (
                data.heading.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1 ||
                data.para.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1
            )
        });
        let post = null;

        post = (
            <div className="two-col-outer">
                {filteredDate.map((data, index) => {
                    return <Post key={index}
                        heading={data.heading}
                        para={data.para}
                        popup={data.img}
                        btn={data.img1} />
                })
                }
            </div>
        )

        return (
            <div className="resources-container">
                <Header
                    search={this.state.searchValue}
                    changed={this.updateSearchHandler.bind(this)} />
                <div className="resources">
                    <div className="wrapper">
                        {filteredDate.length > 0 ? post : <div className="error-msg">No Results found for {this.state.searchValue}</div>}

                    </div>
                </div>
            </div>
        );
    };
}

export default Resources;