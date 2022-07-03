import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <div className="comment-form-div">
      <form onSubmit={onSubmit}>

        <input className="comment-form-textarea-1" type="text" placeholder="Name" value={text}  onChange={(e) => setText(e.target.value)} />

        <textarea
          className="comment-form-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Comment"
        />

        <div className="Buttons-of-comment">
        <button className="comment-form-button" disabled={isTextareaDisabled}>
          {submitLabel}
        </button>

        {hasCancelButton && (
          <button
            type="button"
            className="comment-form-button comment-form-cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
