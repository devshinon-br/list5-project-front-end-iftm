import React from 'react';

import Container from './components/Container';

const cardsData = [
  { title: 'Plano de desenvolvimento institucional', icon: '' }]

function App() {
  return (
    <Container
      title="Acesso à Informação"
      subtitle="Veja dados de transparência e governança"
      cards={cardsData}>
    </Container>
  );
}

export default App;