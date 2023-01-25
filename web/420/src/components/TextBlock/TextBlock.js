import "./TextBlock.css";

function TextBlock(props) {
  return (
    <div class="TextB">
      {props.ali % 2 == 0 ? (
        <div class="Block">
          <div class="TextC">
            <h1 class="h1">{props.tittle}</h1>
            {props.link == undefined ? (
              <p class="p">{props.p}</p>
            ) : (
              <button
                class="buttA"
                onClick={() => {
                  window.location.replace(props.link);
                }}
              >
                Ir
              </button>
            )}
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
            <h1 class="h1">{props.tittle}</h1>
            {props.link == undefined ? (
              <p class="p">{props.p}</p>
            ) : (
              <button
                onClick={() => {
                  window.location.replace(props.link);
                }}
              >
                Ir
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TextBlock;
