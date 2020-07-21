import React from "react";
import "./App.css";
import marked from "marked";

const initialText = `
# Welcome to my Markdown Previewer

## How to use the Demo

1. Type in stuff on the editor pane.
2. See the live updates on the preview pane.

That's it.  Pretty simple.

**Find Examples of markdown below**
___

Here's some inline code, \`<div></div>\`.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

> This is a Blockquote.

Visit [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to learn all about markdown.

This app was built with ![React](https://goo.gl/Umyytc)

**_Ready to start writing?  Either start changing stuff on the left or
clear everything to start afresh._**
`;

marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: initialText,
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const markdown = marked(this.state.text);
    return (
      <React.Fragment>
        <div className="App">
          <div className="container">
            <h1 className="text-center p-3 text-light">
              React Markdown Previewer
            </h1>
            <div id="wrapper">
              <div className="row row-grid">
                <div className="col-md-6">
                  <div id="leftPanel" className="col-md-12">
                    <h4 className="panelTitle">Editor</h4>
                    <textarea
                      id="editor"
                      className="form-control"
                      value={this.state.text}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-6">
                  <div id="rightPanel" className="col-md-12">
                    <h4 className="panelTitle">Preview</h4>
                    <div
                      id="preview"
                      dangerouslySetInnerHTML={{ __html: markdown }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
