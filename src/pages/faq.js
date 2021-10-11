import React from 'react';
import data from '../data/faqData.json';
import FAQBox from '../components/faq-box';
import './faq.css';

class FAQ extends React.Component {
    render() {
        return (
            <div className="faq" id="faq">
                <h1>FAQ</h1>
                <div className="q_and_a">
                    <div className="col-left">
                        <FAQBox key={data[0].question} question={data[0].question} answer={data[0].answer} />
                        <FAQBox key={data[1].question} question={data[1].question} answer={data[1].answer} />
                        <FAQBox key={data[2].question} question={data[2].question} answer={data[2].answer} />
                        <FAQBox key={data[3].question} question={data[3].question} answer={data[3].answer} />
                    </div>
                    <div className="col-right">
                        <FAQBox key={data[4].question} question={data[4].question} answer={data[4].answer} />
                        <FAQBox key={data[5].question} question={data[5].question} answer={data[5].answer} />
                        <FAQBox key={data[6].question} question={data[6].question} answer={data[6].answer} />
                        <FAQBox key={data[7].question} question={data[7].question} answer={data[7].answer} />
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;
