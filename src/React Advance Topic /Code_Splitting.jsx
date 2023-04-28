import React, { Component,Suspense } from 'react';

const OtherComponent=React.lazy(()=>import ('./OtherComponent'))
const AnotherComponent=React.lazy(()=>import ('./InputFocus'))


export class Code_Splitting extends Component {
  render() {
    // Suspense:-The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.

//The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.
    return (
      <div>
        <Suspense fallback={<div>Loading......</div>}>
            <OtherComponent/>
            <AnotherComponent/>
        </Suspense>
      </div>
    )
  }
}

export default Code_Splitting;