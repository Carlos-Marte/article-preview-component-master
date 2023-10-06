import ArticleCard from './components/ArticleCard/ArticleCard';

function App () {
  return (
    <div className="App">
      <ArticleCard
        title='Shift the overall look and feel by adding these wonderful touches to furniture in your home'
        content='Ever been in a room and felt like something was missing? Perhaps
        it felt slightly bare and uninviting. I’ve got some simple tips
        to help you make any room feel complete.'
        presentationImage='/drawers.jpg'
        author={{
          authorName: 'Michelle Appleton',
          authorAvatar: '/avatar-michelle.jpg'
        }}
        publicationDate='28 jun 2020'
      />
    </div>
  );
}

export default App;
