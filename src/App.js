import React, { Component } from 'react';

import { Section } from './components/Section/Section';
import Buttons from './components/Button/ButtonsOptions';
import Statistics from './components/Statistics/Statistics';
import { Container } from './components/Button/Buttons.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = name => {
    this.setState(prevState => ({
      [name]: (prevState[name] += 1),
    }));
  };
  countTotalFeedbacks = state => Object.values(state).reduce((acc, option) => acc + option, 0);

  countPositiveFeedbackPercentage = total => `${Math.round((this.state.good / total) * 100)}%`;

  render() {
    const total = this.countTotalFeedbacks(this.state);
    const positive = this.countPositiveFeedbackPercentage(total);

    const statisticsData = { ...this.state, total, positive };
    return (
      <Container>
        <Section title="Please leave feedback">
          <Buttons data={this.state} onBtnClick={this.handleOnClick} />
        </Section>
        <Section title="Statistics">
          {total ? <Statistics data={statisticsData} /> : <p>No stats yet</p>}
        </Section>
      </Container>
    );
  }
}

export default App;
