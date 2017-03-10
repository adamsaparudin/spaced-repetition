var app = new Vue({
  el: '#app',
  data: {
    cards: [],
    decks: []
  },
  methods: {
    getToken: function(key) {
      return decodeURIComponent(window.location.search.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'))
    },
    setToken: function() {
      localStorage.setItem('token', app.getToken('q'))
    },
    logout: function() {
      localStorage.removeItem('token')
      window.location.href = 'http://127.0.0.1:8080/index.html'
    },
    prevent: function() {
      if (!localStorage.getItem('token')) {
        window.location.href = 'http://127.0.0.1:8080/index.html'
      } else {
        $('#homeBody').show()
      }
    },
    getCard: function() {
      axios.get('http://localhost:3000/api/card').then(function(data) {
        app.cards = data.data
      })
    }
  }
})

var cardapp = new Vue({
  el: '#cardModal',
  data: {
    decks: [],
    cardDeck: '',
    question: '',
    answer: '',
    level: ''
  },
  methods: {
    getDeck: function() {
      axios.get('http://localhost:3000/api/deck').then(function(data) {
        cardapp.decks = data.data
      })
    },
    addCard: function() {
      console.log(cardapp.cardDeck)
      axios.post('http://localhost:3000/api/card', {
        question: cardapp.question,
        answer: cardapp.answer,
        level: cardapp.level,
        idDeck: cardapp.cardDeck
      }).then(function(data) {
        cardapp.emptyfield()
        app.getCard()
        alert('data berhasil disimpan')
      })
    },
    emptyfield: function() {
      cardapp.cardDeck = '',
        cardapp.question = '',
        cardapp.answer = '',
        cardapp.level = ''
    }
  }
})

var deckapp = new Vue({
  el: '#deckModal',
  data: {
    deck: ''
  },
  methods: {
    addDeck: function() {
      axios.post('http://localhost:3000/api/deck', {
        name: deckapp.deck
      }).then(function() {
        deckapp.deck = ''
        app.getCard()
        alert('data berhasil disimpan')
        cardapp.getDeck()
      })
    }
  }
})

app.getToken()
app.setToken()
app.prevent()
app.getCard()
cardapp.getDeck()
