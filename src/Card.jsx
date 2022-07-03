function Card (props){
  return (
    <div className="card">
      <h2>{props.titulo}</h2>
      <img src={props.src}/>
      <p>{props.text}</p>
    </div>
  )
}

export default Card