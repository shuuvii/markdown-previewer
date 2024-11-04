import {useEffect, useState} from 'react';
import Markdown from 'react-markdown';
import './App.scss';

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

//<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/14.1.3/marked.min.js" integrity="sha512-kZ9BCD8vqCw2vJ1XG3EVZN5M5aRNxxMK3+uYuZPWc+TtW2Z1zSgmFlTIVHYHaWH0bH2lp2dUlB/1+M1h+lvfeg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

function App() {

  const [input,setInput] = useState(defaultMarkdown);

  


  return (
    <div className="App">
      <header className="App-header">
        <textarea id="editor" value={input} onChange={(event)=>setInput(event.target.value)}></textarea>
        <h3>Preview:</h3>
        <div id="preview">
          <Markdown >{input}</Markdown>
        </div>
      </header>
    </div>
  );
}

export default App;
