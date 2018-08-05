import React from 'react'

const Note = ({position, textValue, onChangeText, selected, editable, ...others}) => {

        return (
                <textarea
                        {...others}
                        value={textValue}
                        style={{
                                caretColor: editable ? "auto" : "transparent",
                                top: position.y + "px",
                                left: position.x + "px",
                                width: "100px",
                                height: "100px",
                                backgroundColor: "yellow",
                                position: "absolute",
                                boxSizing: "border-box",       /* For IE and modern versions of Chrome */
                                MozBoxSizing: "border-box",    /* For Firefox                          */
                                WebkitBoxSizing: "border-box", /* For Safari                           */
                                resize: "none",
                                outline: "none",
                                borderStyle: (selected ? "dotted" : "none"),
                                borderColor: "black"
                        }}
                        onChange={editable ? onChangeText : null}
                >
                </textarea>
        )
};



export default Note;