import "./App.css"
import {Editor} from '@monaco-editor/react';

function App() {
  return (
        <main 
        className="h-screen w-full flex bg-gray-950 gap-3.5 p-4"
        >
         <aside className="h-full w-1/4 bg-amber-100 rounded-lg"></aside>
         <section className="w-3/4 bg-neutral-800 rounded-lg overflow-hidden">
         <Editor height="100%" defaultLanguage="javascript" defaultValue="editor" theme="vs-dark" />;

         </section>


        </main>
  )
}

export default App;
