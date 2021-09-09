import React from 'react';
let questions = [
  {
    Q: 'Who is it for?',
    A: 'Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.',
  },
  {
    Q: 'Does AltCampus help me get a job?',
    A: 'Yes. All we can. We help you at every stage, help you build strong portfolio, prepare for interviews, put you in touch with companies for interview.',
  },
  {
    Q: 'How does the entire process work?',
    A: 'You can read about it here - How it works.',
  },
  {
    Q: 'Is this course self-paced or batched?',
    A: 'This program follows a blended approach. Students can move at their own pace, however they will be matched with peers learning same concepts.',
  },
];

console.log(questions);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
    };
  }
  handleReveal = (i) => {
    this.setState({
      number: i,
    });
  };
  render() {
    return (
      <>
        {questions.map((single, i) => (
          <div key={i}>
            <h4 onClick={() => this.handleReveal(i)}>{single.Q}</h4>
            <p className={this.state.number === i ? 'active' : 'disable'}>
              {single.A}
            </p>
          </div>
        ))}
      </>
    );
  }
}
export default App;
