import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import Header from '../../components/Header/Header';
import './Resources.css';
class Resources extends Component {
    state = {
        dummyData: [
            {
                id: 1,
                heading: 'Resource Heading1',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/Book_1.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/',
                popup: 'assets/Images/Book_1.png',
                height: '278px',
                width: '198px'
            },
            {
                id: 2,
                heading: 'Resource Heading2',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/Book_2.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/',
                popup: 'assets/Images/Book_2.png',
                height: '278px',
                width: '198px'
            },
            {
                id: 3,
                heading: 'Resource Heading3',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/Book_2.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/',
                popup: 'assets/Images/Book_2.png',
                height: '278px',
                width: '198px'
            },
            {
                id: 4,
                heading: 'Resource Heading4',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/Book_1.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/',
                popup: 'assets/Images/Book_1.png',
                height: '278px',
                width: '198px'
            },
            {
                id: 5,
                heading: 'Resource Heading5',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/Book_1.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/',
                popup: 'assets/Images/Book_1.png',
                height: '278px',
                width: '198px'
            },
            {
                id: 6,
                heading: 'Resource Heading6',
                para: 'First I liked the template pack that we chose. Second, we needed hours beyond what was offered with our purchase.',
                img: 'assets/Images/Book_2.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/',
                popup: 'assets/Images/Book_2.png',
                height: '278px',
                width: '198px'
            },
            {
                id: 7,
                heading: 'Resource Heading7',
                para: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
                img: 'assets/Images/Video.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/',
                popup: 'https://youtu.be/eofpZPRUnP8',
                height: '500px',
                width: '500px'
            },
            {
                id: 8,
                heading: 'Resource Heading8',
                para: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
                img: 'assets/Images/Video_1.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/',
                popup: 'https://youtu.be/eofpZPRUnP8',
                height: '500px',
                width: '500px'
            },
            {
                id: 8,
                heading: 'Resource Heading9',
                para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                img: 'assets/Images/Video.png',
                img1: 'assets/Images/Down_arrow.svg',
                img2: 'assets/Images/Video_btn.svg',
                link: 'https://www.google.com/',
                popup: 'https://youtu.be/eofpZPRUnP8',
                height: '500px',
                width: '500px'
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
                        popup={data.popup}
                        img={data.img}
                        btn={data.img1}
                        height={data.height}
                        width={data.width} />
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