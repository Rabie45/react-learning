import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
    
  return (
    <section>
     <ReactMarkdown className="suggested-recipe-container ">
      {props.recipe}
      </ReactMarkdown>
  </section>
  )
}
