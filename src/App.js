import React from 'react'
import './App.css'

class Cardes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      word: '',
      translate: '',
      cards: [],
    }
  }
};

function updateInput(key, value) {
  this.setState(state, {
  [key]: value
})}

function addCard() {
  const newCard = {
    id: 1 + this.state.id,
    value: {
      word: this.state.word.slice(),
      translate: this.state.translate.slice(),
      turned: false
    }
  };
  this.setState(state: {
    id: newCard.id,
    word: '',
    translate: '',
    cards: [...this.state.cards, newCard]
  })
}

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Карточки слов</h1>
      <div className="container">
        Добавить карточку
        <br />
        <input
          type="text"
          placeholder="введите слово"
          value={this.state.word}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            this.updateInput('word', e.target.value)
          }
        />
        <input
          type="text"
          placeholder="введите слово"
          value={this.state.translate}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            this.updateInput('translate', e.target.value)
          }
        />
        <button className='btn add-btn' onClick={() => this.addCard()}>Добавить слово</button>
        <div>
          {this.state.cards.map (card => {
            return(
              <div key={card.id}
              className="card">
                {card.value.turned ? card.value.translate : card.value.word}
              </div>
            )
          }}
        </div>
      </div>
    </div>
  )
}

export default App
