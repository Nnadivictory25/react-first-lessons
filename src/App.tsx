import ExpandableText from "./components/ExpandableText";


function App() {

  
  return (
    <div>
      <ExpandableText maxChars={10} onShowMore={() => console.log('Text expanded')} onShowLess={() => console.log('Text Shortened')}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eaque reiciendis dolorum dignissimos vitae aperiam aut nam sequi, possimus eius corporis quaerat fugit aspernatur illum laudantium dolor odit nisi atque. Perspiciatis autem quam corporis molestias, accusamus incidunt magni, qui eius doloribus animi quis voluptatem, nostrum nulla doloremque atque cum eos. Repellendus totam ipsum vel ullam sint consectetur id ex molestias a, impedit obcaecati adipisci laborum at? Id dicta omnis neque consectetur sapiente saepe ipsam placeat! Pariatur, soluta? Nulla tempora fugit quam facilis accusantium dolor suscipit totam possimus in accusamus, reiciendis consectetur! Aliquid reprehenderit eveniet molestiae totam cumque minus eos adipisci aspernatur est asperiores, consectetur delectus tempora nobis provident repellendus blanditiis? Quis culpa quas odio consequuntur at eius harum nostrum officia molestias animi. Assumenda incidunt delectus soluta! Alias omnis laudantium illo doloribus officia est totam eum ea eaque corporis optio quas a, sunt, necessitatibus eius tenetur non! Ducimus corporis architecto reprehenderit aliquam, itaque enim dolorem saepe commodi optio non, sint vero hic, sequi et. Cum, sequi voluptatibus? Nisi, quis? Asperiores, nemo totam saepe earum voluptas ipsum modi alias a minus quisquam ut itaque. Neque, explicabo sunt esse nesciunt quia a illum eaque id aliquam inventore beatae quidem quos eos. Ea, sint!
      </ExpandableText>
    </div>
  )
}

export default App;