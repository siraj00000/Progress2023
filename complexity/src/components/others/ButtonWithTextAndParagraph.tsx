import React from 'react'
import './others.css'

type ButtonWithTextAndParagraphProps = {
  title: string
  paragraph: string
  heightClassName: string
}

const ButtonWithTextAndParagraph = (props: ButtonWithTextAndParagraphProps) => {
  return (
    <section className="ButtonWithTextAndParagraph__wrapper">
      <button>{props.title}</button>
      <p className={props.heightClassName}>{props.paragraph}</p>
    </section>
  )
}

export default React.memo(ButtonWithTextAndParagraph)
