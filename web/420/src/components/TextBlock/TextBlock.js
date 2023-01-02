import "./TextBlock.css";

function TextBlock(props) {
  return (
    <div class="TextB">
      {props.ali % 2 == 0 ? (
        <div class="Block">
          <div class="TextC">
            <h1>{props.tittle}</h1>
            <p>{props.p}</p>
          </div>
          <div class="ImgC">
            <img src={props.img} />
          </div>
        </div>
      ) : (
        <div class="Block" id="Block2">
          <div class="ImgC">
            <img src={props.img} />
          </div>
          <div class="TextC">
            <h1>{props.tittle}</h1>
            <p>{props.p}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextBlock;
