import Card from './components/card'

const App = () => {
  return (
    <div className="app">
      <Card titulo="Titulo 1" texto="ola mundo" />
      <Card titulo="Titulo 2" texto="pokemon" />
      <Card titulo="Titulo 3" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer vitae aliquam metus, vitae laoreet purus.
                Donec tincidunt nunc et interdum vehicula.
                Nullam cursus massa nec fermentum lacinia.
                Nulla ac odio maximus, bibendum justo eget, varius massa.
                Integer mollis nisi ut accumsan efficitur. Sed placerat nulla eget ullamcorper porta. Praesent vel molestie augue, ut auctor felis. Suspendisse sodales ante a felis cursus vulputate. Aenean non ipsum sed nunc sodales tristique. Maecenas nibh libero," />
      <Card titulo="Titulo 4" />
    </div>
  );
}

export default App;
