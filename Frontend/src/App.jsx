import { useState } from 'react'
import Editor from "react-simple-code-editor"
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import "prismjs/themes/prism-tomorrow.css"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import Markdown from "react-markdown"
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum(a, b) {\n  return a + b;\n}`)
  const [review, setReview] = useState(``)
  const [isLoading, setIsLoading] = useState(false)
  const [language, setLanguage] = useState("javascript")

  const defaultCode = {
    javascript: `function sum(a, b) {\n  return a + b;\n}`,
    python: `def sum(a, b):\n    return a + b`,
    java: `public int sum(int a, int b) {\n    return a + b;\n}`,
    cpp: `int sum(int a, int b) {\n    return a + b;\n}`
  }

  async function reviewCode() {
    setIsLoading(true)
    setReview("")
    try {
      await axios.post('https://codesage-hjeo.onrender.com/ai/get-review', {
        code,
        language
      })
      setReview(response.data)
    } catch (error) {
      setReview("⚠️ AI is busy, please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  function CodeBlock({ children }) {
    const [copied, setCopied] = useState(false)
    const codeText = children?.props?.children || ""

    function handleCopy() {
      navigator.clipboard.writeText(codeText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div style={{ position: "relative" }}>
        <button onClick={handleCopy} className="copy-code-btn">
          {copied ? "✅" : "📋"}
        </button>
        <pre>{children}</pre>
      </div>
    )
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <div className="editor-header">
              <select
                className="language-select"
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value)
                  setCode(defaultCode[e.target.value])
                }}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
              </select>
            </div>

            <Editor.default
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => highlight(code, languages[language] || languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">Review</div>
        </div>

        <div className="right">
          {isLoading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Reviewing your code...</p>
            </div>
          ) : (
            <Markdown
              rehypePlugins={[rehypeHighlight]}
              components={{
                pre({ children }) {
                  return <CodeBlock>{children}</CodeBlock>
                }
              }}
            >
              {review}
            </Markdown>
          )}
        </div>
      </main>
    </>
  )
}

export default App